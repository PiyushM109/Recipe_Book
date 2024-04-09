import RecipePoster from "../components/RecipePosters";


const Home = () => {
   
  return (<div className="w-screen m-4 p-4">
    <RecipePoster title={"main course"}/>
    <RecipePoster title={"breakfast"} />
    <RecipePoster title={"marinade"}/>
    </div>);
};

export default Home;
