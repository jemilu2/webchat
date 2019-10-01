/** 
 * This form is intended to help edit prior information
 * It will thus need to get access to some prior information
 * Set various form fields to default values in that prior info
 * Send new and updated info to the server
 * 
 * How to deal with that data is rather interesting
 * We could simply use fetch from isomorphicunfetch to 
 * set initial data for the page - next solution
 * that would work al right but what if the user moves to a different page
 * and then comes back. That would require multiple calls to the server
 * A better solution would be to use an application state management tool like
 * redux. With this, data will be persisted to the store and accessed between
 * page movements. 
 * 
 * We know so little about the server and api endpoints at the moment
 * We also have no idea if we may use application state management tools or not
 * 
 * 
 * In the immediate term however, a simple but inefficient next based solution of providing 
 * data for the page would or should do
*/


import React from 'react';
import {Gender} from '../constants';
import FlexRow from '../components/FlexRow';
import Input from '../components/Input';
import '../static/styles/tailwind.css';
import ImageUpLoader from '../components/ImageUpLoader';
import Select from '../components/Select';
import {withRouter} from 'next/router';

import axios from 'axios';



class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    isValidPhoto = () => {
        const validExtensions = ["png","jpg"];
        console.log(event.target);
        const photo = event.target.photo.value;
        if (photo === undefined || photo.length===0){
            alert("You must select a passport picture");
        } 
        const parts = photo.split(".")
        if (parts.length < 2) {
            alert("please select a valid file with an extension");
        }

        const extension = parts[parts.length-1];

        if (!(extension in validExtensions)) {
            alert("Picture must have extensions in "+validExtensions);
            return false;
        }
        return true
    }

    profileSaveHandler = (event) => {
        event.preventDefault();
        
        let form_content = {
            "first_name":event.target.first_name.value,
            "last_name":event.target.last_name.value,
            "email":event.target.email.value,
            "phone":event.target.phone.value,
            "dob":event.target.dob.value,
            "facebook":event.target.facebook.value,
            "gender":event.target.gender.value,
            "home_town":event.target.home_town.value,
            "bio":event.target.bio.value,
        }    
        let {router} = this.props;
        let url = "https://nameless-sea-90483.herokuapp.com/student";
        let devUrl = 'http://127.0.0.1:5000/student'
        axios.post(url, form_content)
          .then(function (response) {
            console.log("fetch success");
          })
          .catch(function (error) {
            router.push("/registration_failure")
            return
          });
        router.push("/registration_success")
        alert("Profile Saved ");
    }



    render = () => {        
        return (
            <div id="profile-body">
            <div className="max-w-lg bg-white mx-auto p-4 my-7">
                <div id="profile-header">
                    <p className="text-lg text-center my-5">Audition Form</p>
                </div>
                <div className="flex flex-row">
                    <div id="logo" className="mt-2 p-4">
                        <ImageUpLoader form="form" header="Passport Picture" name="photo" />
                    </div>
                    <div id="MainFormHolder"  className="mt-6 pr-5 flex-1">
                        <form onSubmit={this.profileSaveHandler} id="form">
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="first_name" type="text" value={this.state.first_name}  placeholder="Firstname" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="last_name" type="text" value={this.state.last_name}  placeholder="Lastname" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="email" type="email" value={this.state.email}  placeholder="Email" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="phone" type="text" value={this.state.phone}  placeholder="Phone Number" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="home_town" type="text" value={this.state.home_town} placeholder="Home Town" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3 bg-light-grey">
                                <Select options={Gender}  form="form" value={this.state.district} name="gender"  required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="facebook" value={this.state.facebook}  type="text" placeholder="facebook link" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="dob" value={this.state.facebook}  type="date" placeholder="date of birth" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <textarea name="bio" 
                                required
                                value={this.state.bio}
                                placeholder="Tell us a bit about yourself." 
                                className="w-full border border-black py-3 px-3 mb-6 focus:border-transparent focus:border-green-light focus:outline-none focus:bg-white" rows="7">
                                </textarea>
                        </FlexRow>
                        <FlexRow>
                            <div className="mx-auto">
                                <input type="submit" value="Submit Application" className="block w-full bg-green-darker text-lg rounded text-white p-4 font-bold"/>
                            </div>
                        </FlexRow>
                        </form>
                    </div>
                </div>
                </div>
                <style jsx>{`
                    a {
                        text-decoration:none;
                        text-decoration-color: none;
                        color: red
                    }
                    #profile-header {
                        border-bottom : 1px solid black;
                    }

                    #profile-body {
                        background-color:grey;
                        
                    }  
                `}
                </style>
            </div>
        );
    }
}





export default withRouter(Profile);
