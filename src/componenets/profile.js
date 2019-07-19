import React,{Component} from 'react';
import ProfileCard from './profilecard';

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
         <div >
             
              <div className="profiles" >
                <div className="profiletext">
                <h1>what others say</h1>
                <p>lorem ipsum dolor jms skdio skks ussppa sdddsae
                </p>
                 </div>
               <ProfileCard image=" s"quote='Every day I feel is a blessing from God. And I consider it a new beginning. Yeah, everything is beautiful.' name='prince'/>
               <ProfileCard image=" s"quote='Every day I feel is a blessing from God. And I consider it a new beginning. Yeah, everything is beautiful.' name='prince '/>
               <ProfileCard image=" s"quote='Every day I feel is a blessing from God. And I consider it a new beginning. Yeah, everything is beautiful.' name='prince '/>
               
          </div>
         </div>
         );
    }
}
 
export default Profile;


