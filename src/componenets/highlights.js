import React, { Component } from 'react';
import Cards from './cards'


class Highlights extends Component {
    state = {}
    render() {
        return ( <div className = 'highlights' id="about" >
            <div className = "highlighttext" >
            <h1 > what we love to do </h1> <p> lorem ipsum dolor jms skdio skks ussppa sdddsae </p> </div>

            <div className = 'cardbox' >
            <Cards icon = "fas fa-leaf fa-4x"
            link = "s"
            detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " / >
            <Cards icon = "fas fa-cog fa-4x"
            link = "s"
            detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " / >
            <Cards icon = "fas fa-shipping-fast fa-4x"
            link = "s"
            detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ." / >
            <Cards icon = "fas fa-globe fa-4x"
            link = "s"
            detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " / >
            <Cards icon = "fas fa-hands-helping fa-4x"
            link = "s"
            detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." / >
            <Cards icon = "fas fa-star fa-4x"
            link = "s"
            detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." / >
            </div> </div>);
        }
    }

    export default Highlights;