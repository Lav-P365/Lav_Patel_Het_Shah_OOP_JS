// kkrTeam.js
import { Team } from './team.js';

export class KKR extends Team {
    constructor() {
        super(
            'Kolkata Knight Riders',
            'images/kkr.png',
            'Ajinkya Rahane',
            [
                { name: 'Ajinkya Rahane', role: 'Captain/Batsman', country: 'India', age: 33 },
                { name: 'Quinton de Kock', role: 'Batsman', country: 'South Africa', age: 36 },
                { name: 'Manish Pandey', role: 'Batsman', country: 'India', age: 34 },
                { name: 'Venkatesh Iyer', role: 'Batsman', country: 'India', age: 26 },
                { name: 'Andre Russell', role: 'All Rounder', country: 'West Indies', age: 34 },
                { name: 'Sunil Narine', role: 'All Rounder', country: 'West Indies', age: 35 },
                { name: 'Rinku Singh', role: 'All Rounder', country: 'India', age: 24 },
                { name: 'Moeen Ali', role: 'All Rounder', country: 'England', age: 33 },
                { name: 'Varun', role: 'Bowler', country: 'India', age: 28 },
                { name: 'Harshit Rana', role: 'Bowler', country: 'India', age: 26 },
                { name: 'Anrich Nortje', role: 'Bowler', country: 'South Africa', age: 31 }
            ],
            'images/kkr-background.jpg'
        );
    }
}
