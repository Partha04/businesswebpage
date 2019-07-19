import React, { Component } from 'react';

class Card extends Component {
    state = {  }



    render() { 
        const {icon,link,detail}=this.props;

        return ( <div class="content">
        <header className="icon">
            <a href={link} ><i className={icon}></i></a>
            
        </header>
        <h2>Ante sem integer</h2>
        <p>{detail}</p>
    </div>
);
    }
}
 
export default Card;
