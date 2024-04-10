import {useNavigate} from 'react-router-dom';
const Card = (data) => {
  // console.log(data);
  const navigate = useNavigate();

  const handleClick = (id)=>{
    navigate(`/RecipePage/${id}`);
  }
  return (
    <div className="w-[350px] h-[400px] p-1 bg-white border border-gray-200 rounded-lg shadow-lg m-4 flex flex-col justify-between">
      <div>
      <div className="p-4">
        <img
          className="m-auto rounded-xl shadow-lg"
          src={data?.data?.image}
          alt="Dish Image"
        />
      </div>
      <div>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 text-center">
          {data?.data?.title}
        </h5>
      </div>
      </div>
      <div className="mx-auto my-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          onClick={()=>{handleClick(data?.data?.id)}}
        >
          Detail Recipe
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
