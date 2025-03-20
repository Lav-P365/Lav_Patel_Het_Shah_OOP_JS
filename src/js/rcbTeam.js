// rcbTeam.js
import { Team } from './team.js';

export class RCB extends Team {
    constructor() {
        super(
            '../images/bg/rcb-bg.png',
            'Royal Challengers Bangalore',
            'Rajat Patidar',
            [
                { thumb: '../images/rcb/rp.png', name: 'Rajat Patidar', role: 'Captain/Batsman', country: 'India', age: 26 },
                { thumb: '../images/rcb/vk.png', name: 'Virat Kohli', role: 'Batsman', country: 'India', age: 36 },
                { thumb: '../images/rcb/dp.png', name: 'Devdutt Padikkal', role: 'Batsman', country: 'India', age: 26 },
                { thumb: '../images/rcb/ps.png', name: 'Phil Salt', role: 'Batsman', country: 'England', age: 28 },
                { thumb: '../images/rcb/js.png', name: 'Jitesh Sharma', role: 'Batsman', country: 'India', age: 28 },
                { thumb: '../images/rcb/td.png', name: 'Tim David', role: 'All Rounder', country: 'Australia', age: 28 },
                { thumb: '../images/rcb/ll.png', name: 'Liam Livingstone', role: 'All Rounder', country: 'England', age: 29 },
                { thumb: '../images/rcb/kp.png', name: 'Krunal Pandya', role: 'All Rounder', country: 'India', age: 30 },
                { thumb: '../images/rcb/jh.png', name: 'Josh Hazelwood', role: 'Bowler', country: 'Australia', age: 30 },
                { thumb: '../images/rcb/yd.png', name: 'Yash Dayal', role: 'Bowler', country: 'India', age: 27 },
                { thumb: '../images/rcb/bhuvi.png', name: 'Bhuvi', role: 'Bowler', country: 'India', age: 32 }
            ],
        );
    }
}
