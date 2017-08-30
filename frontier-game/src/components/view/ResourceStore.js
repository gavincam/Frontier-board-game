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
        let isTradingOpen = this.props.trading;
        let resource;
        let clickedClass = this.props.isResourceSelected === true ? "store-item selected" : "store-item";
        let firstResourceSelected = this.props.resourcesToBeTraded[0]
        let arrow = null
        let enoughOfThisToTrade = false

        if (this.props.dataValue >= 4){
            enoughOfThisToTrade = true;
        }

        if (this.props.resourcesToBeTraded.length > 0){
            enoughOfThisToTrade = true
        }

    
        if(firstResourceSelected === dataType){
            clickedClass += ' first'
            arrow = <Arrow id={this.props.id} resourcesToBeTraded={this.props.resourcesToBeTraded} />;
        }

        
        switch(isTradingOpen) { 
			case true: { 
                enoughOfThisToTrade === true ?
				resource = <div onClick={this._resourceSelected}>
                    <img src={this.props.image} alt={dataType} label={dataType} />
                    <span>{dataValue}</span>
                    
                </div> :
                resource = <div className='faded'>
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
                {arrow}
                
            </div>
        )
    }
}

export default ResourceStore;