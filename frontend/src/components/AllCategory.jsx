import React from 'react';

function AllCategory(props) {
    return (
        <div className='container-fluid justify-content-center align-items-center m-5'>
            <h2 className='text-center p-3 mb-2'>Explore <span className='text-danger text-decoration-underline text-center'>Products</span></h2>
            <div className="row">

                <div className="col-sm-3">
                    <img src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fcategory%2Fshirt_2_1.jpg&w=256&q=75" className='rounded-5 shadow-lg' alt="" height={200} />
                    <h5 className='text-center'>Shirts</h5>
                </div>

                <div className="col-sm-3">
                    <div>
                        <img src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fcategory%2Fbottoms_1_1.jpg&w=256&q=75" className='rounded rounded-5 shadow-lg' alt="" height={200} />
                        <h5 className='text-center'>Bottoms</h5>
                    </div>
                </div>

                <div className="col-sm-3">
                    <img src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fcategory%2Ftshirt_1_1_1.jpg&w=256&q=75" className='rounded rounded-5 shadow-lg' alt="" height={200} />
                    <h5 className='text-center'>TShirts</h5>
                </div>

                <div className="col-sm-3">
                    <img src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fcategory%2Fcargo.jpg&w=256&q=75" className='rounded rounded-5 shadow-lg' alt="" height={200} />
                    <h5 className='text-center'>Jeans</h5>
                </div>
            </div>
        </div>
    );
}

export default AllCategory;