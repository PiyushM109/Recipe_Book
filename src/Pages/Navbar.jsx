import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="sticky bg-white z-20 top-0 start-0 border-b border-gray-100">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Recipe Book
          </span>
        </a>
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
            <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0"
                onClick={()=>{
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <a
                href="https://github.com/PiyushM109"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
