// dcTeam.js
import { Team } from './team.js';

export class DC extends Team {
    constructor() {
        super(
            'Delhi Capitals',
            'images/dc.png',
            'Axar Patel',
            [
                { name: 'Axar Patel', role: 'Captain/All Rounder', country: 'India', age: 28 },
                { name: 'Faf du Plessis', role: 'Batsman', country: 'South Africa', age: 35 },
                { name: 'Jake', role: 'Batsman', country: 'Australia', age: 23 },
                { name: 'Karun Nair', role: 'Batsman', country: 'India', age: 35 },
                { name: 'KL Rahul', role: 'Batsman', country: 'India', age: 29 },
                { name: 'Tristan Stubbs', role: 'Batsman', country: 'Australia', age: 27 },
                { name: 'Mukesh Kumar', role: 'Bowler', country: 'India', age: 31 },
                { name: 'Kuldeep Yadav', role: 'Bowler', country: 'India', age: 27 },
                { name: 'Starc', role: 'Bowler', country: 'Australia', age: 34 },
                { name: 'Natarajan', role: 'Bowler', country: 'India', age: 30 },
                { name: 'Mohit Kumar', role: 'Bowler', country: 'India', age: 35 }
            ],
            'images/dc-background.jpg'
        );
    }
}
