// pbksTeam.js
import { Team } from './team.js';

export class PBKS extends Team {
    constructor() {
        super(
            '../images/bg/pbks-bg.png',
            'Punjab Kings',
            'Shreyas Iyer',
            [
                { thumb: '../images/pbks/si.png', name: 'Shreyas Iyer', role: 'Captain/Batsman', country: 'India', age: 28 },
                { thumb: '../images/pbks/ji.png', name: 'Josh Inglis', role: 'Batsman', country: 'Australia', age: 29 },
                { thumb: '../images/pbks/ps.png', name: 'Prabhsimran Singh', role: 'Batsman', country: 'India', age: 26 },
                { thumb: '../images/pbks/nw.png', name: 'Nehal Wadhera', role: 'Batsman', country: 'India', age: 24 },
                { thumb: '../images/pbks/ms.png', name: 'Marcus Stoinis', role: 'All-Rounder', country: 'Australia', age: 34 },
                { thumb: '../images/pbks/gm.png', name: 'Glenn Maxwell', role: 'All-Rounder', country: 'Australia', age: 34 },
                { thumb: '../images/pbks/mj.png', name: 'Marco Jansen', role: 'All-Rounder', country: 'South Africa', age: 29 },
                { thumb: '../images/pbks/yc.png', name: 'Yuzvendra Chahal', role: 'Bowler', country: 'India', age: 30 },
                { thumb: '../images/pbks/hb.png', name: 'Harpreet Brar', role: 'Bowler', country: 'India', age: 25 },
                { thumb: '../images/pbks/lf.png', name: 'Lockie Ferguson', role: 'Bowler', country: 'New Zealand', age: 32 },
                { thumb: '../images/pbks/as.png', name: 'Arshdeep Singh', role: 'Bowler', country: 'India', age: 26 }
            ],
        );
    }
}
