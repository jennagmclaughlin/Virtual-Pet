import React from 'react';
import { Characters } from "../Characters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import './pet-intro.css';

function PetIntro() {
    const listNames = [
        "Bingo",
        "Regret",
        "Applesauce",
        "Slimey",
        "Mittens",
        "Paws",
        "Shadow",
        "Sparky",
        "Noodle",
        "Chester",
        "Mango",
        "Bella",
        "Daisy",
        "Waffles",
        "Toby",
        "Gizmo",
        "Blerb",
        "Spudnip",
        "Basil",
        "Rose",
        "TERMINATOR",
        "Wally",
        "Timmy",
        "Lettie",
        "Pompuri",
        "Roger",
        "Spade",
        "Punchy",
        "Apple",
        "Banana",
        "Garfield",
        "Shaun",
        "Annie",
        "Gary",
        "Oliver",
        "Millie",
        "Sponge",
        "Bandit",
        "Copper",
        "Scratch"
    ];

    let prevIndex;

    const randName = () => {
        const nameField = document.getElementById('pet-intro_input');

        let size = listNames.length;
        // randomizes the arrays
        let randomIndex = Math.floor(size * Math.random());

        if (prevIndex === randomIndex) {
            // changes the result so they're not the same name back to back
            while (prevIndex === randomIndex) {
                randomIndex = Math.floor(size * Math.random());
                console.log("changing index to " + randomIndex);
                nameField.value = listNames[randomIndex]
            }
        }

        prevIndex = randomIndex
        nameField.value = listNames[randomIndex]
    }

    // randomize the pet the user gets
    const pet = Characters[Math.floor(Math.random() * Characters.length)];

    return (
        <div id="pet-intro">
            <h2>A {pet.species} hatched!</h2>
            <img src={pet.src} className="sprite" alt={pet.species}></img>
            <div className="pet-intro_buttons">
                <input type="text" minLength="1" maxLength="15" placeholder="Pick a name..." id="pet-intro_input" required></input>
                <button id="randomize" aria-label="Randomize" onClick={randName}><FontAwesomeIcon icon={faDice} /></button>
            </div>
            <button type="submit" id="pet-intro_submit">Continue...</button>
        </div>
    )
}

export default PetIntro;