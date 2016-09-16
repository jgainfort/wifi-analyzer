import { Component, OnInit } from '@angular/core';
import { WifiStatsService, Stats } from '../../shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css' ]
})
export class NavBarComponent implements OnInit {
  stats: Stats = new Stats();
  company: string = 'test company';
  standard: string = '802.11ac';

  constructor(private wifiStatsService: WifiStatsService) {
    wifiStatsService.update
      .subscribe(this.update.bind(this));
  }

  ngOnInit() { }

  update(obj: Stats) {
    this.stats = obj;
  }
}
