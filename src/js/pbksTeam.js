// pbksTeam.js
import { Team } from './team.js';

export class PBKS extends Team {
    constructor() {
        super(
            'Punjab Kings',
            'images/pbks.png',
            'Shreyas Iyer',
            [
                { name: 'Shreyas Iyer', role: 'Captain/Batsman', country: 'India', age: 28 },
                { name: 'Josh Inglis', role: 'Batsman', country: 'Australia', age: 29 },
                { name: 'Prabhsimran Singh', role: 'Batsman', country: 'India', age: 26 },
                { name: 'Nehal Wadhera', role: 'Batsman', country: 'India', age: 24 },
                { name: 'Marcus Stoinis', role: 'All-Rounder', country: 'Australia', age: 34 },
                { name: 'Glenn Maxwell', role: 'All-Rounder', country: 'Australia', age: 34 },
                { name: 'Marco Jansen', role: 'All-Rounder', country: 'South Africa', age: 29 },
                { name: 'Yuzvendra Chahal', role: 'Bowler', country: 'India', age: 30 },
                { name: 'Harpreet Brar', role: 'Bowler', country: 'India', age: 25 },
                { name: 'Lockie Ferguson', role: 'Bowler', country: 'New Zealand', age: 32 },
                { name: 'Arshdeep Singh', role: 'Bowler', country: 'India', age: 26 }
            ],
            'images/pbks-background.jpg'
        );
    }
}
