import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from '../Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav />
            
            {/* Banner */}
            <Banner />

            {/* Rows */}
            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            


        </div>
    )
}

export default HomeScreen
