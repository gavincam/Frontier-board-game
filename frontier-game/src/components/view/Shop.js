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
			tradingClass : "store"
        }
    }

	

	showTrading = () => {
		this.setState(
			{tradeStation: <div>
								<button onClick={this.showTrading}>Hide trading</button>
								<h2>Choose a resource to trade away</h2>
								<span>You can trade 4 of any single resource for 1 of another.</span>
							</div>,
			 tradingClass:"store interactable"
			}
		)
	}

	render() {

		

		return(
			<div className="group">
				<section className={this.state.tradingClass}>
					<h3>Resources available</h3> 
					<ResourceStore image={woodImage} dataType={Object.keys(this.props.playerInfo.storedAmount)[0]} dataValue={Object.values(this.props.playerInfo.storedAmount)[0]} />
					<ResourceStore image={stoneImage} dataType={Object.keys(this.props.playerInfo.storedAmount)[1]} dataValue={Object.values(this.props.playerInfo.storedAmount)[1]} />
					<ResourceStore image={livestockImage} dataType={Object.keys(this.props.playerInfo.storedAmount)[2]} dataValue={Object.values(this.props.playerInfo.storedAmount)[2]} />
					<ResourceStore image={wheatImage} dataType={Object.keys(this.props.playerInfo.storedAmount)[3]} dataValue={Object.values(this.props.playerInfo.storedAmount)[3]} />
					<ResourceStore image={ironImage} dataType={Object.keys(this.props.playerInfo.storedAmount)[4]} dataValue={Object.values(this.props.playerInfo.storedAmount)[4]} />
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