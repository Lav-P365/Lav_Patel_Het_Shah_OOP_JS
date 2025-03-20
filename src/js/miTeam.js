// miTeam.js
import { Team } from './team.js';

export class MI extends Team {
    constructor() {
        super(
            '../images/bg/mi-bg.png',
            'Mumbai Indians',
            'Hardik Pandya',
            [
                { thumb: '../images/mi/hr.png', name: 'Hardik Pandya', role: 'Captain/All Rounder', country: 'India', age: 30 },
                { thumb: '../images/mi/rs.png', name: 'Rohit Sharma', role: 'Batsman', country: 'India', age: 37 },
                { thumb: '../images/mi/tv.png', name: 'Tilak Verma', role: 'Batsman', country: 'India', age: 26 },
                { thumb: '../images/mi/sy.png', name: 'Suryakumar Yadav', role: 'Batsman', country: 'India', age: 33 },
                { thumb: '../images/mi/wj.png', name: 'Will Jacks', role: 'Batsman', country: 'England', age: 28 },
                { thumb: '../images/mi/rr.png', name: 'Ryan Rickleton', role: 'Batsman', country: 'South Africa', age: 28 },
                { thumb: '../images/mi/san.png', name: 'Mitchell Santner', role: 'All Rounder', country: 'New Zealand', age: 32 },
                { thumb: '../images/mi/deepak.png', name: 'Deepak Chahar', role: 'All Rounder', country: 'India', age: 28 },
                { thumb: '../images/mi/jas.png', name: 'Jasprit Bumrah', role: 'Bowler', country: 'India', age: 29 },
                { thumb: '../images/mi/tb.png', name: 'Trent Boult', role: 'Bowler', country: 'New Zealand', age: 33 },
                { thumb: '../images/mi/karn.png', name: 'Karn Sharma', role: 'Bowler', country: 'India', age: 31 }
            ],
        );
    }
}
