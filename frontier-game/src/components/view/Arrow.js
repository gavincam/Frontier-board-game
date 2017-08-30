import React, { Component } from 'react';

class Arrow extends Component {
	constructor(props) {
        super(props);
        this.state = {
			positions:{Wood:1, Stone:2, Livestock: 3, Wheat:4, Iron:5}
        }
    }


	render() {
		let x2position='643';
		let markerEnd = '';

		if(this.props.resourcesToBeTraded.length > 1) {
			
			markerEnd = "url(#arrow-" + this.props.id+")"
			const positionOfFirstResource = this.state.positions[this.props.resourcesToBeTraded[0]]
			const positionOfSecondResource = this.state.positions[this.props.resourcesToBeTraded[1]]
			
			
			x2position = 643 + (positionOfSecondResource - positionOfFirstResource) * 101
		}

		let arrow = <svg width="1100px" height="75px">
						<defs>
							<marker id={"spot-" + this.props.id} markerWidth="8" markerHeight="8" refX="2" refY="2">
								<circle cx="2" cy="2" r="2" fill='#fff'/>
							</marker>
							<marker id={"arrow-" + this.props.id} markerWidth="5" markerHeight="10" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
								<path d="M0,0 L0,6 L5,3 z" fill="#fff" />
							</marker>
						</defs>
						<line x1="643" y1="47" x2={x2position} y2="47" stroke="#fff" strokeWidth="3" markerStart={"url(#spot-" + this.props.id+")"} markerEnd={markerEnd} />
					</svg>

			
		
		return(
			<div className='arrow'>
				{arrow}
			</div>
		)
	}
}

export default Arrow;