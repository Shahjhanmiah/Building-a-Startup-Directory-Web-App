import { useEffect, useState } from "react";
import Industryshow from "./Industryshow";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";


const Industry = () => {


    const [post, Post] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => Post(data))
    }, [])



    const [startup, Startup] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Startup')
            .then(res => res.json())
            .then(data => Startup(data))
    }, [])
    return (
        <div>
            {/* search bar */}
            <SearchBar></SearchBar>

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

                <div>

                </div>


            </div>

            <div>
                <div>

                    <h1 className="text-5xl text-center font-">New Add User: {post.length}</h1>
                    <div className="overflow-x-auto w-full gap-3">
                        <table className="min-w-full table-auto text-center">
                            {/* head */}
                            <thead>
                                <tr className="bg-blue-600 text-white">

                                    <th>CompanyName</th>
                                    <th>City</th>
                                    <th>StartingYear</th>
                                    <th>Founders</th>
                                    <th>Industry</th>
                                    <th>Employees</th>
                                    <th>FundingAmount</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post.map((post,) => <tr
                                        key={post._id}
                                    >
                                        <td>
                                       {post.companyName}
                                        </td>
                                        <td >

                                           {post.city}
                                        </td>
                                        <td>
                                         {post.startingYear}
                                        </td>
                                        <td> 
                                            {post.founders}
                                        </td>
                                        <td> 
                                            {post.industry}
                                        </td>
                                        <td>
                                            {post.employees}
                                        </td>
                                        <td>
                                            {post.fundingAmount}
                                        </td>


                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Industry;