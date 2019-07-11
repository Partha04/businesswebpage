import React, { Component } from 'react';
import banner from '../assets/banner.mp4'

class Banner extends Component {
    state = {}
    render() {
        return (


        <div className = 'banner'  >
            <div className='inner'></div>
            
            <video id="background-video" src={banner} loop autoPlay muted playsInline></video>
            <div className="bannertext">
					<p className="coname">COMPANY NAME</p>
					<p>A responsive business website with a video background
					</p>
				</div>
        </div>
        );
    }
}

export default Banner;