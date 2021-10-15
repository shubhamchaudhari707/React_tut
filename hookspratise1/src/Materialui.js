import React from 'react'
import { ButtonGroup, Button, Fab, Checkbox, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm'
import DateFnsUtils from '@date-io/date-fns'
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const Materialui = () => {

    return (
        <>


            {/* button  */}

            <div>
                <h1>button</h1>
                <Button variant="contained" color="primary">
                    Primary
                </Button>

                <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
                    Delete
                </Button>

                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>

                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <hr />
            </div>


            {/* fabIcon */}

            <div>
                <h1>floating actiobn button</h1>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>

                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>

                <Fab variant="extended">
                    <NavigationIcon />
                    Navigate
                </Fab>

                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>

                <hr />
            </div>

            {/* CheckBox */}

            <div>
                <h1>Checkbox</h1>

                <Checkbox />
                <Checkbox checked="true" />

                <Checkbox checked="true" />

                <hr />
            </div>

            {/* date */}
            <h1>Data and Time</h1>
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"

                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                <hr />
            </div>

            {/* radioButton */}
            <div>
                <h1>RadioButton</h1>

                <Radio
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </div>

            {/* switch */}
            <div>
                <h1>Switch</h1>
                <Switch
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <hr />
            </div>

            {/* box */}
            <div>

                <Box bgcolor="primary.main" color="secondary.main">Hello world </Box>
                <Box color="success.main">ee;kcl;klkj</Box>
                <Box color="success.main" p={10} border={12} bgcolor="primary.main" >shubham</Box>
                <hr />
            </div>

            {/* avatar */}
            <div>
                <Avatar alt="R" src="https://picsum.photos/200/300" />
                <Avatar>ws</Avatar>
            </div>

            <div>
                {/* badges */}
                {/* divide */}
                {/* chip */}
                {/* list */}
                {/* table */}
                {/* tooltip */}
                {/* typography */}
                {/* progress */}
            </div>

            <div>
                <Typography variant="h1" component="h2" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>

                <hr />
            </div>

            {/* Grid */}

            {/* <div>
                <h1>Grid system</h1>

                        <Grid container spacing={2} direction="coloumn" >
                            <Grid item md={4} lg={3} sm={6} xs={12} >
                                <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
                            </Grid>
                            <Grid item md={4} lg={3} sm={6} xs={12} >
                                <Box bgcolor="green" p={5} textAlign="center">2</Box>
                            </Grid>
                            <Grid item md={4} lg={3} sm={6} xs={12} >
                                <Box bgcolor="red" p={5} textAlign="center">3</Box>
                            </Grid>
                            <Grid item md={4} lg={3} sm={6} xs={12} >
                                <Box bgcolor="blue" p={5} textAlign="center">4</Box>
                            </Grid>
                        </Grid>

            </div> */}

            <div>
                <h1>Grid system</h1>

                <Grid container spacing={2} direction="row" justify={'center'} >
                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
                        <Grid container>
                            <Grid item md={4} xs={12}>
                                <Box bgcolor="red" p={5} textAlign="center">1</Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box bgcolor="black" p={5} textAlign="center">1</Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Box bgcolor="green" p={5} textAlign="center">2</Box>
                    </Grid>
                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Box bgcolor="red" p={5} textAlign="center">3</Box>
                    </Grid>

                </Grid>

            </div>

            {/* paper */}
            <div>
                <h1>paper</h1>

                <Grid container spacing={2} direction="coloumn" >
                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Paper elevation={9}>

                            <Card className="">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        sbckjhcjashckljahc ajchahc oashcha
                                    </Typography>
                                    <Typography color="textSecondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Paper>
                    </Grid>

                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Box bgcolor="green" p={5} textAlign="center">2</Box>
                    </Grid>

                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Box bgcolor="red" p={5} textAlign="center">3</Box>
                    </Grid>

                    <Grid item md={4} lg={3} sm={6} xs={12} >
                        <Box bgcolor="blue" p={5} textAlign="center">4</Box>
                    </Grid>

                </Grid>

            </div>




        </>
    )
}

export default Materialui
