import RecipePoster from "../components/RecipePosters";


const Home = () => {
   
  return (<div className="p-2">
    <RecipePoster title={"main course"} number={8}/>
    <RecipePoster title={"breakfast"} number={8}/>
    <RecipePoster title={"beverage"} number={4}/>
    <RecipePoster title={"marinade"} number={4}/>
    </div>);
};

export default Home;
