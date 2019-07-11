import React, { Component } from 'react';

class ProfileCard extends Component {
    state = {}
    render() {

        const {pimage,quote,name}=this.props;
        return ( <div className = "profilecard" >
            <div className = "quote" >
                 {quote}
            </div> 
            <div className="intro">
                <p><h3>-{name}</h3>(CEO of abc.com)</p>

            </div>
            </div >
        );
    }
}

export default ProfileCard;