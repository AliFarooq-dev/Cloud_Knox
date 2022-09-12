import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import css from '../App.css'
export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '22ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Old password" variant="outlined" />
        
            <br />
            <br />
            <TextField id="outlined-basic" label="New Password" variant="outlined" />
            < TextField id="outlined-basic" label="Confirm Password" variant="outlined" />  
            <br />
            <br />
            <button className='passwordButton'>Change</button>   
        </Box>
    );
}
