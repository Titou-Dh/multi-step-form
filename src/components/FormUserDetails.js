import React, { Component } from 'react'
// import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;


        return (
            <Box>
                <AppBar title="Enter User Details" />

            </Box>
        )
    }
}

export default FormUserDetails
