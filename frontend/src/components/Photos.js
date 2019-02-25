import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class Photos extends Component {

	componentDidMount() {
		this.props.getPhotos();
	}

	render() {
		return (
			<div className='Photos'>
				{this.props.fetchingPhotos ? (<h2>Loading...</h2>) : (
					<ul>
						{this.props.photos.map((photo, index) => {
							return (
								<li>
									<div>{photo.title}</div>
									<div>{photo.description}</div>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		photos: state.photosReducer.photos,
		fetchingPhotos: state.photosReducer.fetchingPhotos
	}
}

export default connect(mapStateToProps, { getPhotos })(Photos);
