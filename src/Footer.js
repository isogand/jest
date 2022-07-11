import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import AdbIcon from "@mui/icons-material/Adb";
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Divider, Stack} from "@mui/material";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `<Grid container spacing={${spacing}}>`;
    return (
        <Box

            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '78.3vh',
            }}
        >

            <Box
                style={{backgroundColor:'#474747'}}
                component="footer"
                sx={{
                    py: 5,
                    px: 5,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My sticky footer can be found here.<span role="img" aria-label="Love">❤️</span>
                    </Typography>
                </Container>
                <br/>
                {/*<FavoriteIcon style={{fontSize:15,color:'red'}}/>*/}
                {/*//icon*/}
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={spacing}>
                            {/*{[0,1,2,3].map((value) => (*/}
                                <Grid style={{display:'flex'}}>
                                    <Paper
                                        style={{borderRadius:'50%'}}
                                        sx={{
                                            height: 40,
                                            width: 40,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <AdbIcon color="success" style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:'0.5rem',fontSize:25}}  />
                                    </Paper>
                                    <Paper
                                        style={{borderRadius:'50%'}}
                                        sx={{
                                            height: 40,
                                            width: 40,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <InstagramIcon  color="secondary" style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:'0.5rem',fontSize:25}}  />
                                    </Paper>
                                    <Paper
                                        style={{borderRadius:'50%'}}
                                        sx={{
                                            height: 40,
                                            width: 40,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <YouTubeIcon color="primary" style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:'0.5rem',fontSize:25}}  />
                                    </Paper>
                                    <Paper
                                        style={{borderRadius:'50%'}}
                                        sx={{
                                            height: 40,
                                            width: 40,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <MailOutlineIcon  style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:'0.5rem',fontSize:25}}  />
                                    </Paper>

                                </Grid>
                            {/*))}*/}
                        </Grid>
                    </Grid>
                </Grid>

                <br/>
                <Stack style={{justifyContent:'center'}}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={8}
                >
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </Stack>
                {/*//gride*/}
                <br/>
                <br/>
                <Grid container spacing={2}>
                    <Grid style={{backgroundColor:'pink'}} item xs={8}>
                        <div style={{direction:'rlt',textAlign:'end'}}>xs=8</div>
                        <div>xs=8</div>
                        <div style={{textAlign:'start'}}>xs=8</div>
                    </Grid>
                    <Grid style={{backgroundColor:'orange'}} item xs={4}>
                        <div>xs=4</div>
                    </Grid>
                    <Grid style={{backgroundColor:'orchid'}} item xs={4}>
                        <div>xs=4</div>
                    </Grid>
                    <Grid style={{backgroundColor:'yellow'}} item xs={8}>
                        <div>xs=8</div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

