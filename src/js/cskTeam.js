// cskTeam.js
import { Team } from './team.js';

export class CSK extends Team {
    constructor() {
        super(
            '../images/bg/csk-bg.png',
            'Chennai Super Kings',
            'Ruturaj Gaikwad',
            [
                { thumb: '../images/csk/rg.png', name: 'Ruturaj Gaikwad', role: 'Captain/Batsman', country: 'India', age: 28 },
                { thumb: '../images/csk/Devon-conway.png', name: 'Devon Conway', role: 'Batsman', country: 'New Zealand', age: 32 },
                { thumb: '../images/csk/ms.png', name: 'MS Dhoni', role: 'Batsman', country: 'India', age: 40 },
                { thumb: '../images/csk/rachin.png', name: 'Rachin Ravindra', role: 'Batsman', country: 'New Zealand', age: 31 },
                { thumb: '../images/csk/khaleel.png', name: 'Khaleel Ahmed', role: 'Bowler', country: 'India', age: 28 },
                { thumb: '../images/csk/rana.png', name: 'Pathirana', role: 'Bowler', country: 'Sri Lanka', age: 24 },
                { thumb: '../images/csk/mukesh.png', name: 'Mukesh Choudhary', role: 'Bowler', country: 'India', age: 24 },
                { thumb: '../images/csk/bapu.png', name: 'Ravindra Jadeja', role: 'All-Rounder', country: 'India', age: 36 },
                { thumb: '../images/csk/sam.png', name: 'Sam Curran', role: 'All-Rounder', country: 'England', age: 24 },
                { thumb: '../images/csk/dube.png', name: 'Shivam Dube', role: 'All-Rounder', country: 'India', age: 27 },
                { thumb: '../images/csk/ashwin.png', name: 'Ashwin', role: 'All-Rounder', country: 'India', age: 37 }
            ],
        );
    }
}
