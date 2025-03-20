// lsgTeam.js
import { Team } from './team.js';

export class LSG extends Team {
    constructor() {
        super(
            'Lucknow Super Giants',
            'images/lsg.png',
            'Rishabh Pant',
            [
                { name: 'Rishabh Pant', role: 'Captain/Batsman', country: 'India', age: 28 },
                { name: 'Aiden Markram', role: 'Batsman', country: 'India', age: 32 },
                { name: 'David Miller', role: 'Batsman', country: 'India', age: 33 },
                { name: 'Ayush Badoni', role: 'Batsman', country: 'India', age: 21 },
                { name: 'Nicholas Pooran', role: 'Batsman', country: 'West Indies', age: 31 },
                { name: 'Ravi Bishnoi', role: 'Bowler', country: 'India', age: 25 },
                { name: 'Avesh Khan', role: 'Bowler', country: 'India', age: 27 },
                { name: 'Mayank Yadav', role: 'Bowler', country: 'India', age: 25 },
                { name: 'Mitchell Marsh', role: 'All Rounder', country: 'Australia', age: 34 },
                { name: 'Akash Deep', role: 'All Rounder', country: 'India', age: 32 },
                { name: 'Shabaz Ahmed', role: 'All Rounder', country: 'India', age: 26 }
            ],
            'images/lsg-background.jpg'
        );
    }
}
