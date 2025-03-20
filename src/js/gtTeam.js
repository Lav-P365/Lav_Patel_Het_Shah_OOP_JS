// gtTeam.js
import { Team } from './team.js';

export class GT extends Team {
    constructor() {
        super(
            '../images/bg/gt-bg.png',
            'Gujarat Titans',
            'Shubman Gill',
            [
                { thumb: '../images/gt/gill.png', name: 'Shubman Gill', role: 'Captain / Batsman', country: 'India', age: 24 },
                { thumb: '../images/gt/rawat.png', name: 'Anuj Rawat', role: 'Batsman', country: 'India', age: 25 },
                { thumb: '../images/gt/joss.png', name: 'Jos Buttler', role: 'Batsman', country: 'England', age: 32 },
                { thumb: '../images/gt/khan.png', name: 'Rashid Khan', role: 'All Rounder', country: 'Afghanistan', age: 24 },
                { thumb: '../images/gt/rahul.png', name: 'Rahul Tewatia', role: 'All Rounder', country: 'India', age: 29 },
                { thumb: '../images/gt/sunder.png', name: 'Washington Sundar', role: 'All Rounder', country: 'India', age: 28 },
                { thumb: '../images/gt/glenn.png', name: 'Glenn Phillips', role: 'All Rounder', country: 'New Zealand', age: 30 },
                { thumb: '../images/gt/rabada.png', name: 'Kagiso Rabada', role: 'Bowler', country: 'South Africa', age: 29 },
                { thumb: '../images/gt/ishant.png', name: 'Ishant Sharma', role: 'Bowler', country: 'India', age: 35 },
                { thumb: '../images/gt/pb.png', name: 'Prasidh Krishna', role: 'Bowler', country: 'India', age: 27 },
                { thumb: '../images/gt/siraj.png', name: 'Mohammed Siraj', role: 'Bowler', country: 'India', age: 28 }
            ],
        );
    }
}
