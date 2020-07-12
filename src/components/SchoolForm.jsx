import React from 'react'
import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';

class SchoolForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input 
                        id="my-input" 
                        aria-describedby="my-helper-text" 
                    />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input 
                        id="my-input" 
                        aria-describedby="my-helper-text" 
                    />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </div>
        )
    }
}

{/**
TITLE PPE Needs
surgical masks:
cloth masks:
gloves (pairs):

TITLE School Information
School Name: 
School Email:
School Address:
School Zipcode: 
School State: 

About:
Student Population:
Self-Reported Urgency: low medium high

Administrator Contact Info
First Name:
Last Name:
Email:
Telephone
*/}


export default SchoolForm
