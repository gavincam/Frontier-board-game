import React, { Component } from 'react';
import './styles/StoreItems.css';

class ShoppingCart extends Component {
    // constructor(props) {
    //     super(props); 
        
    // }

    _addOneUnit = () => {
        this.props.addOneUnit(this.props.arrPosition, this.props.dataType);
    };

    _minusOneUnit = () => {
        // if(this.state.perTurnAmount[objKey] === 0) return;
         this.props.minusOneUnit(this.props.arrPosition, this.props.dataType);
        
    };
        
    render() {
        //console.log(this.props.stateToIncrement)
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        
        return (
            <div className="counter">
                <div className="store-item">
                    <img src={this.props.image} alt={dataType} label={dataType} />
                    
                    <button onClick={this._minusOneUnit}><i className="material-icons">remove</i></button>
                    <span>{dataValue}</span>
                    <button onClick={this._addOneUnit}><i className="material-icons">add</i></button>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;