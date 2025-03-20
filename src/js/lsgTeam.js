// lsgTeam.js
import { Team } from './team.js';

export class LSG extends Team {
    constructor() {
        super(
            '../images/bg/lsg-bg.png',
            'Lucknow Super Giants',
            'Rishabh Pant',
            [
                { thumb: '../images/lsg/pant.png', name: 'Rishabh Pant', role: 'Captain/Batsman', country: 'India', age: 28 },
                { thumb: '../images/lsg/aiden.png', name: 'Aiden Markram', role: 'Batsman', country: 'India', age: 32 },
                { thumb: '../images/lsg/david.png', name: 'David Miller', role: 'Batsman', country: 'India', age: 33 },
                { thumb: '../images/lsg/ayush.png', name: 'Ayush Badoni', role: 'Batsman', country: 'India', age: 21 },
                { thumb: '../images/lsg/pooran.png', name: 'Nicholas Pooran', role: 'Batsman', country: 'West Indies', age: 31 },
                { thumb: '../images/lsg/ravi.png', name: 'Ravi Bishnoi', role: 'Bowler', country: 'India', age: 25 },
                { thumb: '../images/lsg/khan.png', name: 'Avesh Khan', role: 'Bowler', country: 'India', age: 27 },
                { thumb: '../images/lsg/yadav.png', name: 'Mayank Yadav', role: 'Bowler', country: 'India', age: 25 },
                { thumb: '../images/lsg/marsh.png', name: 'Mitchell Marsh', role: 'All Rounder', country: 'Australia', age: 34 },
                { thumb: '../images/lsg/deep.png', name: 'Akash Deep', role: 'All Rounder', country: 'India', age: 32 },
                { thumb: '../images/lsg/ahmed.png', name: 'Shabaz Ahmed', role: 'All Rounder', country: 'India', age: 26 }
            ],
        );
    }
}
