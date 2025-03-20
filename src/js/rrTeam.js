// rrTeam.js
import { Team } from './team.js';

export class RR extends Team {
    constructor() {
        super(
            '../images/bg/rr-bg.png',
            'Rajasthan Royals',
            'Sanju Samson',
            [
                { thumb: '../images/rr/sanju.png', name: 'Sanju Samson', role: 'Captain/Batsman', country: 'India', age: 32 },
                { thumb: '../images/rr/dr.png', name: 'Dhruv Jurel', role: 'Batsman', country: 'India', age: 24 },
                { thumb: '../images/rr/sh.png', name: 'Shimron Hetmyer', role: 'Batsman', country: 'West Indies', age: 28 },
                { thumb: '../images/rr/nr.png', name: 'Nitish Rana', role: 'Batsman', country: 'India', age: 29 },
                { thumb: '../images/rr/rp.png', name: 'Riyan Parag', role: 'Batsman', country: 'India', age: 24 },
                { thumb: '../images/rr/yj.png', name: 'Yashasvi Jaiswal', role: 'Batsman', country: 'India', age: 22 },
                { thumb: '../images/rr/hs.png', name: 'Hasaranga', role: 'All Rounder', country: 'Sri Lanka', age: 27 },
                { thumb: '../images/rr/mah.png', name: 'Maheesh', role: 'Bowler', country: 'Sri Lanka', age: 28 },
                { thumb: '../images/rr/ja.png', name: 'Jofra Archer', role: 'Bowler', country: 'England', age: 32 },
                { thumb: '../images/rr/ts.png', name: 'Tushar', role: 'Bowler', country: 'India', age: 27 },
                { thumb: '../images/rr/ss.png', name: 'Sandeep Sharma', role: 'Bowler', country: 'India', age: 35 }
            ],
        );
    }
}
