import React, { Component } from 'react';

export default class Title extends Component {
	
	pageMessageHead() {
		return this.props.titleMessageHead;
	}
	pageMessageSubhead() {
		return this.props.titleMessageSubhead;
	}

	render() {
    	return (
      		<div>
        		<h2>{this.pageMessageHead()}</h2>
				<h3>{this.pageMessageSubhead()}</h3>
      		</div>
    	);
  	}
}