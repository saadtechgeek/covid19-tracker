import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css'

export default function Cards(props) {
    console.log(props);
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected</Typography>
                        <Typography varient="h5"> REAL DATA</Typography>
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected</Typography>
                        <Typography varient="h5"> REAL DATA</Typography>
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected</Typography>
                        <Typography varient="h5"> REAL DATA</Typography>
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
