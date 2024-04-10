import ShimmerCard from "./ShimmerCard";
const RecipeCardShimmer = () => {
  return (
    <div>
      <div className="m-2 flex flex-wrap justify-between">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default RecipeCardShimmer;
