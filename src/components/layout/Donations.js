import React from 'react'
import './Donations.css'

function Donations() {
  return (
    <div className='donation'>
        <div className="container ">
                <div className="row">
                    <div className="col">
                        <div className="py-5">
                            <div className="mainheading d-flex justify-content-center align-items-center flex-column ">
                            <p className="lead fw-bold h5 ">DONATIONS</p>
                                <h1 className="main-heading">Give your audience an </h1>
                                <h1 className="main-heading">easy way to say thanks.</h1>

                                <p className="donation_head2 fw-bold h5 ">Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans </p>
                                <p className='fw-bold h5'> can make the payment (buy you a coffee) and leave a message. They don’t even</p>
                                <p className='fw-bold h5' > even have to create an account!</p>
                               <img className='donation-img1' src="https://cdn.buymeacoffee.com/assets/homepage/onetime-support-new.png" alt="" />
                                <p className='small-title'>It’s free, and takes less than a minute.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Donations