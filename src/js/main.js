import { CSK } from './cskTeam.js';
import { KKR } from './kkrTeam.js';
import { GT } from './gtTeam.js';
import { LSG } from './lsgTeam.js';
import { RR } from './rrTeam.js';
import { MI } from './miTeam.js';
import { RCB } from './rcbTeam.js';
import { PBKS } from './pbksTeam.js';
import { DC } from './dcTeam.js';
import { SRH } from './srhTeam.js';

const teamsMap = {
    'Chennai Super Kings': CSK,
    'Kolkata Knight Riders': KKR,
    'Mumbai Indians': MI,
    'Royal Challengers Bangalore': RCB,
    'Punjab Kings': PBKS,
    'Delhi Capitals': DC,
    'Sunrisers Hyderabad': SRH,
    'Rajasthan Royals': RR,
    'Gujarat Titans': GT,
    'Lucknow Super Giants': LSG
};

const teamImages = document.querySelectorAll('.teams img');

teamImages.forEach(image => {
    image.addEventListener('click', () => {
        const teamClass = teamsMap[image.alt]; 

        if (teamClass) {
            const team = new teamClass();  
            team.displayTeamDetails();  
        } else {
            console.log('Team not found');
        }
    });
});
