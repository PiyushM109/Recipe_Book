import { useParams } from 'react-router-dom';

const RecipePage = ()=>{
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            Recipe Page
        </div>
    );
}

export default RecipePage;