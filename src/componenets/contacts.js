import React,{Component} from 'react';

class Contacts extends Component {
    state = {  }
    render() { 
        return ( <div className="contacts">
			                
							<ul class="plain">
								<li><a href="s"><i className="fab fa-facebook-square fa-3x"></i></a></li>
								<li><a href="s"><i class="fab fa-github-square fa-3x"></i></a></li>
								<li><a href="s"><i class="fab fa-twitter-square fa-3x"></i></a></li>
								<li><a href="s"><i class="fab fa-google-plus-square fa-3x"></i></a></li>
							</ul>
                            <h4>Contact us</h4>
                        <p>devoloped with react js - Copyright-ParthaDebnath, <br/>Gmail-partha16896@gmail.com</p>
        </div> );
    }
}
 
export default Contacts;

