import React, { Component } from 'react';
import './styles/StoreItems.css';

class ResourceStore extends Component {
    // constructor(props) {
    //     super(props); 
        
    // }

    resourceSelected = () => {
        console.log("hollah")
    }
        
    render() {
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        let tradingThisResource = this.props.trading;
        let resource;

        switch(tradingThisResource) { 
			case true: { 
				resource = <div onClick={this.resourceSelected}>
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
            
            <div className="store-item">
                {resource}
                    
                
            </div>
        )
    }
}

export default ResourceStore;