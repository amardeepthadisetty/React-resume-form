import React, { Component } from 'react';

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile : ''
        }
    }
    
    componentDidMount(){
        let profile = JSON.parse(localStorage.getItem('profile') );
        console.log("profile is: ", profile);
        this.setState({ profile : profile });
    }

    render(){
        return (
            <div>
                <h2>Profile page</h2>
                <div className="rowww">
                    <div>
                        Name : { this.state.profile.name }
                    </div>

                    <div>
                        Email : {this.state.profile.email}
                    </div>
                    

                </div>
            </div>
        )
    }
    
}

export default ProfilePage;
