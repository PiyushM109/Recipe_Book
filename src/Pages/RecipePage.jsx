import { useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import { useEffect, useState } from "react";
import axios from "axios";
const RecipePage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [name, setName] = useState("Dish Name");
  const [summary, setSummary] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${apiKey}`)
      .then((resp) => {
        console.log(resp);
        setName(resp?.data?.title);
        setSummary(resp?.data?.summary);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="m-6 p-6">
        <h3 className="font-bold text-3xl from-neutral-950 content-center text-center">{name}</h3>
      <div className="w-[95%] p-4 content-center">
       <div className="ml-auto flex flex-row justify-center p-2">
       <div className="w-[40%] ">
          <img
            className="rounded-xl shadow-xl"
            src={`https://img.spoonacular.com/recipes/${id}-636x393.jpg`}
            alt="Recipe Image"
          />
        </div>
        <div className="w-[40%] ">
        <div className="font-medium text-lg" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
       </div>
      </div>
      <div className="w-[95%] p-4 content-center">
        <div className="ml-auto flex flex-row justify-center p-2">
          <div className="w-[40%] ">
            <Ingredients id={id} />
          </div>
          <div className="w-[40%] ">
            <Instructions id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
