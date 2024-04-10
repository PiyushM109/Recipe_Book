const IngredientCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-[300px] h-[100px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 m-1">
      <img
        src={`https://img.spoonacular.com/ingredients_100x100/${data?.image}`}
        alt="Ingredient Image"
      />
      <div className="m-1 flex flex-col justify-between leading-normal">
        <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900">
          {data?.name.toUpperCase()}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {`${data?.amount?.metric?.value} ${data?.amount?.metric?.unit}`}
        </p>
      </div>
    </div>
  );
};

export default IngredientCard;
