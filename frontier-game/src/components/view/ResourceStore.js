import React, { Component } from 'react';
import Arrow from './Arrow';
import './styles/StoreItems.css';

class ResourceStore extends Component {
    

    

    _resourceSelected = (e) => {
        this.props.selectResourceToTrade(this.props.dataType)
    }
        
    render() {
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        let tradingThisResource = this.props.trading;
        let resource;
        const clickedClass = this.props.resourceSelected === true ? "store-item selected" : "store-item";
        switch(tradingThisResource) { 
			case true: { 
				resource = <div onClick={this._resourceSelected}>
                    <img src={this.props.image} alt={dataType} label={dataType} />
                    <span>{dataValue}</span>
                    
                </div>
				break; 
			} 
			case false: { 
				resource = <div>
                    <img src={this.props.image} alt={dataType} label={dataType} />
                    <span>{dataValue}</span>
                </div>
                break; 
			}
			default:
            resource = <div>
                    <img src={this.props.image} alt={dataType} label={dataType} />
                    <span>{dataValue}</span>
                </div>
			
		}

        
        return (
            
            <div className={clickedClass}>
                {resource}
                <Arrow id={this.props.id}/>
                
            </div>
        )
    }
}

export default ResourceStore;