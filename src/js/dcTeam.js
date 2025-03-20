// dcTeam.js
import { Team } from './team.js';

export class DC extends Team {
    constructor() {
        super(
            '../images/bg/dc-bg.png',
            'Delhi Capitals',
            'Axar Patel',
            [
                { thumb: '../images/dc/patel.png', name: 'Axar Patel', role: 'Captain/All Rounder', country: 'India', age: 28 },
                { thumb: '../images/dc/faf.png', name: 'Faf du Plessis', role: 'Batsman', country: 'South Africa', age: 35 },
                { thumb: '../images/dc/jake.png', name: 'Jake', role: 'Batsman', country: 'Australia', age: 23 },
                { thumb: '../images/dc/nair.png', name: 'Karun Nair', role: 'Batsman', country: 'India', age: 35 },
                { thumb: '../images/dc/kl.png', name: 'KL Rahul', role: 'Batsman', country: 'India', age: 29 },
                { thumb: '../images/dc/stubbs.png', name: 'Tristan Stubbs', role: 'Batsman', country: 'Australia', age: 27 },
                { thumb: '../images/dc/kumar.png', name: 'Mukesh Kumar', role: 'Bowler', country: 'India', age: 31 },
                { thumb: '../images/dc/yadav.png', name: 'Kuldeep Yadav', role: 'Bowler', country: 'India', age: 27 },
                { thumb: '../images/dc/starc.png', name: 'Starc', role: 'Bowler', country: 'Australia', age: 34 },
                { thumb: '../images/dc/raj.png', name: 'Natarajan', role: 'Bowler', country: 'India', age: 30 },
                { thumb: '../images/dc/mohit.png', name: 'Mohit Kumar', role: 'Bowler', country: 'India', age: 35 }
            ],
        );
    }
}
