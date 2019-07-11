import React, { Component } from 'react';
import Cards from './cards'


class Highlights extends Component {
    state = {}
    render() {
        return (<div className='highlights'>
            <div className="highlighttext">
                <h1>what we love to do</h1>
                <p>lorem ipsum dolor jms skdio skks ussppa sdddsae
                </p>
            </div>
         
                  <div className='cardbox'>
                  <Cards  icon="fas fa-leaf fa-6x" link="s" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu."/>
                  <Cards  icon="fas fa-cog fa-6x" link="s" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu."/>
                  <Cards  icon="fas fa-shipping-fast fa-6x" link="s" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu."/>
                  <Cards  icon="fas fa-globe  fa-6x " link="s" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu."/>
                  <Cards  icon="fas fa-hands-helping fa-6x" link="s" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu."/>
                  <Cards  icon="fas fa-star fa-6x" link="s" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu."/>
                  </div>
        </div>);
    }
}

export default Highlights;