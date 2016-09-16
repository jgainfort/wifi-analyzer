export class Stats {
   agrCtlRSSI: number;
    agrExtRSSI: number;
    agrCtlNoise: number;
    agrExtNoise: number;
    state: string;
    opmode: string;
    lastTxRate: number;
    maxRate: number;
    lastAssocStatus: number;
    '802.11auth': string;
    linkauth: string;
    BSSID: string;
    SSID: string;
    MCS: number;
    channel: number;

    constructor() { }
}
