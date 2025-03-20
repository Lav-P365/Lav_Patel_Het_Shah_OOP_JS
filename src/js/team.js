// team.js
export class Team {
    constructor(name, logo, captain, players, backgroundImage) {
        this.name = name;
        this.logo = logo;
        this.captain = captain;
        this.players = players; // Array of players
        this.backgroundImage = backgroundImage;
    }

    displayTeamDetails() {
        // Method to display team details
        const teamInfo = `
            <h1>${this.name}</h1>
            <div class="team-background" style="background-image: url('${this.backgroundImage}')">
                <h2>Captain: ${this.captain}</h2>
                <ul>
                    ${this.players.map(player => `
                        <li>${player.name} - ${player.role} - ${player.country} - Age: ${player.age}</li>
                    `).join('')}
                </ul>
            </div>
        `;
        document.body.innerHTML = teamInfo;  // This is where you can display team details dynamically.
    }
}
