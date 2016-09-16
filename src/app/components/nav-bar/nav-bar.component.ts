import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  ssid: string;
  company: string;
  macId: string;
  frequency: string;
  maxBandwidth: string;
  standard: string;

  constructor() { }

  ngOnInit() {
    this.ssid = 'NotMyWifi';
    this.company = 'Tenda Technology Co., Ltd.';
    this.macId = 'C8:3A:35:58:B3:35';
    this.frequency = '5 GHz';
    this.maxBandwidth = '1300 Mbps';
    this.standard = '802.11ac';
  }
}
