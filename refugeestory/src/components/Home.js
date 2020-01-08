import React, {useContext} from 'react';
import HomeCarousel from './Carousel';
import Stories from './Stories';
import {StoriesContext} from "../contexts/StoriesContext";


const Home = props => {
    const myData = useContext(StoriesContext)



    return (
        <div>
            <HomeCarousel myData={myData} />
            <Stories myData={myData} />
        </div>

    )
}

export default Home;
