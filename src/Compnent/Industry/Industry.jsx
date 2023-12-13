import { useContext, useEffect, useState } from "react";
import Industryshow from "./Industryshow";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import StartupList from "../StartupList";
import { MainContext } from "../Context/AuthContext";


const Industry = () => {

    const {startups, setStartups} = useContext(MainContext)


    console.log({startups});

    const [post, Post] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => Post(data))
    }, [startups])



    // const [startup, Startup] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/Startup')
    //         .then(res => res.json())
    //         .then(data => Startup(data))
    // }, [])
    return (
        <div>
            {/* search bar */}
            <SearchBar ></SearchBar>

            {/* Dropdwon  */}
            <StartupList></StartupList>
            <div className='flex items-center justify-center'>
               
                <br></br>
                <dvi className="gap-3">
                    <Link to={'/adduser'}>
                        <button className="btn btn-outline btn-info">Adduser</button>
                    </Link>
                </dvi>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ml-20  bottom-5" '>
                {
                    startups.map(start => <Industryshow key={start._id}

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