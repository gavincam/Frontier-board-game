import React, { Component } from 'react';

class Arrow extends Component {
	constructor(props) {
        super(props);
        this.state = {
			
			arrow: 	<svg width="600px" height="100px">
						<defs>
							<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
							<path d="M0,0 L0,6 L9,3 z" fill="#f00" />
							</marker>
						</defs>
						<line x1="50" y1="50" x2="250" y2="50" stroke="#000" strokeWidth="5" markerEnd="url(#arrow)" />
					</svg>
        }
    }


	render() {
		
		return(
			<div>
				{this.state.arrow}
			</div>
		)
	}
}

export default Arrow;