export class Team {
    constructor(backgroundImage, name, captain, players) {
        this.backgroundImage = backgroundImage;
        this.name = name;
        this.captain = captain;
        this.players = players; 
    }

    displayTeamDetails() {
        console.log('Background Image:', this.backgroundImage);

        const teamInfo = `
            <div class="team-container">
                <h1 class="team-name">${this.name}</h1>
                <div class="team-background" style="background-image: url('${this.backgroundImage}')">
                    <h2 class="team-captain">Captain: ${this.captain}</h2>
                    <ul class="player-list">
                        ${this.players.map(player => `
                            <li class="player-card">
                                <img src="${player.thumb}" alt="${player.name}" class="player-image"/>
                                <div class="player-info">
                                    <p class="player-name">${player.name}</p>
                                    <p class="player-role">${player.role}</p>
                                    <p class="player-country">${player.country}</p>
                                    <p class="player-age">Age: ${player.age}</p>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                    <!-- Back to Home Button -->
                    <button class="back-button">Back to Home</button>
                </div>
            </div>
        `;

        document.body.innerHTML = teamInfo;

        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                window.location.href = 'index.html'; 
            });
        }
    }
}
