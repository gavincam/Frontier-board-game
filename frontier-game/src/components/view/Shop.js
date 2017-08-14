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
								<button onClick={this.showTrading}>Trade resources</button>
							</div>,
			tradingClass : "store",
			trading: false,
			resourceImages: [woodImage,stoneImage,livestockImage,wheatImage,ironImage]
        }
		this.tradeAwaySelected = this.tradeAwaySelected.bind(this)
    }

	

	showTrading = () => {
		this.setState(
			{tradeStation: <div>
								<button onClick={this.showTrading}>Hide trading</button>
								<h2>Choose a resource to trade away</h2>
								<span>You can trade 4 of any single resource for 1 of another.</span>
							</div>,
			 tradingClass:"store interactable",
			 trading: true
			}
		)
	}

	tradeAwaySelected = () => {
		console.log(`hollah`)
	}

	render() {
		let arrayOfResources = Array.from({length: Object.keys(this.props.playerInfo.storedAmount).length}, (v,i) => i);
		let listOfResources = arrayOfResources.map(x => <ResourceStore selectResourceToTrade={this.tradeAwaySelected} image={this.state.resourceImages[x]} trading={this.state.trading} dataType={Object.keys(this.props.playerInfo.storedAmount)[x]} dataValue={Object.values(this.props.playerInfo.storedAmount)[x]} key={x}/>)

		return(
			<div className="group">
				<section className={this.state.tradingClass}>
					<h3>Resources available</h3> 
					{listOfResources}
				</section>
				{this.state.tradeStation}
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