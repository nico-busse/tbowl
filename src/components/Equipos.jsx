import React from 'react';
import TeamFormation from './TeamFormation';
import '../styles/Equipos.css';

const Equipos = () => {
    const team1 = {
        name: "Equipo Blanco",
        formation: "4-2-3-1",
        players: [
            "Player 1", "Player 2", "Player 3", "Player 4", "Player 5",
            "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11"
        ]
    };

    const team2 = {
        name: "Equipo Azul",
        formation: "4-3-4",
        players: [
            "Player 1", "Player 2", "Player 3", "Player 4", "Player 5",
            "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11", "Player 12"
        ]
    };

    return (
        <div className="equipos-container">
            <div className="teams-display">
                <div className="team">
                    <h3>{team1.name}</h3>
                    <div className="formation-label">{team2.formation}</div>
                    <TeamFormation 
                        team={team1} 
                        formation={team1.formation} 
                        color="#ffffff" 
                    />
                </div>
                <div className="team">
                    <h3>{team2.name}</h3>
                    <div className="formation-label">{team2.formation}</div>
                    <TeamFormation 
                        team={team2} 
                        formation={team2.formation} 
                        color="#0066cc" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Equipos;