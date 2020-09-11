import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import TimerIcon from "@material-ui/icons/Timer";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import SpotifyPlayer from 'react-spotify-player';
import ReactFullscreenSlideshow from 'react-fullscreen-slideshow';
import restaurant from '../images/restaurant.png'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: "none"
  },
  paper: {
      border: "none",
      outline: "none",
      padding: "3rem",
      width: "70%",
      borderRadius: "24px",
  },
  name:{
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "48px",
    lineHeight: "66px",
  },
  iconContainer: {
    display: "flex",
    paddingTop: "0.5rem",
  },
  durationText: {
    fontSize: "20px",
    marginLeft: "0.5rem",
    color: " #707070",
  },
  topContainer: {
      display: "flex"
  },
  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "35px",
    border: "5px solid #3BB13C",
    marginLeft: "2rem"
  },
  divider: {
      backgroundColor: "#3BB13C",
      margin: "2rem 0",
      height: "4px"
  },
  bodyTitle: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "32px",
    lineHeight: "44px",
  },
  bodyText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "140%",

  },
  songText: {
    marginBottom: "1rem",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.03em",
    color: "#9CA5AF",
  },
  restaurant: {
    width: "339px",
    height: "65px",
    marginLeft:"2rem"
  }
}));

export default function RecipeDetails({open, handler, currentRecipe}) {
  const classes = useStyles();
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
          <div className={classes.topContainer}>
            <div>
                <div className={classes.name}>{currentRecipe.name}</div>
                <div className={classes.iconContainer}>
                <TimerIcon />
                <div className={classes.durationText}>{currentRecipe.duration}min</div>
                </div>
            </div>
            <img
              src={currentRecipe.logo}
              alt="recipe img"
              className={classes.logo}
            />
            <a href="https://bangkokburi.com/menu/">
              <img
                src={restaurant}
                alt="restaurant img"
                className={classes.restaurant}
              />
            </a>
          </div>
          <Divider className={classes.divider} />
          <Grid container>
            <Grid item xs >
                <div className={classes.bodyTitle}>Ingredients</div>
                {currentRecipe.ingredients && currentRecipe.ingredients.split('\n').map( e => <div className={classes.bodyText}>{e}</div>)}

            </Grid>
            <Grid item xs >
                <div className={classes.bodyTitle}>Steps</div>
                {currentRecipe.steps && currentRecipe.steps.map( (e, index) => {
                        return (
                            <>
                                <div className={classes.bodyText} style={{fontWeight: "bold", margin:"1rem 0"}}>Step {index + 1}</div>
                                <div className={classes.bodyText}>{e}</div>
                            </>
                        );
                    })}
            </Grid>
            <Grid item xs >
                <div className={classes.bodyTitle}>Suggested Playlist</div>
                    <SpotifyPlayer
                        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
                        size={{width:'100%', height: "85px"}}
                        view="coverart"
                        theme="black"
                        />
                <div className={classes.songText}>
                from artists of the 2020 TD Toronto Jazz Festival Summer Concert Series

                </div>

                <div>
    {                currentRecipe.images && <ReactFullscreenSlideshow images={currentRecipe.images} title={"Enjoy some art!"}/>
    }
                </div>
            </Grid>
          </Grid>
          </Paper>
        </Fade>
      </Modal>
  );
}
