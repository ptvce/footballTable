import React, { useState } from 'react';
import Tournament from './Tournament';


function ParticipantNameEntry (props) {
    const [state, setState] = useState({
        name: "",
        names: [],
        nameCheck: false,
        readyToPlay: false,
    });
    
    const formInput = (event) => {
        const name = event.target.value;
        setState({
            name: name,
            names: state.names,
            nameCheck: state.nameCheck,
            readyToPlay: state.readyToPlay,
        })
    }

    const addName = (event) => {
            event.preventDefault();
            let name = state.name;
            let names = state.names;
            let nameCheck = state.nameCheck;
            if (names.indexOf(name) !== -1) {
                return name.concat(" 2");
            }
            names.push(name);
            names.length >= 2 ? nameCheck = true : nameCheck = false;
            setState({
                names: names,
                name: "",
                readyToPlay: state.readyToPlay,
                nameCheck: nameCheck,
            })
        //ToDo: SendTo DB
    };

    const readyToPlay = () => {
         const readyToPlay = state.readyToPlay;
         const nameCheck = state.name.nameCheck;
        setState({
            readyToPlay: !readyToPlay,
            nameCheck: !nameCheck,
            name: state.name,
            names: state.names,
        })
    };

    let names = state.names;
    
    return (
            <div>
                {
                    state.readyToPlay ? <Tournament names={names} /> : (
                        <div className="mainText">    
                            <p>
                                Please add players
                            </p>
                            
                            <form>
                                <input onChange={(event) => formInput(event)} type="text" value={state.name} />
                                <button onClick={(event) => addName(event)} className="button">
                                    Add name
                                </button>
                            </form>
                            
                            <p>Tournament entrants:</p>
                            
                            <section>
                                <div className="nameDisplay">
                                    {
                                        names.map((name, index) => {
                                            return (
                                                <p className="entrants" key={index}> {name}</p>
                                            );
                                        })
                                    }
                                </div>

                                <div>
                                    {
                                        state.nameCheck ? (
                                            <div className="spacing">
                                                <button onClick={readyToPlay} className="button">
                                                    Create Tournament
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </section>
                        </div>
                    )
                }
            </div>
    );
};


export default ParticipantNameEntry;