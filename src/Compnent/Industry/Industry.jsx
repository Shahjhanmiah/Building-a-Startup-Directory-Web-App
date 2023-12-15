import { useContext, useEffect, useState } from "react";
import Industryshow from "./Industryshow";
import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar";
import StartupList from "../StartupList";
import { MainContext } from "../Context/AuthContext";


const Industry = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const { startups, } = useContext(MainContext)


    console.log({ startups });

    const [post, Post] = useState([])

    useEffect(() => {
        fetch('https://web-app-server-e6dx.onrender.com/post')
            .then(res => res.json())
            .then(data => Post(data))
    }, [startups])


    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handletogle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }

    }



    // const [startup, Startup] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/Startup')
    //         .then(res => res.json())
    //         .then(data => Startup(data))
    // }, [])
    return (
        <div>
            {/* search bar */}
            {/* <SearchBar ></SearchBar> */}

            <label className="swap swap-rotate px-5">

                {/* this hidden checkbox controls the state */}
                <input onChange={handletogle}
                    checked={theme === "light" ? false : true}
                    type="checkbox" />

                {/* sun icon */}
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>

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

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mx-20  bottom-5  card:hover card-inner transform: rotateY(180deg)" '>
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