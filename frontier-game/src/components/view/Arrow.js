import React, { Component } from 'react';

class Arrow extends Component {
	constructor(props) {
        super(props);
        this.state = {
			
			arrow: 	<svg width="600px" height="75px">
						<defs>
							<marker id={"spot-" + this.props.id} markerWidth="8" markerHeight="8" refX="2" refY="2">
								<circle cx="2" cy="2" r="2" fill='#fff'/>
							</marker>
							<marker id={"arrow-" + this.props.id} markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
								<path d="M0,0 L0,6 L9,3 z" fill="#fff" />
							</marker>
						</defs>
						<line x1="43" y1="47" x2="250" y2="50" stroke="#fff" strokeWidth="3" markerStart={"url(#spot-" + this.props.id+")"} markerEnd={"url(#arrow-" + this.props.id+")"} />
					</svg>
        }
    }


	render() {
		
		return(
			<div className='arrow'>
				{this.state.arrow}
			</div>
		)
	}
}

export default Arrow;