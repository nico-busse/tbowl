import React from 'react';
import '../styles/TeamFormation.css';

const TeamFormation = ({ team, formation, color }) => {
    const renderPlayer = (name, position) => (
        <div className="player-marker">
            <div className="marker" style={{ backgroundColor: color }}></div>
            <span className="player-name">{name}</span>
        </div>
    );

    const renderFormation = () => {
        if (formation === "4-2-3-1") {
            return (
                <>
                    <div className="row forwards">
                        {renderPlayer(team.players[0], "ST")}
                    </div>
                    <div className="row attacking-mid">
                        {renderPlayer(team.players[1], "LW")}
                        {renderPlayer(team.players[2], "CAM")}
                        {renderPlayer(team.players[3], "RW")}
                    </div>
                    <div className="row defensive-mid">
                        {renderPlayer(team.players[4], "CDM")}
                        {renderPlayer(team.players[5], "CDM")}
                    </div>
                    <div className="row defenders">
                        {renderPlayer(team.players[6], "LB")}
                        {renderPlayer(team.players[7], "CB")}
                        {renderPlayer(team.players[8], "CB")}
                        {renderPlayer(team.players[9], "RB")}
                    </div>
                    <div className="row goalkeeper">
                        {renderPlayer(team.players[10], "GK")}
                    </div>
                </>
            );
        } else if (formation === "4-3-4") {
            return (
                <>
                    <div className="row forwards">
                        {renderPlayer(team.players[0], "LW")}
                        {renderPlayer(team.players[1], "ST")}
                        {renderPlayer(team.players[2], "RW")}
                        {renderPlayer(team.players[3], "ST")}
                    </div>
                    <div className="row midfield">
                        {renderPlayer(team.players[4], "CM")}
                        {renderPlayer(team.players[5], "CDM")}
                        {renderPlayer(team.players[6], "CM")}
                    </div>
                    <div className="row defenders">
                        {renderPlayer(team.players[7], "LB")}
                        {renderPlayer(team.players[8], "CB")}
                        {renderPlayer(team.players[9], "CB")}
                        {renderPlayer(team.players[10], "RB")}
                    </div>
                    <div className="row goalkeeper">
                        {renderPlayer(team.players[11], "GK")}
                    </div>
                </>
            );
        }
    };

    return (
        <div className="formation-container">
            <div className="formation">
                {renderFormation()}
            </div>
        </div>
    );
};

export default TeamFormation; 