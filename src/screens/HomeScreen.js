import React from 'react';
import './HomeScreen.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';

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
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorroMovies} />


        </div>
    )
}

export default HomeScreen
