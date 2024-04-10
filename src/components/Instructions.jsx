import { useEffect, useState } from "react";
import StepCard from "./StepCard";
import axios from "axios";
const Instructions = ({ id }) => {
  console.log(id);
  const apiKey = import.meta.env.VITE_API_KEY;
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
      )
      .then((resp) => {
        // console.log(resp);
        setSteps(resp.data[0].steps);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (steps.length == 0) {
    return <div>Loading</div>;
  }
  return (
    <div className="m-2 p-2">
      <div className="font-bold text-xl ml-6 flex justify-center">
        Istructions
      </div>
      <div className="m-4 w-[600px]">
        {steps.map((step) => (
          <StepCard step={step} />
        ))}
      </div>
    </div>
  );
};

export default Instructions;
