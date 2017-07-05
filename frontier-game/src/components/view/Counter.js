import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this._addOneResource = this._addOneResource.bind(this);
        this._minusOneResource = this._minusOneResource.bind(this)
    }

    _addOneResource = () => {
        this.props.addOneResource(this.props.arrPosition, this.props.dataType, this.props.storeType);
    };

    _minusOneResource = () => {
        // if(this.state.perTurnAmount[objKey] === 0) return;
         this.props.minusOneResource(this.props.arrPosition, this.props.dataType, this.props.storeType);
        
    };
        
    

    render() {
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        //console.log(dataValue);
        return (
            
            <div className="counter">
                <img src={this.props.image} alt={dataType} label={dataType} />
                <div>
                    <button onClick={this._minusOneResource}><i className="material-icons">remove</i></button>
                    <input className="small-box" type="number" value={dataValue} readOnly/>
                    <button onClick={this._addOneResource}><i className="material-icons">add</i></button>
                </div>
            </div>
        )
    }
}

export default Counter;