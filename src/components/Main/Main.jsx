import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider, List } from '@material-ui/core'
import useStyles from './styles';
// import Form from './Form/Form';
//  import List from './List/List';

const Main = () => {
const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardHeader title={"Money Manager"} subheader="Created by Shadab & Sheeban" />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', margineTop: '20px' }}>
                    {/* InfoCard... */}
                    Try saying: Add income for $100 in Category Salary for Monday....
                </Typography>
                <Divider />
                
                {/* <Form /> */}
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={12}>
                    
                    {/* <List /> */}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Main;