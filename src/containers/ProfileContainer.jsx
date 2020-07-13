import React, { Component } from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class ProfileContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            school: {}
        };
    }

    async componentDidMount(){
        const res = await axios.get("https://ppeserver.herokuapp.com/api/school/5f0bd11c735b4431aedf3728");

        this.setState({ school: res.data.data});
    }
    render() {
        let { school } = this.state;
        return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h3" component="h2">
                            {school.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography gutterBottom variant="h3" component="h2" align="right">
                            K12
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    PPE Needs
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Item1 
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Item1 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Administrator Contact Info
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Name:  
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Email:  
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                Telephone:  
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    School Information
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Address: {school.address}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Student Population: {school.numberOfStudents}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Description: {school.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default ProfileContainer
