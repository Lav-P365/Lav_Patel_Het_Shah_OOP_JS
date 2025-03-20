// kkrTeam.js
import { Team } from './team.js';

export class KKR extends Team {
    constructor() {
        super(
            '../images/bg/kkr-bg.png',
            'Kolkata Knight Riders',
            'Ajinkya Rahane',
            [
                { thumb: '../images/kkr/ar.png', name: 'Ajinkya Rahane', role: 'Captain/Batsman', country: 'India', age: 33 },
                { thumb: '../images/kkr/cock.png', name: 'Quinton de Kock', role: 'Batsman', country: 'South Africa', age: 36 },
                { thumb: '../images/kkr/manish.png', name: 'Manish Pandey', role: 'Batsman', country: 'India', age: 34 },
                { thumb: '../images/kkr/iyer.png', name: 'Venkatesh Iyer', role: 'Batsman', country: 'India', age: 26 },
                { thumb: '../images/kkr/andre.png', name: 'Andre Russell', role: 'All Rounder', country: 'West Indies', age: 34 },
                { thumb: '../images/kkr/sunil.png', name: 'Sunil Narine', role: 'All Rounder', country: 'West Indies', age: 35 },
                { thumb: '../images/kkr/rinku.png', name: 'Rinku Singh', role: 'All Rounder', country: 'India', age: 24 },
                { thumb: '../images/kkr/ali.png', name: 'Moeen Ali', role: 'All Rounder', country: 'England', age: 33 },
                { thumb: '../images/kkr/varun.png', name: 'Varun', role: 'Bowler', country: 'India', age: 28 },
                { thumb: '../images/kkr/rana.png', name: 'Harshit Rana', role: 'Bowler', country: 'India', age: 26 },
                { thumb: '../images/kkr/anrich.png', name: 'Anrich Nortje', role: 'Bowler', country: 'South Africa', age: 31 }
            ],
        );
    }
}
