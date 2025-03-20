// rrTeam.js
import { Team } from './team.js';

export class RR extends Team {
    constructor() {
        super(
            'Rajasthan Royals',
            'images/rr.png',
            'Sanju Samson',
            [
                { name: 'Sanju Samson', role: 'Captain/Batsman', country: 'India', age: 32 },
                { name: 'Dhruv Jurel', role: 'Batsman', country: 'India', age: 24 },
                { name: 'Shimron Hetmyer', role: 'Batsman', country: 'West Indies', age: 28 },
                { name: 'Nitish Rana', role: 'Batsman', country: 'India', age: 29 },
                { name: 'Riyan Parag', role: 'Batsman', country: 'India', age: 24 },
                { name: 'Yashasvi Jaiswal', role: 'Batsman', country: 'India', age: 22 },
                { name: 'Hasaranga', role: 'All Rounder', country: 'Sri Lanka', age: 27 },
                { name: 'Maheesh', role: 'Bowler', country: 'Sri Lanka', age: 28 },
                { name: 'Jofra Archer', role: 'Bowler', country: 'England', age: 32 },
                { name: 'Tushar', role: 'Bowler', country: 'India', age: 27 },
                { name: 'Sandeep Sharma', role: 'Bowler', country: 'India', age: 35 }
            ],
            'images/rr.jpg'
        );
    }
}
