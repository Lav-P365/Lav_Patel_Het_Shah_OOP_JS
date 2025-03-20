// srhTeam.js
import { Team } from './team.js';

export class SRH extends Team {
    constructor() {
        super(
            '../images/bg/srh-bg.png',
            'Sunrisers Hyderabad',
            'Pat Cummins',
            [
                { thumb: '../images/srh/pc.png', name: 'Pat Cummins', role: 'All Rounder / Captain', country: 'Australia', age: 34 },
                { thumb: '../images/srh/ik.png', name: 'Ishan Kishan', role: 'Batsman', country: 'India', age: 26 },
                { thumb: '../images/srh/th.png', name: 'Travis Head', role: 'Batsman', country: 'Australia', age: 29 },
                { thumb: '../images/srh/as.png', name: 'Abhishek Sharma', role: 'Batsman', country: 'India', age: 24 },
                { thumb: '../images/srh/hk.png', name: 'Heinrich Klaasen', role: 'Batsman', country: 'South Africa', age: 33 },
                { thumb: '../images/srh/nk.png', name: 'Nitish Kumar Reddy', role: 'All Rounder', country: 'India', age: 24 },
                { thumb: '../images/srh/ms.png', name: 'Mohammed Shami', role: 'Bowler', country: 'India', age: 34 },
                { thumb: '../images/srh/az.png', name: 'Adam Zampa', role: 'Bowler', country: 'Australia', age: 29 },
                { thumb: '../images/srh/rc.png', name: 'Rahul Chahar', role: 'Bowler', country: 'India', age: 28 },
                { thumb: '../images/srh/hp.png', name: 'Harshal Patel', role: 'Bowler', country: 'India', age: 31 },
                { thumb: '../images/srh/ju.png', name: 'Jaydev Unadkat', role: 'Bowler', country: 'India', age: 34 }
            ],
        );
    }
}
