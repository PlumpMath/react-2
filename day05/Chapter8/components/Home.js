import React, {Component} from 'react'

class Home extends Component {

	  testClick(event) {
	    console.log("click....!", event);
	  }
    render() {
        return (<h1>
	        <div  onClick={ this.testClick }>링크 테스트</div>
	        Home<
	        /h1>);
    }
}

export default Home
