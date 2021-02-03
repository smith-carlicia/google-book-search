import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Navigation = (props) => {

    return(
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Search
                            </Typography>
                            <Typography variant="h6" color="inherit">
                                Saved
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </>
            </BrowserRouter>
        </>
    )
}

export default Navigation;