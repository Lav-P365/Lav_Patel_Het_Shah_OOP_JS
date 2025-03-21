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

//  GSAP timeline
const tl = gsap.timeline();

tl.from('.logo img', {
    opacity: 0,
    scale: 5,  
    z: -1000,  
    duration: 2,  
    ease: 'power3.out',
    delay: 0.5,  
    rotationX: 90,  
    rotationY: 90,  
})
.from('.teams img', {
    opacity: 0,
    y: 50,  
    scale: 1,
    stagger: 0.2,  
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.1,  
})
.to('.background', {
    scale: 1.1,  
    duration: 5, 
    ease: 'power3.inOut',
    repeat: -1,  
    yoyo: true,  
});
