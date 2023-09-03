import React, { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import { booksDummy } from '../Helpers/BooksDummy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/PopularBooks.css'; // Import your CSS file

const PopulerBooks = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const slideLeft = () => {
        let slider = document.getElementById('sliderPopularBooks');
        slider.scrollLeft -= 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('sliderPopularBooks');
        slider.scrollLeft += 500;
    };

    return (
        <div className='my-20' data-aos="fade-up" data-aos-offset="200" style={{  borderBottom: "2px solid"}}>
            <div className='popular-books-container'>
                <p>Popular Books</p>

                <div className='explore'>
                    <Link to='/SignUP'>
                        <button type="button" className="btn btn-outline-secondary explore-button">
                            Explore 
                        </button>
                    </Link>
                </div>
            </div>


            <div className='Slider-container'>
                <div className='slider' id='sliderPopularBooks'>
                    {booksDummy.map((book, id) => (
                        <div className='book-item' key={id}>
                            <img src={book.img} alt="Popular Book" />
                        </div>
                    ))}
                </div>
                <div className='arrow-buttons'>
                    <div className='arrow-button' onClick={slideLeft}>
                        <KeyboardArrowLeftIcon fontSize="large" />
                    </div>
                    <div className='arrow-button' onClick={slideRight}>
                        <KeyboardArrowRightIcon fontSize="large" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulerBooks;
