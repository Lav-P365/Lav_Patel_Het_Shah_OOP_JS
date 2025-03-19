// main.js
import { CSK } from './cskTeam.js';
import { KKR } from './kkrTeam.js';
import { MI } from './miTeam.js';
import { RCB } from './rcbTeam.js';
import { PBKS } from './pbksTeam.js';
import { DC } from './dcTeam.js';

const teamImages = document.querySelectorAll('.teams img');

teamImages.forEach(image => {
    image.addEventListener('click', () => {
        let team;
        
        // Check the alt text or a unique identifier for each team
        switch(image.alt) {
            case 'Chennai Super Kings':
                team = new CSK();
                break;
            case 'Kolkata Knight Riders':
                team = new KKR();
                break;
            case 'Mumbai Indians':
                team = new MI();
                break;
            case 'Royal Challengers Bangalore':
                team = new RCB();
                break;
            case 'Punjab Kings':
                team = new PBKS();
                break;
            case 'Delhi Capitals':
                team = new DC();
                break;
            default:
                console.log('Team not found');
                return;
        }

        // Call a method to display team details (ensure this method exists in the Team class)
        team.displayTeamDetails();
    });
});
