import React, { Component } from 'react';
import './styles/StoreItems.css';

class ResourceStore extends Component {
    // constructor(props) {
    //     super(props); 
        
    // }

    
        
    render() {
        let dataType = this.props.dataType;
        let dataValue = this.props.dataValue;
        
        return (
            
            <div className="store-item">
                <img src={this.props.image} alt={dataType} label={dataType} />
                <span>{dataValue}</span>
                    
                
            </div>
        )
    }
}

export default ResourceStore;