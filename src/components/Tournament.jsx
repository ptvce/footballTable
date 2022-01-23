import React, { Component, Fragment, useState } from 'react';
import {Link, Redirect} from "react-router-dom";
import ParticipantNameEntry from './ParticipantNameEntry';
import Participants from "./Participants";

let uniquePlayer = "";
function Tournament (props) {
    const [state, setState] = useState({
        players: [],
        history: [],
        reset: false,
    })
    
    const historyCheck = () => {
        let players = state.players;
        let history = state.history;
        let uniquePlayer = players[Math.floor(Math.random() *players.length)]
        while (history.indexOf(uniquePlayer) !== -1) {
            uniquePlayer = players[Math.floor(Math.random() *players.length)]
        }
        history.push(uniquePlayer);
        return uniquePlayer;
    };

    const pairPicker = () => {
        let players = state.players;
        let pick = [];
        for (let i = 1; i <= players.length/2; i += 1) {
            pick.push(
                <Fragment key={i}>
                   {/* <p className="bracket" key={i}>
                      {historyCheck()} Vs. {historyCheck()}
                   </p> */}
                   <div className="bracket">
                       <Participants player1 = {historyCheck()} player2 = {historyCheck()} storageKey={i} />
                   </div>
                </Fragment>
            )
        }
        return pick;
    };

    const goBack = () => {
        setState ({
            reset: true,
        })
    };

    const goToWinner = () => {
        window.location='/winner';
    };

    const saveResult = () => {
        localStorage.setItem('playersScore', JSON.stringify(players));
    }

    state.players = props.names;
    
    let players = state.players;

    if (players.length % 2 !== 0) players.push("(no opponent)") ; 

        return (
            <Fragment>
                {
                    state.reset ? <ParticipantNameEntry /> : (
                        <Fragment>
                            <div>
                                Matches
                                {pairPicker()}
                            </div>
                            <div>
                                <button onClick={goBack} className="button">
                                    Go again!
                                </button> 
                                <button onClick={goToWinner} className="button spacing">
                                    Winners
                                </button> 
                            </div>
                            <div>
                               
                            </div>
                        </Fragment>
                    )
                }
            </Fragment>
        );
};


export default Tournament;