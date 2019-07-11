import Banner from './componenets/banner';
import Navbar from './componenets/navbar';
import Highlights from './componenets/highlights';
import Moto from './componenets/moto';
import Profile from './componenets/profile';
import Contacts from './componenets/contacts';
import React, { Component } from 'react';

class Home extends Component {
    state = {}
    render() {
        return ( <div >
            <Navbar />
            <Banner />
            <Highlights />
            <Moto />
            <Profile/>
            <Contacts/>
            </div>
        );
    }
}

export default Home;