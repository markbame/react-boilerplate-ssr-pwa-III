import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';


import initStore from '../utils/store';

class Index extends React.Component {
	static async getInitialProps({ store }) {

		return { stars: "test" };
	}

	render() {
		const { stars } = this.props;
		return (
			<div>

				<div>
					This is a test
				</div>
			</div>
		);
	}
}

export default withRedux(initStore)(Index);
