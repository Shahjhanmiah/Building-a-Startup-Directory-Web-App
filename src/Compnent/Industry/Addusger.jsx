
// import Swal from 'sweetalert2'


import Swal from "sweetalert2";
const Addusger = () => {

    

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const startupName = form.startupName.value;
        const companyName = form.companyName.value;
        const city = form.city.value;
        const startingYear = form.startingYear.value;
        const founders = form.founders.value;
        const industry = form.industry.value;
        const employees = form.employees.value;
        const fundingAmount = form.fundingAmount.value
        const newUser = { startupName, companyName, city, startingYear, founders, industry, employees, fundingAmount }
        console.log(newUser);

        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Add users Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div>
              


            <div>
                <div className="bg-[#F4F3F0] p-24">
                    <h2 className="text-3xl font-extrabold">Add a User</h2>
                    <form onSubmit={handleAddToy}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">StartupName</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="startupName" placeholder="StartupName" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">CompanyName</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="companyName" placeholder="CompanyName" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="city" placeholder="City" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">StartingYear</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="startingYear" placeholder="StartingYear" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Founders</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="founders" placeholder="Founders" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Industry</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="industry" placeholder="Industry" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Photo url row */}
                        <div className=" md:flex mb-8 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Employees</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="employees" placeholder="Employees" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">FundingAmount</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="fundingAmount" placeholder="FundingAmount" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add  A New User" className="btn btn-block bg-#F4F3F0" />

                    </form>
                </div>

              
            </div>

           
        </div>
    );
};

export default Addusger;