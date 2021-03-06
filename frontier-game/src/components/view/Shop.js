import React, { Component } from 'react';
import ResourceStore from './ResourceStore';
import ShoppingCart from './ShoppingCart';

import woodImage from '../../images/wood.png';
import stoneImage from '../../images/stone.png';
import livestockImage from '../../images/livestock.png';
import wheatImage from '../../images/wheat.png';
import ironImage from '../../images/iron.png';

import soldierImage from '../../images/soldier.png';
import horsemanImage from '../../images/horseman.png';
import cannonImage from '../../images/cannon.png';
import shipImage from '../../images/ship.png';
import settlerImage from '../../images/settler.png';
import cityImage from '../../images/city.png';
import roadImage from '../../images/road.png';
import wallImage from '../../images/wall.png';


class Shop extends Component {
	constructor(props) {
        super(props);
        this.state = {
			tradeStation : <div>
								<button className="btn btn-secondary" onClick={this.showTrading}>Trade resources</button>
							</div>,
			tradingClass : "store",
			trading: false,
			confirmTrade: null,
			resourcesToBeTraded: [],
			isResourceSelected:{Wood:false, Stone:false, Livestock: false, Wheat:false, Iron:false},
			resourceImages: [woodImage,stoneImage,livestockImage,wheatImage,ironImage],
			cancelThisTrade:''
        }
		this.handleTrade = this.handleTrade.bind(this)
    }

	

	showTrading = () => {
		this.setState(
			{tradeStation: <div className="message">
								<h3>Pick a resource to trade away</h3>
								<span>You can trade 4 of any single resource for 1 of another.</span>
								<button className="btn btn-secondary" onClick={this.hideTrading}>Finished trading</button>
							</div>,
			 tradingClass:"store interactable",
			 trading: true
			}
		)
	}

	hideTrading = () => {
		this.setState(
			{tradeStation: <div>
								<button className="btn btn-secondary" onClick={this.showTrading}>Trade resources</button>
							</div>,
			 resourcesToBeTraded: [],
			 tradingClass:"store",
			 trading: false,
			 confirmTrade: null,
			 isResourceSelected:{Wood:false, Stone:false, Livestock: false, Wheat:false, Iron:false}
			}
		)
	}

	_makeTrade = () => {
		
		if(this.props.playerInfo.storedAmount[this.state.resourcesToBeTraded[0]]  >= 4){
			this.props.makeTrade(this.state.resourcesToBeTraded);
			if(this.props.playerInfo.storedAmount[this.state.resourcesToBeTraded[0]] < 4) {
				console.log(`nope`)
				this.handleTrade(this.state.resourcesToBeTraded[0])
			}
		} 
	}

	handleTrade = (selectedResource) => {

		const resourceArr = this.state.isResourceSelected
		
		//DEAL WITH WHICH RESOURCES HAVE SELECTION SET TO TRUE OR FALSE
		function changeSelectedState () {
			Object.keys(resourceArr).map((x) =>{
				if(x === selectedResource){
					resourceArr[selectedResource] = !resourceArr[selectedResource]
				} return x
			})	
		}

		//DEAL WITH RESOURCES IN THE RESOURCES TO TRADE ARRAY
		if(this.state.resourcesToBeTraded.length <2 && selectedResource !== this.state.resourcesToBeTraded[0]){
			changeSelectedState()
			this.setState({
				resourcesToBeTraded:this.state.resourcesToBeTraded.concat([selectedResource])
			})
			if(this.state.resourcesToBeTraded.length === 1) {
				this.setState({
					confirmTrade: <button className="btn btn-next" onClick={this._makeTrade}>Confirm trade</button>
				})
			}
		} else if(this.state.resourcesToBeTraded.length === 2 && selectedResource !== this.state.resourcesToBeTraded[0]){
			//REMOVE SECOND RESOURCE FROM SELECTED RESOURCE ARRAY OR REPLACE WITH NEW ONE
			//REMOVING
			if(selectedResource === this.state.resourcesToBeTraded[1]){
				const arr = this.state.resourcesToBeTraded;
				arr.splice(1,1)
				this.setState({
					resourcesToBeTraded:arr,
					confirmTrade: null
				})
				changeSelectedState()
			//REPLACING
			} else {
				
				const arr = this.state.resourcesToBeTraded;
				
				//DESELCTING THE PREVIOUS 2ND ITEM IN THE ARRAY
				const turnOff = arr[1]
				Object.keys(resourceArr).map((x) =>{
					if(x === turnOff){
						resourceArr[turnOff] = !resourceArr[turnOff]
					} return x
				})
				//ADDING THE NEWLY SELECTED ITEM TO 2ND IN THE ARRAY
				arr.splice(1,1,selectedResource)
				this.setState({
					resourcesToBeTraded:arr
				})
				changeSelectedState()
			}
			
			
			
		//CANCELING THE TRADE BY CLICKING ON THE INITIAL RESOURCE
		} else if (selectedResource === this.state.resourcesToBeTraded[0]) {
			this.cancelThisTrade()
			this.setState({
				confirmTrade: null
			})
		}

	}

	cancelThisTrade = () => {
		this.setState ({
			resourcesToBeTraded: [],
			isResourceSelected:{Wood:false, Stone:false, Livestock: false, Wheat:false, Iron:false},
		})
	}

	render() {
		let arrayOfResources = Array.from({length: Object.keys(this.props.playerInfo.storedAmount).length}, (v,i) => i);
		let listOfResources = arrayOfResources.map(x => <ResourceStore 	selectResourceToTrade={this.handleTrade} 
																		isResourceSelected={this.state.isResourceSelected[Object.keys(this.state.isResourceSelected)[x]]} 
																		resourcesToBeTraded={this.state.resourcesToBeTraded}
																		image={this.state.resourceImages[x]} 
																		trading={this.state.trading} 
																		dataType={Object.keys(this.props.playerInfo.storedAmount)[x]} 
																		dataValue={Object.values(this.props.playerInfo.storedAmount)[x]} 
																		key={x}
																		id={x}
															/>)
		
		return(
			<div className="group">
				<section className={this.state.tradingClass}>
					<h3>Resources available</h3> 
					{listOfResources}
				</section>
				{this.state.confirmTrade}
				{this.state.tradeStation}
				{this.state.cancelThisTrade}
				<section className="shopping-cart">
					<h3>Shopping cart</h3>
					
					<ShoppingCart image={soldierImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[0]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[0]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={horsemanImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[1]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[1]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={cannonImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[2]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[2]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={shipImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[3]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[3]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={settlerImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[4]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[4]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={cityImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[5]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[5]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={roadImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[6]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[6]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
					<ShoppingCart image={wallImage} arrPosition={this.props.arrPosition} dataType={Object.keys(this.props.playerInfo.shoppingCart)[7]} dataValue={Object.values(this.props.playerInfo.shoppingCart)[7]} minusOneUnit={this.props.minusOneUnit} addOneUnit={this.props.addOneUnit} />
				</section>
			</div>
		)
	}
}

export default Shop;