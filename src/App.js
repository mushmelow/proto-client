import React from 'react';
import NavigationBar from './NavigationBar';
import SphinxHeader from './SphinxHeader';

class App extends React.Component {
	render () {
		return (
			<div>
				<SphinxHeader/>
				<NavigationBar />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App;