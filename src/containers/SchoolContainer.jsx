import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export class SchoolContainer extends Component {
    render() {
        return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h3" component="h2">
                            Schools
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center">
                            <TextField
                                id="outlined-full-width"
                                label="Search for Schools"
                                placeholder="Placeholder"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            <Button variant="contained" color="primary" size="large">
                                Send
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Filter By:
                        </Typography>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Need (default)"
                        />
                        <br />
                        <br />
                        <Typography gutterBottom variant="h5" component="h2">
                            School:
                        </Typography>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Elementary"
                        />
                        <br />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Middle School"
                        />
                        <br />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="High School"
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Roosevelt High School
                                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            In need of 2000 masks
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Roosevelt High School
                                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            In need of 2000 masks
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Roosevelt High School
                                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            In need of 2000 masks
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Roosevelt High School
                                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            In need of 2000 masks
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            See More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default SchoolContainer
