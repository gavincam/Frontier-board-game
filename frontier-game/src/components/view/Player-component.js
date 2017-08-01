import React, { Component } from 'react';
import './styles/Button.css';
import Counter from './Counter';

import woodImage from '../../images/wood.png';
import stoneImage from '../../images/stone.png';
import livestockImage from '../../images/livestock.png';
import wheatImage from '../../images/wheat.png';
import ironImage from '../../images/iron.png';

// import ResourceStore from './ResourceStore';
// import ShoppingCart from './ShoppingCart';

// import soldierImage from '../../images/soldier.png';
// import horsemanImage from '../../images/horseman.png';
// import cannonImage from '../../images/cannon.png';
// import shipImage from '../../images/ship.png';
// import settlerImage from '../../images/settler.png';
// import cityImage from '../../images/city.png';
// import roadImage from '../../images/road.png';
// import wallImage from '../../images/wall.png';

class PlayerComponent extends Component {
    constructor(props) {
        super(props);
        
        this._removePlayer = this._removePlayer.bind(this);
        //this.addOneResource = this.addOneResource.bind(this);
        //this.minusOneResource = this.minusOneResource.bind(this)
    }

    _removePlayer = () => {
        this.props.removePlayer(this.props.uniqueId);
        
    };


////////ADDING RESOURCES PER TURN
    // addOneResource = (objKey) => {
    //     this.setState({
    //         perTurnAmount: Object.assign({},this.state.perTurnAmount,{[objKey]: this.state.perTurnAmount[objKey] + 1})
    //     })
    // };

    // minusOneResource = (objKey) => {
    //     if(this.state.perTurnAmount[objKey] === 0) return;

    //     this.setState({
    //         perTurnAmount: Object.assign({},this.state.perTurnAmount,{[objKey]: this.state.perTurnAmount[objKey] - 1})
    //     })
    // };




/////////NAMING PLAYER
    _updatePlayerName  = (evt) => {
        //console.log(evt.target.value);
        this.props.updatePlayerName(evt.target.value, this.props.arrPosition)
        //this.props.updatePlayerName(this.props.uniqueId)
        //this.setState({playerName:evt.target.value});
    }  

    render() {
        
        let classAdded = "container";
        if (this.props.showAllPlayersResources) {
            classAdded = "resources container"
        }

        let notEmptyName = this.props.name;
       
        if (notEmptyName === ""){
            notEmptyName ="player"
        } 

        //CHECK ENOUGH RESOURCES TO PURCHASE
        // let storedWood = Object.values(this.state.storedAmount)[0];
        // let storedStone = Object.values(this.state.storedAmount)[1];
        // let storedWheat = Object.values(this.state.storedAmount)[2];
        // let storedLivestock = Object.values(this.state.storedAmount)[3];
        // let storedIron = Object.values(this.state.storedAmount)[4];

        // if (storedWood >= 5 && storedStone >= 0 && storedWheat >= 5 && storedLivestock >= 0 && storedIron >= 0) {
        //     //this.isAvailabletoBuy();
        // }
        //console.log(this.state.unitsAvailableToBuy["soldier"]);
        
        //console.log(this.props.playerInfo)
        //console.log(this.props.uniqueId);
        
        return (
            
            <div className={classAdded}>
                { this.props.showAllPlayersResources ? 
                <div>
                    <div className="panel-heading">
                        <h3>{notEmptyName}</h3>
                    </div>
                    
                    
                        <section className="row">
                            <Counter image={woodImage} dataType={Object.keys(this.props.playerInfo.perTurnAmount)[0]} dataValue={Object.values(this.props.playerInfo.perTurnAmount)[0]} minusOneResource={this.props.minusOneResource} addOneResource={this.props.addOneResource} arrPosition={this.props.arrPosition} storeType="perTurnAmount"/>
                            <Counter image={stoneImage} dataType={Object.keys(this.props.playerInfo.perTurnAmount)[1]} dataValue={Object.values(this.props.playerInfo.perTurnAmount)[1]} minusOneResource={this.props.minusOneResource} addOneResource={this.props.addOneResource} arrPosition={this.props.arrPosition} storeType="perTurnAmount"/>
                            <Counter image={livestockImage} dataType={Object.keys(this.props.playerInfo.perTurnAmount)[2]} dataValue={Object.values(this.props.playerInfo.perTurnAmount)[2]} minusOneResource={this.props.minusOneResource} addOneResource={this.props.addOneResource} arrPosition={this.props.arrPosition} storeType="perTurnAmount" />
                            <Counter image={wheatImage} dataType={Object.keys(this.props.playerInfo.perTurnAmount)[3]} dataValue={Object.values(this.props.playerInfo.perTurnAmount)[3]} minusOneResource={this.props.minusOneResource} addOneResource={this.props.addOneResource} arrPosition={this.props.arrPosition} storeType="perTurnAmount"/>
                            <Counter image={ironImage} dataType={Object.keys(this.props.playerInfo.perTurnAmount)[4]} dataValue={Object.values(this.props.playerInfo.perTurnAmount)[4]} minusOneResource={this.props.minusOneResource} addOneResource={this.props.addOneResource} arrPosition={this.props.arrPosition} storeType="perTurnAmount"/>
                        </section> 
                        
                </div>
                : 
                <div>
                    <div className="panel-heading">
                        <input type="text" placeholder="Enter Player Name" value={this.props.name} onChange={this._updatePlayerName} />
                    </div>
                    <button className="btn-remove" onClick={this._removePlayer}><i className="material-icons">clear</i></button>
                </div>
                }
            </div>







            
            
        );
    }
}

export default PlayerComponent;