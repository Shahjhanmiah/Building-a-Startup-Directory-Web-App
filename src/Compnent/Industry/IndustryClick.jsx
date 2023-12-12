import { useLoaderData } from "react-router-dom";

const IndustryClick = () => {

    const start = useLoaderData()
    const {CompanyName,description,img} = start
    console.log(start);

    return (
        <div>
           

            <div className="max-w-full p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto px-10 mx-10 my-20">
                    <div className="flex justify-between pb-4 border-bottom">
                        
                        <a rel="noopener noreferrer" href="#"></a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span className="text-4xl font-bold">CompanyName:{CompanyName}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500 text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                            

                        </div>
                        <div className="space-y-2">

                            <p className="leadi dark:text-gray-400 text-xl font-bold">{description}</p>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default IndustryClick;