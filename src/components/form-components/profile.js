import  React, { useState }from 'react';

const ProfileForm = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        location: '',
        workes: [],
        plocation: '',
        industry: '',
        range: ''
    });

    const addWork = (e) => {
        e.preventDefault();
        var p = { company: '', designation: '', from_date: '', to_date: '' };
        setProfile({
            ...profile,
            workes : [...profile.workes, p]
        });
    }

    const handleCompanyChange = (e, index) => {
        let nameValue = e.target.name;
        //console.log("name value is: ",nameValue);
        //console.log("value is: ", e.target.value);
        //console.log("index is: ", index);
        profile.workes[index][nameValue] = e.target.value;

        //console.log("profiles are : ", profile);

        //now set profiles to state
        setProfile({
            ...profile,
            workes : profile.workes
        }); 
    }

    const onSubmitHandler =  (e) => {
        e.preventDefault();

        console.log("profile si: ", profile);
        localStorage.setItem('profile', JSON.stringify(profile));
    }
    

    const onChangeNormalParameters = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
        console.log("profile si: ", profile);

    }

    const removeWork = (e, index) => {
        e.preventDefault();

        profile.workes.splice(index,1);

        setProfile({
            ...profile,
            workes: profile.workes
        }); 

    }

    return (
        <div>
            <h2>Profile Form</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input type="name" value={profile.name} name="name" onChange={onChangeNormalParameters} className="form-control" placeholder="Enter name" id="name" />
                </div>
                <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" value={profile.email} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Mobile</label>
                    <input type="number" name="phone" value={profile.phone} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter mobile" id="mobile" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">DOB</label>
                    <input type="date" name="dob" value={profile.dob} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter DOB" id="dob" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">select gender</label>
                    <select name="gender" className="form-control" value={profile.gender} onChange={onChangeNormalParameters}>
                        <option >select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Location</label>
                    <input type="text" name="location" value={profile.location} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter location" id="location" />
                </div>

                

                <div className="company-details">
                    <h3>Work Experience <button onClick={(e) => addWork(e)}  className="btn btn-info btn-sm">Add</button></h3>
                    
                    
                        {
                            profile.workes.map( ( workk, index ) => {
                                return (
                                    <div className="each-company" key={index}>
                                        <h4>Company {index + 1}
                                          <button onClick={(e) => removeWork(e, index)} className="btn btn-danger btn-sm">Remove</button>
                                        </h4>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Company</label>
                                                <input type="text" name="company" value={workk.company} className="form-control" placeholder="Enter company name" id="company" onChange={e => handleCompanyChange(e, index)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Designation</label>
                                                <input type="text" name="designation" value={workk.designation} className="form-control" placeholder="Enter designation" id="designation" onChange={e => handleCompanyChange(e, index)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Working from</label>
                                                <input name="from_date" type="text" value={workk.from_date}   className="form-control" placeholder="Enter date" id="fdate" onChange={e => handleCompanyChange(e, index)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Till </label>
                                                <input name="to_date" value={workk.to_date} type="text"   className="form-control" placeholder="Enter date" id="tdate" onChange = {e => handleCompanyChange(e, index)} />
                                            </div>
                                        </div>   
                                        
                                    </div>
                                    
                                )
                            })
                        }
                        
                        
                    
                    

                </div>

                <div className="company-preferences">
                    <h3>Preferences</h3>
                        <div className="form-group">
                            <label htmlFor="email">Preferred Location</label>
                        <input type="text" name="plocation" value={profile.plocation} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter preferred location" id="plocation" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Industry</label>
                        <input type="text" name="industry" value={profile.industry} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter industry" id="industry" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Salary Range</label>
                        <input type="text" name="range" value={profile.range} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter salary range" id="srange" />
                        </div>
                      
                        
                </div>
                
                        
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm;
