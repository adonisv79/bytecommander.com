import React, { Suspense } from 'react';
import { Grid, Box, Container, Typography, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, VideogameAsset as VideogameAssetIcon,
  RecentActors as RecentActorsIcon} from '@material-ui/icons';
import './Main.css';
import Hidden from "@material-ui/core/Hidden";
const Reversi = React.lazy(() => import('../Reversi'));
const About =  React.lazy(() => import('../AboutUs'));

function Header() {
  return (
    <header width="100%">
      <Grid container>
        <Grid item xs={12} sm={6} md={2} lg={3} xl={4}>
          <img src="/images/logo.png" width="100%" />
        </Grid>
        <Grid item xs={12} sm={6} md={9} lg={7} xl={6} align="center">
          {/*<Typography variant="body" color="textSecondary" align="center">*/}
          {/*  <Link href="#" onClick={()=>{}}>*/}
          {/*    Link*/}
          {/*  </Link>*/}
          {/*</Typography>*/}
          <ButtonGroup className="header-menus" variant="contained" color="primary" aria-label="contained primary button group" >
            <Button component={Link} to="/" startIcon={<HomeIcon />}>Home</Button>
            <Button component={Link} to="/portfolio/reversi" startIcon={<VideogameAssetIcon />}>Portfolios</Button>
            <Button component={Link} to="/about" startIcon={<RecentActorsIcon />}>About</Button>
          </ButtonGroup>
        </Grid>
        <Hidden smDown>
          <Grid item md={1} lg={2} xl={2}>
            <img src="/images/header-filler.png" width="90%" />
          </Grid>
        </Hidden>
      </Grid>
    </header>
  );
}

function tempMenuAlert(){
  alert('Oh! it does something! this notification!');
}

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

function LoadingBody() {
  return (
    <Container align="center">
      <div>Content is loading... Please wait.<br /><img width="50px" src="/images/loading.gif" /></div>
    </Container>
  );
}

function Footer() {
  const classes = useStyles();
  const link = <a href="https://github.com/adonisv79/bytecommander.com">my Github page</a>;
  const message = 'The source code for this site and its contents are freely available at\n';
  const email = <a href="mailto:adonisv79@gmail.com" subject="Re: Bytecommander">adonisv79@gmail.com</a>;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography align="center" variant="body1">
          {message}{link}
          <Box>
            Bytecommander™ (2011) is owned and maintained by Adonis Lee Villamor<br />
            for concerns on this site, please feel free to contact me at {email}
          </Box>
        </Typography>
      </Container>
    </footer>
  );
}

export default function Main() {
  return (
    <Router>
      <Route path="/">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Header />
            </Grid>
          </Grid>
          <hr />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Route exact={true} path="/portfolio/reversi">
              <Suspense fallback={LoadingBody()}>
                <Reversi />
              </Suspense>
            </Route>
            <Route exact={true} path="/about">
              <Suspense fallback={LoadingBody()}>
                <About />
              </Suspense>
            </Route>
            <Route exact={true} path="/">
              <Suspense fallback={LoadingBody()}>
                <p>Note that I am still rebuilding this site. In the meantime, please try my games created purely using ReactJS and related technologies. Or watch this awesome music video of my favorite anime ever "Hokuto No Ken" (Fist of the north Star). Thanks</p>
                <iframe width="360" height="225" src="https://www.youtube.com/embed/VSs71eE-jmo" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </Suspense>
            </Route>
          </Grid>
          <hr />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Footer />
          </Grid>
        </Container>
      </Route>
    </Router>
  );
}
