import { useEffect, useState } from "react";
import axios from "axios";
import IngredientCard from "./IngredientCard";
const Ingredients = ({ id }) => {
  const [ingredients, setIngredients] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
      )
      .then((resp) => {
        // console.log(resp?.data?.ingredients);
        setIngredients(resp?.data?.ingredients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="m-2 p-2">
      <div className="font-bold text-xl mb-4 flex justify-center">
        Ingredients
      </div>
      <div className="flex flex-wrap justify-between">
        {ingredients.map((ingredient) => (
          <IngredientCard data={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
