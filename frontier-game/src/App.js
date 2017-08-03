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
            showAllPlayersResources: false,
            playerPurchasePhase: false,
            titleMessageHead: "Let's set a course",
            titleMessageSubhead: "Who's playing this game?",
            IdNumber: 2,
            turn: -1,
            transitionClass:"fade-in",
            players:       [{   UId:0,
                                perTurnAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                playerName:'',
                                storedAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                shoppingCart: {Soldier:0, Horseman:0, Cannon:0, Ship:0, Settler:0, City:0, Road:0, Wall:0}
                           },
                           {    UId:1,
                                perTurnAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                playerName:'',
                                storedAmount: {Wood: 0, Stone: 0, Livestock: 0, Wheat:0, Iron: 0},
                                shoppingCart: {Soldier:0, Horseman:0, Cannon:0, Ship:0, Settler:0, City:0, Road:0, Wall:0}
                           }],
            Soldier: {Wood: 1, Stone: 0, Livestock: 1, Wheat:2, Iron: 1},
            Horseman: {Wood: 1, Stone: 0, Livestock: 2, Wheat:3, Iron: 1},
            Cannon: {Wood: 3, Stone: 0, Livestock: 0, Wheat:0, Iron: 5},
            Ship: {Wood: 4, Stone: 1, Livestock: 1, Wheat:1, Iron: 5},
            Settler: {Wood: 2, Stone: 2, Livestock: 3, Wheat:2, Iron: 0},
            City: {Wood: 4, Stone: 4, Livestock: 3, Wheat:4, Iron: 2},
            Road: {Wood: 0, Stone: 3, Livestock: 0, Wheat:0, Iron: 0},
            Wall: {Wood: 0, Stone: 4, Livestock: 0, Wheat:0, Iron: 0},
            nextButton: <button className="btn-next" onClick={this.handleClick}>Let's begin</button>,
            nextAction: this.showDetail
        };
        
        this.addPlayer = this.addPlayer.bind(this)
        this.removePlayer = this.removePlayer.bind(this)
        this.addOneResource = this.addOneResource.bind(this)
        this.minusOneResource = this.minusOneResource.bind(this)
        this.addOneUnit = this.addOneUnit.bind(this)
        this.minusOneUnit = this.minusOneUnit.bind(this)
    }

    handleClick = ()=> {
        this.setState({transitionClass: "fade-out"});
        if(!this.timeout)
            clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.setState( {transitionClass:"fade-in"},
                                                        this.state.nextAction),400);
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

        this.setState({ showAllPlayersResources: true,
                        titleMessageHead: "Resources per turn",
                        titleMessageSubhead: "",
                        nextButton:<button className="btn-next" onClick={this.handleClick}>{this.state.players[this.state.turn +1].playerName}'s turn</button>,
                        nextAction: this.addShop
                        })
    }

    ////////BUYING UNITS
    addOneUnit = (arrPosition, unitType) => {
        let arr = this.state.players
        if(Object.keys(this.state.players[arrPosition].storedAmount).map((x) => this.state.players[arrPosition].storedAmount[x] >= this.state[unitType][x]).every(x => x === true)){
            arr[arrPosition].shoppingCart[unitType] ++;
            Object.keys(arr[arrPosition].storedAmount).map((x) => arr[arrPosition].storedAmount[x] -= this.state[unitType][x])
        }
        this.setState({
        })
    };

    minusOneUnit = (arrPosition, unitType) => {
        
        let arr = this.state.players
        
        if(arr[arrPosition].shoppingCart[unitType]>0){
            arr[arrPosition].shoppingCart[unitType] --;
            Object.keys(arr[arrPosition].storedAmount).map((x) => arr[arrPosition].storedAmount[x] += this.state[unitType][x])
            this.setState({
            })
        }
    };


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
        //console.log(this.state.players)
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
            playerPurchasePhase:true,
            turn:this.state.turn+1,
            titleMessageHead: this.state.players[this.state.turn+1].playerName
        },() => {this.setState({
                    nextButton:<button className="btn-next" onClick={this.handleClick}>{this.state.players[this.state.turn +1].playerName}'s turn</button>,
                    nextAction: this.incrementPlayerNumber
                })
        })
    }

    
    incrementPlayerNumber = () => {
        
        if(this.state.turn < this.state.players.length-2) {
            this.setState({
                turn:this.state.turn+1,
                titleMessageHead: this.state.players[this.state.turn+1].playerName
                
                
            },() => {this.setState({
                    nextButton:<button className="btn-next" onClick={this.handleClick}>{this.state.players[this.state.turn +1].playerName}'s turn</button>
                })
            })
        } else {
            this.setState({
                turn:this.state.turn+1,
                nextButton:<button className="btn-next" onClick={this.handleClick}>End round</button>,
                nextAction: this.endRound,
                titleMessageHead: this.state.players[this.state.turn+1].playerName
            })
        }
    }

    endRound = () => {

        // let arr = this.state.players
        // console.log(this.state.players)
        // console.log(Object.keys(arr).map((x) => Object.keys(arr[x].shoppingCart).map((i) => arr[x].shoppingCart[i] += arr[x].perTurnAmount[i])))
        

        let playerValues = this.state.players;

        for (var index = 0; index < playerValues.length; index++) {
            playerValues[index].shoppingCart.Soldier = 0;
            playerValues[index].shoppingCart.Horseman = 0;
            playerValues[index].shoppingCart.Cannon = 0;
            playerValues[index].shoppingCart.Ship = 0;
            playerValues[index].shoppingCart.Settler = 0;
            playerValues[index].shoppingCart.City = 0;
            playerValues[index].shoppingCart.Road = 0;
            playerValues[index].shoppingCart.Wall = 0;
        }
        console.log(playerValues)
        

        this.setState({
            turn:-1,
            playerPurchasePhase:false,
            titleMessageHead: "Resources per turn",
            players:playerValues
        },() => {this.setState({
                    nextButton:<button className="btn-next" onClick={this.handleClick}>{this.state.players[this.state.turn +1].playerName}'s turn</button>,
                    nextAction: this.resetRound
                })
        })
    }

    resetRound = () => {
        this.addShop()
    }
    

    render() {

        let arrayOfPlayerNumbers = Array.from({length: this.state.players.length}, (v, i) => i);
        const playersList = arrayOfPlayerNumbers.map(x => <PlayerComponent  showAllPlayersResources={this.state.showAllPlayersResources} 
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
                {this.state.playerPurchasePhase === false ?
                    <div className={this.state.transitionClass}>
                        <div className="group">
                            {playersList}
                            {this.state.maxPlayersReached  || this.state.showAllPlayersResources ? null : <button className="btn btn-secondary" onClick={this.addPlayer}><i className="material-icons">add</i> Player</button> }
                        </div>
                        {this.state.nextButton}
                    </div>
                : 
                    <div className={this.state.transitionClass}>
                        <Shop   arrPosition={this.state.turn}
                                playerInfo={this.state.players[this.state.turn]}
                                addOneResource={this.addOneResource} 
                                minusOneResource={this.minusOneResource}
                                addOneUnit={this.addOneUnit}
                                minusOneUnit={this.minusOneUnit}
                        />
                        {this.state.nextButton}
                    </div>
                }
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
