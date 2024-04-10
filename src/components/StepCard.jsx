const StepCard = ({ step }) => {
//   console.log(step);
  return (
    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        Step : {step?.number}
      </h5>
      <p class="font-normal text-gray-700 ">{step?.step}</p>
    </div>
  );
};

export default StepCard;
