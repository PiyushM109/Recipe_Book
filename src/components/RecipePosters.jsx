import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import RecipeCardShimmer from "./Shimmer/RecipeCardShimmer";

const RecipePoster = ({ title, number }) => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?type=${title}&apiKey=${apiKey}&number=${number}`
      )
      .then((resp) => {
        // console.log(resp);
        setRecipes(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if(recipes.length==0){
    return (
      <RecipeCardShimmer />
    );
  }
  return (
    <div className="p-4 m-2">
      <h2 className="mx-10 my-4 font-bold text-xl">{title.toUpperCase()}</h2>
      <div className="m-2 flex flex-wrap justify-evenly">
        {recipes.map((recipe) => (
          <Card key={recipe.id}  data={recipe}/>
        ))}
      </div>
    </div>
  );
};

export default RecipePoster;
