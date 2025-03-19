// rcbTeam.js
import { Team } from './team.js';

export class RCB extends Team {
    constructor() {
        super(
            'Royal Challengers Bangalore',
            'images/rcb.png',
            'Rajat Patidar',
            [
                { name: 'Rajat Patidar', role: 'Captain/Batsman', country: 'India', age: 26 },
                { name: 'Virat Kohli', role: 'Batsman', country: 'India', age: 36 },
                { name: 'Devdutt Padikkal', role: 'Batsman', country: 'India', age: 26 },
                { name: 'Phil Salt', role: 'Batsman', country: 'England', age: 28 },
                { name: 'Jitesh Sharma', role: 'Batsman', country: 'India', age: 28 },
                { name: 'Tim David', role: 'All Rounder', country: 'Australia', age: 28 },
                { name: 'Liam Livingstone', role: 'All Rounder', country: 'England', age: 29 },
                { name: 'Krunal Pandya', role: 'All Rounder', country: 'India', age: 30 },
                { name: 'Josh Hazelwood', role: 'Bowler', country: 'Australia', age: 30 },
                { name: 'Yash Dayal', role: 'Bowler', country: 'India', age: 27 },
                { name: 'Bhuvi', role: 'Bowler', country: 'India', age: 32 }
            ],
            'images/rcb-background.jpg'
        );
    }
}
