import { Link } from "react-router-dom";

const Industryshow = ({start}) => {
    const {CompanyName,StartupName,City,Starting,Year,Founders,Industry,Employees,FundingAmount,_id} = start
    console.log(start);
    return (
        <div>
            

    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	
    <h1>StartupName:{StartupName}</h1>
    <h1>CompanyName:{CompanyName}</h1>
    <h1>CityName:{City}</h1>
    <h1>StartingName:{Starting}</h1>
    <h1>YearName:{Year}</h1>
    <h1>Founders:{Founders}</h1>
    <h1>Founders:{Founders}</h1>
    <h1>IndustryName:{Industry}</h1>
    <h1>Employees:{Employees}</h1>
    <h1>FundingAmount:{FundingAmount}</h1>
    <Link to={`/allIndusrty/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-600 text-white text-1xl font-bold ">View Details button</button>
                    
                    </Link>
		
	<div className="space-y-4">
		
		<div className="space-y-2">
	
		</div>
	</div>
</div>
        </div>
    );
};

export default Industryshow;