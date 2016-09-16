import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Stats } from '../';
import * as child_process from 'child_process';

const airportCmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';

@Injectable()
export class WifiStatsService {
  update: Subject<Stats> = new Subject<Stats>();

  constructor() {
    setInterval(this.updateStats.bind(this), 1000);
  }

  private scanNetwork() {
    child_process.exec(`${airportCmd} -s`, function (error: Error, stdout: string, stderror: string) {
      if (error) {
        console.error(error);
        return;
      }

      console.log(stdout.split('\n'));
    }.bind(this));
  }

  private updateStats() {
    child_process.exec(`${airportCmd} -I`, function (error: Error, stdout: string, stderror: string) {
      if (error) {
        console.error(error);
        return;
      }

      let lines: string[] = stdout.split('\n');
      let parts: string[];
      let obj: Stats = new Stats();
      lines.forEach((line: string) => {
        // split by delimiter
        parts = line.split(':');
        // add to object
        if (parts[ 1 ]) {
          if (parts.length > 2) {
            let value = '';
            parts.forEach((val: string, index: number) => {
              if (index > 0) {
                value += index === parts.length - 1 ? val : `${val}:`;
              }
              obj[ parts[ 0 ].replace(/ /g, '') ] = value.replace(/ /g, '');
            });
          } else {
            if (parts[ 1 ].indexOf(',') > 0) {
              parts[ 1 ] = parts[ 1 ].split(',')[ 0 ];
            }
            obj[ parts[ 0 ].replace(/ /g, '') ] = parts[ 1 ].replace(/ /g, '');
          }
        }
      });
      this.update.next(obj);
    }.bind(this));
  }
}
