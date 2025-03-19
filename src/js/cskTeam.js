// cskTeam.js
import { Team } from './team.js';

export class CSK extends Team {
    constructor() {
        super(
            'Chennai Super Kings',
            'images/csk.png',
            'Ruturaj Gaikwad',
            [
                { name: 'Ruturaj Gaikwad', role: 'Captain/Batsman', country: 'India', age: 28 },
                { name: 'Devon Conway', role: 'Batsman', country: 'New Zealand', age: 32 },
                { name: 'MS Dhoni', role: 'Batsman', country: 'India', age: 40 },
                { name: 'Rachin Ravindra', role: 'Batsman', country: 'New Zealand', age: 31 },
                { name: 'Khaleel Ahmed', role: 'Bowler', country: 'India', age: 28 },
                { name: 'Pathirana', role: 'Bowler', country: 'Sri Lanka', age: 24 },
                { name: 'Mukesh Choudhary', role: 'Bowler', country: 'India', age: 24 },
                { name: 'Ravindra Jadeja', role: 'All-Rounder', country: 'India', age: 36 },
                { name: 'Sam Curran', role: 'All-Rounder', country: 'England', age: 24 },
                { name: 'Shivam Dube', role: 'All-Rounder', country: 'India', age: 27 },
                { name: 'Ashwin', role: 'All-Rounder', country: 'India', age: 37 }
            ],
            'images/csk-background.jpg'
        );
    }
}
