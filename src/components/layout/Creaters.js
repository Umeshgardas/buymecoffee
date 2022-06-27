import React from 'react'
import { Routes, Route } from "react-router-dom";
// import "./Creaters.css"

import Artists from '../creaters/Artists'
import Community from '../creaters/Community'
import Developers from '../creaters/Developers'
import Gaming from '../creaters/Gaming'
import Musicians from '../creaters/Musicians'
import PodCasters from '../creaters/PodCasters'
import Writers from '../creaters/Writers'
import VideoCreaters from "../creaters/VideoCreaters"
import Freelancers from "../creaters/Freelancers"
import Navbar from '../Navbar';


function Creaters() {

    return (
        <div className='creaters'>
            <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<VideoCreaters />} />
                <Route path="artists" element={<Artists />} />
                <Route path="writers" element={<Writers />} />
                <Route path="musicians" element={<Musicians />} />
                <Route path="developers" element={<Developers />} />
                <Route path="gaming" element={<Gaming />} />
                <Route path="podcasters" element={<PodCasters />} />
                <Route path="community" element={<Community />} />
                <Route path="freelancers" element={<Freelancers/>} />
            </Routes>
            </div>
        </div>
    )
}

export default Creaters