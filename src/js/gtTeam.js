// gtTeam.js
import { Team } from './team.js';

export class GT extends Team {
    constructor() {
        super(
            'Gujarat Titans',
            'images/gt.png',
            'Shubman Gill',
            [
                { name: 'Shubman Gill', role: 'Captain / Batsman', country: 'India', age: 24 },
                { name: 'Anuj Rawat', role: 'Batsman', country: 'India', age: 25 },
                { name: 'Jos Buttler', role: 'Batsman', country: 'England', age: 32 },
                { name: 'Rashid Khan', role: 'All Rounder', country: 'Afghanistan', age: 24 },
                { name: 'Rahul Tewatia', role: 'All Rounder', country: 'India', age: 29 },
                { name: 'Washington Sundar', role: 'All Rounder', country: 'India', age: 28 },
                { name: 'Glenn Phillips', role: 'All Rounder', country: 'New Zealand', age: 30 },
                { name: 'Kagiso Rabada', role: 'Bowler', country: 'South Africa', age: 29 },
                { name: 'Ishant Sharma', role: 'Bowler', country: 'India', age: 35 },
                { name: 'Prasidh Krishna', role: 'Bowler', country: 'India', age: 27 },
                { name: 'Mohammed Siraj', role: 'Bowler', country: 'India', age: 28 }
            ],
            'images/bg/gt-bg.png'
        );
    }
}
