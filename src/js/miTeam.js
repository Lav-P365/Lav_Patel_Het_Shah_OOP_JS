// miTeam.js
import { Team } from './team.js';

export class MI extends Team {
    constructor() {
        super(
            'Mumbai Indians',
            'images/mi.png',
            'Hardik Pandya',
            [
                { name: 'Hardik Pandya', role: 'Captain/All Rounder', country: 'India', age: 30 },
                { name: 'Rohit Sharma', role: 'Batsman', country: 'India', age: 37 },
                { name: 'Tilak Verma', role: 'Batsman', country: 'India', age: 26 },
                { name: 'Suryakumar Yadav', role: 'Batsman', country: 'India', age: 33 },
                { name: 'Will Jacks', role: 'Batsman', country: 'England', age: 28 },
                { name: 'Ryan Rickleton', role: 'Batsman', country: 'South Africa', age: 28 },
                { name: 'Mitchell Santner', role: 'All Rounder', country: 'New Zealand', age: 32 },
                { name: 'Deepak Chahar', role: 'All Rounder', country: 'India', age: 28 },
                { name: 'Jasprit Bumrah', role: 'Bowler', country: 'India', age: 29 },
                { name: 'Trent Boult', role: 'Bowler', country: 'New Zealand', age: 33 },
                { name: 'Karn Sharma', role: 'Bowler', country: 'India', age: 31 }
            ],
            'images/mi-background.jpg'
        );
    }
}
