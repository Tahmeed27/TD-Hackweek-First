import React, { useState } from "react";
import classes from "./Recipes.module.css";
import Dragdown from "./Dragdown";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";

import recipes from "./data/recipes";
import labels from "./data/labels";

const Recipes = () => {
  const defaultCuisine = "Cuisine";
  const defaultFestival = "Festival";
  const defaultDuration = 0;
  const [cuisine, setCuisine] = useState(defaultCuisine);
  const [festival, setFestival] = useState(defaultFestival);
  const [duration, setDuration] = useState(defaultDuration);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const [open, setOpen] = useState(false);

  const handleOpen = (recipe) => {
    setOpen(true);
    setCurrentRecipe(recipe);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayedRecipes = recipes.filter((recipe) => {
    return (
      (cuisine === defaultCuisine || recipe.cuisine === cuisine) &&
      (festival === defaultFestival || recipe.festival === festival) &&
      (duration === defaultDuration || recipe.duration < duration)
    );
  });
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.font}>Recipes</div>
        <Dragdown labels={labels[0]} title={cuisine} handler={setCuisine} />
        <Dragdown labels={labels[1]} title={festival} handler={setFestival} />
        <Dragdown labels={labels[2]} title={duration} handler={setDuration} />
      </div>
      <Grid container>
        {displayedRecipes.map((recipe) => {
          return (
            <Grid item xs={4}>
              <RecipeCard recipe={recipe} handler={handleOpen} />
            </Grid>
          );
        })}
      </Grid>
      <RecipeDetails
        open={open}
        handler={handleClose}
        currentRecipe={currentRecipe}
      />
    </div>
  );
};

export default Recipes;
