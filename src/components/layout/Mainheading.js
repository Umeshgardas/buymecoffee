import React from 'react'


function Mainheading() {
    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <div className="py-5">
                            <div className="mainheading d-flex justify-content-center align-items-center flex-column ">
                                <h1 className="main-heading fw-bold h1">A supporter is worth a </h1>
                                <h1 className="main-heading fw-bold h1"> thousand followers.</h1>
                                <p className="lead1 fw-bold h4 ">Accept donations. Start a membership. Sell anything you like.</p>
                                <p className="lead2 fw-bold h4 "> It’s easier than you think.</p>
                                <div className="startmypage page1 border">
                                    <span className=" fw-bold h4">buymeacoffee.com/</span>
                                    <input className="border-0 yourname  h4" type="text" placeholder="yourname" size="10" />
                                    <button className="btn btn-warning fw-bold rounded-pill startbtn">Start my page</button>
                                </div>
                                <p className='small-title'>It’s free, and takes less than a minute.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainheading