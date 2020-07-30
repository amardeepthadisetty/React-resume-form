import React, { Component } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile : ''
        }

        
    }
    
    componentDidMount(){
        let profile = JSON.parse(localStorage.getItem('profile'), true );
        console.log("profile is: ", profile);
        this.setState({ profile : profile });
        setTimeout(() =>{
            console.log("workes is: ", this.state.profile.workes);
        }, 5000);
        
    }

    render(){
        return (
            <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div className="container" ref={ref}>

                    <h2>Resume</h2>
                    <div className="rowww" >
                        <div>
                            Name : {this.state.profile.name}
                        </div>

                        <div>
                            Email : {this.state.profile.email}
                        </div>

                        <div>
                            Phone : {this.state.profile.phone}
                        </div>

                        <div>
                            Date of birth : {this.state.profile.dob}
                        </div>

                        <div>
                            Gender : {this.state.profile.gender}
                        </div>

                        <div>
                            Location : {this.state.profile.location}
                        </div>

                        <div className="work-experience">
                            
                            {
                               this.state.profile.workes ?  this.state.profile.workes.map(( work, index) => {
                                    return (
                                        <div key={index}>
                                            <h2>Work Experience</h2>
                                            <div>
                                                Location : {work.company}
                                            </div>
                                            <div>
                                                Designation : {work.designation}
                                            </div>
                                            <div>
                                                From Date : {work.from_date}
                                            </div>
                                            <div>
                                                To date : {work.to_date}
                                            </div>

                                        </div>

                                    )
                                }) : ''
                            }

                        </div>
                        <h2>Preferences</h2>
                        <div>
                            Preferred Location : {this.state.profile.plocation}
                        </div>
                        <div>
                            Industry : {this.state.profile.industry}
                        </div>
                        <div>
                            Salary range : {this.state.profile.range}
                        </div>
                    </div>
                </div>


            </div>
             )
    }
    
}

export default ProfilePage;
