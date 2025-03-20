// srhTeam.js
import { Team } from './team.js';

export class SRH extends Team {
    constructor() {
        super(
            'Sunrisers Hyderabad',
            'images/srh.png',
            'Pat Cummins',
            [
                { name: 'Pat Cummins', role: 'All Rounder / Captain', country: 'Australia', age: 34 },
                { name: 'Ishan Kishan', role: 'Batsman', country: 'India', age: 26 },
                { name: 'Travis Head', role: 'Batsman', country: 'Australia', age: 29 },
                { name: 'Abhishek Sharma', role: 'Batsman', country: 'India', age: 24 },
                { name: 'Heinrich Klaasen', role: 'Batsman', country: 'South Africa', age: 33 },
                { name: 'Nitish Kumar Reddy', role: 'All Rounder', country: 'India', age: 24 },
                { name: 'Mohammed Shami', role: 'Bowler', country: 'India', age: 34 },
                { name: 'Adam Zampa', role: 'Bowler', country: 'Australia', age: 29 },
                { name: 'Rahul Chahar', role: 'Bowler', country: 'India', age: 28 },
                { name: 'Harshal Patel', role: 'Bowler', country: 'India', age: 31 },
                { name: 'Jaydev Unadkat', role: 'Bowler', country: 'India', age: 34 }
            ],
            'images/srh-background.jpg'
        );
    }
}
