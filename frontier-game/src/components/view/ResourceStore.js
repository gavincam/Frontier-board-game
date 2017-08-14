import React, { Component } from 'react';
import './styles/StoreItems.css';

class ResourceStore extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isClicked:false
        }
    }

    _resoureceSelected = () => {
        this.props.selectResourceToTrade()
    }

    resourceSelected = (e) => {
        this._resoureceSelected();
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    }
        
    render() {
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        let tradingThisResource = this.props.trading;
        let resource;
        const clickedClass = this.state.isClicked === true ? "store-item selected" : "store-item";
       // console.log()
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
            
            <div className={clickedClass}>
                {resource}
                    
                
            </div>
        )
    }
}

export default ResourceStore;