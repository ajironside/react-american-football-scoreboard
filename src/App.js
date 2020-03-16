//TODO: STEP 1 - Import the useState hook.
import React from "react";
import { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

    const [homeScore, setHomeScore] = useState({
        home: 0
    });

    const [awayScore, setAwayScore] = useState({
        away: 0
    });

    return ( <
        div className = "container" >

        <
        section className = "scoreboard" >

        <
        div className = "topRow" >

        <
        div className = "home" >

        <
        h2 className = "home__name" > Lions < /h2>

        <
        div className = "home__score" > { homeScore.home } < /div>

        <
        /div>

        <
        div className = "timer" > 00: 03 < /div>

        <
        div className = "away" >

        <
        h2 className = "away__name" > Tigers < /h2>  <
        div className = "away__score" > { awayScore.away } < /div>

        <
        /div>

        <
        /div>

        <
        BottomRow / >

        <
        /section>

        <
        section className = "buttons" >

        <
        div className = "homeButtons" >

        <
        button className = "homeButtons__touchdown"
        onClick = {
            () => setHomeScore({ home: homeScore.home + 7 })
        } > Home Touchdown < /button>  <
        button className = "homeButtons__fieldGoal"
        onClick = {
            () => setHomeScore({ home: homeScore.home + 3 })
        } > Home Field Goal < /button>

        <
        /div>

        <
        div className = "awayButtons" >

        <
        button className = "awayButtons__touchdown"
        onClick = {
            () => setAwayScore({ away: awayScore.away + 7 }) } > Away Touchdown < /button> <
        button className = "awayButtons__fieldGoal"
        onClick = {
            () => setAwayScore({ away: awayScore.away + 3 }) } > Away Field Goal < /button>

        <
        /div>

        <
        /section>

        <
        /div>
    );
}

export default App;