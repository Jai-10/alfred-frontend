import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <>
            {/* landing page */}
            <div className='home-container'>
                <p>Alfred</p>
                <p>- The only home service provider you'll ever need</p>

                <div className="home-bg"></div>
                <div className="home-scroll-down">
                    <div className="home-scroll-down-btn"></div>
                </div>
                <div className="home-scroll-arrow">
                    <i className='fa-solid fa-arrow-down'></i>
                </div>
            </div>


            {/* reviews section */}
            <Reviews />
        </>
    )
}

export default Home;