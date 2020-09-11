import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimerIcon from "@material-ui/icons/Timer";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  card: {
    // margin: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardOuter: {
    margin: "0 1.5rem 1.5rem 0",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  centerAlign: {
    textAlign: "center",
  },
  img: {
    width: "10rem",
    height: "10rem",
    marginLeft: "1rem",
    borderRadius: "20px",
    objectFit: "cover",
  },
  textContainer: {
    margin: "auto 0",
    paddingRight: "1rem",
  },
  titleText: {
    fontWeight: "800",
    fontSize: "1.75rem",
    lineHeight: "120%",
    fontFamily:"Avenir-Medium",
    color: "#3BB13C",
    textAlign: "left",
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
  stack: {
    position: "relative",
    width: "100%",
  },
  logo: {
    position: "absolute",
    width: "60px",
    height: "60px",
    left: 0,
    bottom: 0,
    borderRadius: "35px",
    border: "5px solid #3BB13C",
  },
}));

const RecipeCard = ({ recipe, handler }) => {
  const classes = useStyles();
  const [raised, setRaised] = useState(true);

  const toggleRaised = () => setRaised(!raised);

  return (
    <Card
      onMouseOver={toggleRaised}
      onMouseOut={toggleRaised}
      raised={raised}
      className={classes.cardOuter}
    >
      <ButtonBase onClick={() => handler(recipe)}>
        <CardContent className={classes.card}>
          <div className={classes.textContainer}>
            <div className={classes.titleText}>{recipe.name}</div>
            <div className={classes.iconContainer}>
              <TimerIcon />
              <div className={classes.durationText}>{recipe.duration}min</div>
            </div>
          </div>
          <div className={classes.stack}>
            <img src={recipe.img} alt="recipe img" className={classes.img} />
            <img src={recipe.logo} alt="recipe img" className={classes.logo} />
          </div>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default RecipeCard;
