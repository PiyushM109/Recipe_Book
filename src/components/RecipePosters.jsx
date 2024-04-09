import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const RecipePoster = ({ title }) => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?type=${title}&apiKey=${apiKey}&number=8`
      )
      .then((resp) => {
        // console.log(resp);
        setRecipes(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2 className="m-2 font-bold text-xl">{title.toUpperCase()}</h2>
      <div className="m-2 flex flex-wrap justify-evenly">
        {recipes.map((recipe) => (
          <Card key={recipe.id}  data={recipe}/>
        ))}
      </div>
    </div>
  );
};

export default RecipePoster;
