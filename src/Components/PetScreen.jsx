import React from 'react';
// pixel art bg images thanks to https://free-game-assets.itch.io/
// import bgMountains from '../Img/backgrounds/bgMountains.png';
// import bgNight from '../Img/backgrounds/bgNight.png';
// import bgPlains from '../Img/backgrounds/bgPlains.png';
// import bgTrees from '../Img/backgrounds/bgMountains.png';
// import bgDungeon from '../Img/backgrounds/bgDungeon.jpg';
// egg sprite thanks to https://peter234bike.itch.io/
import egg from '../Img/egg/egg.png';
import PetIntro from './PetIntro/PetIntro.js';

const hatchEgg = () => {
    const whiteScreen = document.getElementById("white-screen");
    whiteScreen.classList.add("hatch");

    // "click on the egg to hatch it!"
    const beginText = document.getElementById("begin-text");
    beginText.style.opacity = "0";

    const egg = document.getElementById("egg-button");

    const screen = document.getElementById("screen");

    const petIntro = document.getElementById("pet-intro");

    // after 1s (1000ms)
    setTimeout(function () {
        beginText.style.display = "none";
        egg.style.display = "none";
        whiteScreen.style.display = "none";
        screen.style.backgroundColor = "white";
        petIntro.style.display = "flex";
    }, 1000)

    // after 1.5s (1500ms)
    setTimeout(function () {
        petIntro.style.opacity = "1"
    }, 1500)
}

export default class PetScreen extends React.Component {
    // constructors run immediately when class component instance is created
    constructor(props) {
        // necessary to call, otherwise this.state will be undefined!
        super(props);

        // assigning initial state in constructor
        this.state = {
            array: [],
        }
    }

    render() {
        return <>
            <div id="screen" className="screen">
                <h2 id="begin-text">Click on the egg to hatch it!</h2>
                <button id="egg-button" onClick={hatchEgg}>
                    <img src={egg} className="egg" alt="egg"></img>
                </button>
                <div id="white-screen" className="white-screen"></div>
                <PetIntro></PetIntro>
            </div>
        </>
    }
}