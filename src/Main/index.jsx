import React from 'react';
import { Grid, Box, Container, Typography, makeStyles } from '@material-ui/core';
import Reversi from '../Reversi';
import './index.css';

function Header() {
  const intro = 'Welcome to my new page! there is not much for now but I plan to start working on my hobbies and '
    + 'share them online. I have always been fascinated by web development since 2000 when the ISP pre-paid cards '
    + 'became famous here. Since then I have tried HTML 4 and CSS but was never a fan of javascript. The only use I '
    + 'found it useful then was putting rainbow trails when you hover on my page or convert emoticons to images on '
    + 'table declarations for my forums. Since then I worked on desktop enterprise projects and kinda abandoned the '
    + 'web technologies until 2014 when NodeJS got my attention as a solid technology for the web. I started playing '
    + 'with NodeJS and Javascript (ES6) and other related web technologies. This site aims to become a repository of '
    + 'all my creations! ~Adonis Lee Villamor';
  return (
    <Typography variant="body" color="textSecondary" align="center">{intro}</Typography>
  );
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

function Footer() {
  const classes = useStyles();
  const link = <a href="https://github.com/adonisv79/bytecommander.com">my Github page</a>;
  const message = 'The source code for this site and its contents are freely available at\n';
  const email = <a href="mailto:adonisv79@gmail.com" subject="Re: Bytecommander">adonisv79@gmail.com</a>;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography align="center" variant="body1">
          {message}
          {link}
          <Box>
            Bytecommander™ (2011) is owned and maintained by Adonis Lee Villamor<br />
            for concerns on this site, please feel free to contact me at {email}
          </Box>
        </Typography>
      </Container>
    </footer>
  );
}

export default function () {
  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item>
            <Header />
          </Grid>
        </Grid>
        <hr />
        <Grid item>
          <Typography>
            <Reversi />
          </Typography>
        </Grid>
        <hr />
        <Grid item>
          <Footer />
        </Grid>
      </Box>

    </Container>
  );
}
