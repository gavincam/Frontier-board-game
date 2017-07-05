import React, { Component } from 'react';
import logo from './images/frontier-logo-type.svg';
import PlayerComponent from "./components/view/Player-component";
import Title from './components/view/Title';
import Shop from './components/view/Shop';
import './components/view/styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxPlayersReached: false,
            showData: false,
            showStore: false,
            titleMessageHead: "Let's set a course",
            titleMessageSubhead: "Who's playing this game?",
            buttonMessage: "Let's begin",
            IdNumber: 2,
            turn: -1,
            players:       [{   UId:0,
                                perTurnAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                playerName:'',
                                storedAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                shoppingCart: {soldier:0, Horseman:0, Cannon:0, Ship:0, Settler:0, City:0, Road:0, Wall:0}
                           },
                           {    UId:1,
                                perTurnAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                playerName:'',
                                storedAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                shoppingCart: {Soldier:0, Horseman:0, Cannon:0, Ship:0, Settler:0, City:0, Road:0, Wall:0}
                           }],
        };
        
        this.addPlayer = this.addPlayer.bind(this)
        this.removePlayer = this.removePlayer.bind(this)
        this.addOneResource = this.addOneResource.bind(this)
        this.minusOneResource = this.minusOneResource.bind(this)
        this.addOneUnit = this.addOneUnit.bind(this)
        this.minusOneUnit = this.minusOneUnit.bind(this)
    }

    addPlayer = () => {
        if(this.state.players.length >= 5) {
            this.setState({maxPlayersReached:true})
        } 
        
        
        this.setState({
            IdNumber:this.state.IdNumber+1,
            players:this.state.players.concat({    UId:this.state.IdNumber,
                                perTurnAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                playerName:'',
                                storedAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                shoppingCart: {Soldier:0, Horseman:0, Cannon:0, Ship:0, Settler:0, City:0, Road:0, Wall:0}
                           }),
        })
       
    }

    removePlayer = (uniqueId) => {
                
        this.setState({
            
            players:this.state.players.filter(playerNumber => playerNumber.UId !== uniqueId)
        })
        if(this.state.players.length === 6) {
            this.setState({maxPlayersReached:false})
        }
    }

    updatePlayerName = (value, arrPosition) => {
        let arr = this.state.players
        arr[arrPosition].playerName = value;
        this.setState({ 

        })
    }

    showDetail = () => {
        this.state.players.map((x,index) => {
            if(x.playerName === ""){
                return x.playerName = "Player " + (index +1)
            } return x
        })

        this.setState({ showData: true,
                        titleMessageHead: "Resources per turn",
                        titleMessageSubhead: "",
                        buttonMessage:"Next player's turn"
                        })
    }

    ////////BUYING UNITS
    addOneUnit = (arrPosition, unitType) => {
        let arr = this.state.players
        arr[arrPosition].shoppingCart[unitType] ++;
        this.setState({
        })
    };

    minusOneUnit = (arrPosition, unitType) => {
        let arr = this.state.players
        if(arr[arrPosition].shoppingCart[unitType]>0){
            arr[arrPosition].shoppingCart[unitType] --;
            this.setState({
            })
        }
    };

    isAvailabletoBuy = () => {
        this.setState({soldier:true})
    }

///////////////ADDING RESOURCES
    addOneResource = (arrPosition, resourcetype, storeType) => {
        let arr = this.state.players
        arr[arrPosition][storeType][resourcetype] ++;

        
        this.setState({
            
        })
    };

///////////////REMOVING RESOURCES
    minusOneResource = (arrPosition, resourcetype, storeType) => {
        if(this.state.players[arrPosition][storeType][resourcetype] === 0) return;
           let arr = this.state.players
            arr[arrPosition][storeType][resourcetype] --;
        console.log(this.state.players)
        this.setState({
           
        })
    };

    addShop = () => {
        let playerValues = this.state.players;

        for (var index = 0; index < playerValues.length; index++) {
            playerValues[index].storedAmount.Wood += playerValues[index].perTurnAmount.Wood;
            playerValues[index].storedAmount.Stone += playerValues[index].perTurnAmount.Stone;
            playerValues[index].storedAmount.Livestock += playerValues[index].perTurnAmount.Livestock;
            playerValues[index].storedAmount.Wheat += playerValues[index].perTurnAmount.Wheat;
            playerValues[index].storedAmount.Iron += playerValues[index].perTurnAmount.Iron;
            
        }

        this.setState({
            showStore:true,
            turn:this.state.turn+1
        })
    }


    getNextPlayerName = () => {
        
    }
    

    render() {
        let arrayOfPlayerNumbers = Array.from({length: this.state.players.length}, (v, i) => i);
        const playersList = arrayOfPlayerNumbers.map(x => <PlayerComponent  showData={this.state.showData} 
                                                                            arrPosition={x} 
                                                                            key={x} 
                                                                            uniqueId={this.state.players[x].UId} 
                                                                            name={this.state.players[x].playerName} 
                                                                            updatePlayerName={this.updatePlayerName} 
                                                                            removePlayer={this.removePlayer} 
                                                                            playerInfo={this.state.players[x]} 
                                                                            addOneResource={this.addOneResource} 
                                                                            minusOneResource={this.minusOneResource}/>);
        
        
        
        return (
            <div className="App">
                <div className="App-header">
                   <img src={logo} className="App-logo" alt="Frontier board game" />
                </div>
                <Title titleMessageHead={this.state.titleMessageHead} titleMessageSubhead={this.state.titleMessageSubhead}/>
                
                <div className="group">
                    {playersList}
                    {this.state.maxPlayersReached  || this.state.showData ? null : <button className="btn btn-secondary" onClick={this.addPlayer}><i className="material-icons">add</i> Player</button> }
                </div>
                { !this.state.showData ?
                    <button className="btn-next" onClick={this.showDetail}>{this.state.buttonMessage}</button>
                :
                    <button className="btn-next" onClick={this.addShop}>{this.state.players[0].playerName}'s turn</button>
                }
                {this.state.showStore ?
                    <Shop   arrPosition={this.state.turn}
                            playerInfo={this.state.players[this.state.turn]}
                            addOneResource={this.addOneResource} 
                            minusOneResource={this.minusOneResource}
                            addOneUnit={this.addOneUnit}
                            minusOneUnit={this.minusOneUnit}
                    />
                : null
                }
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
