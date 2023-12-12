import { useEffect, useState } from "react";
import Industryshow from "./Industryshow";
import { Link } from "react-router-dom";

const Industry = () => {

    const [startup, Startup] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Startup')
            .then(res => res.json())
            .then(data => Startup(data))
    }, [])
    return (
        <div>
            {/* search bar */}
            <div className="flex items-center justify-center">
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" className="p-1 focus:outline-none focus:ring bg-blue-600 text-white">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                    {/* SVG path */}
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                        />
                    </div>
                </fieldset>
            </div>

            {/* Dropdwon  */}
            <div className='flex items-center justify-center'>
                <details className="dropdown">
                    <summary className="m-1 mx-auto btn bg-blue-600 text-white">Dropdown</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Shahjhan </a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                
                </details>
                <br></br>
              <dvi className="gap-3">
                <Link to={'/adduser'}>
              <button className="btn btn-outline btn-info">Adduser</button>
              </Link>
              </dvi>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ml-20  bottom-5" '>
                {
                    startup.map(start => <Industryshow key={start._id}

                        start={start}


                    >


                    </Industryshow>)
                }

            </div>

        </div>
    );
};

export default Industry;