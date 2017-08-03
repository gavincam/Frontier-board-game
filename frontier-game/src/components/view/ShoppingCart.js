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
        this.props.minusOneUnit(this.props.arrPosition, this.props.dataType);
        
    };
        
    render() {
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        
        return (
            <div className="counter shop">
                
                    <img src={this.props.image} alt={dataType} label={dataType} />
                <div className="store-item">
                    <button onClick={this._minusOneUnit}><i className="material-icons">remove</i></button>
                    <input className="small-box" type="number" value={dataValue} readOnly/>
                    <button onClick={this._addOneUnit}><i className="material-icons">add</i></button>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;