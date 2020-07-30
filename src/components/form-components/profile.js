import  React, { useState }from 'react';

const ProfileForm = () => {


    return (
        <div>
            <h2>Profile Form</h2>
            <form >
                <div className="form-group">
                    <label for="email">Name</label>
                    <input type="name" className="form-control" placeholder="Enter name" id="email" />
                </div>
                <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email"/>
                </div>
                <div className="form-group">
                    <label for="email">Mobile</label>
                    <input type="number" className="form-control" placeholder="Enter mobile" id="mobile" />
                </div>
                
                <div className="form-group">
                    <label for="email">DOB</label>
                    <input type="date" className="form-control" placeholder="Enter DOB" id="dob" />
                </div>

                <div className="form-group">
                    <label for="email">select gender</label>
                    <select className="form-control">
                        <option >select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="email">Location</label>
                    <input type="text" className="form-control" placeholder="Enter location" id="location" />
                </div>

                

                <div className="company-details">
                    <h3>Work Experience</h3>
                    <div className="each-company">
                        <h4>Company 1</h4>
                        <div className="form-group">
                            <label for="email">Company</label>
                            <input type="text" className="form-control" placeholder="Enter company name" id="company" />
                        </div>
                        <div className="form-group">
                            <label for="email">Designation</label>
                            <input type="text" className="form-control" placeholder="Enter designation" id="designation" />
                        </div>
                        <div className="form-group">
                            <label for="email">From date</label>
                            <input type="date" className="form-control" placeholder="Enter date" id="fdate" />
                        </div>
                        <div className="form-group">
                            <label for="email">To date</label>
                            <input type="date" className="form-control" placeholder="Enter date" id="tdate" />
                        </div>
                    </div>
                    

                </div>

                <div className="company-preferences">
                    <h3>Preferences</h3>
                        <div className="form-group">
                            <label for="email">Preferred Location</label>
                            <input type="text" className="form-control" placeholder="Enter preferred location" id="plocation" />
                        </div>
                        <div className="form-group">
                            <label for="email">Industry</label>
                            <input type="text" className="form-control" placeholder="Enter industry" id="industry" />
                        </div>
                        <div className="form-group">
                            <label for="email">Salary Range</label>
                            <input type="text" className="form-control" placeholder="Enter salary range" id="srange" />
                        </div>
                      
                        
                </div>
                
                        
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm;
