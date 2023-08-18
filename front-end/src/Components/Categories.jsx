import React, { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';

import { booksDummy } from '../helpers/categoryDummy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/BooksCategories.css'; // Import your CSS file

const BookCategories = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const slideLeft = () => {
        let slider = document.getElementById('sliderCategories');
        slider.scrollLeft -= 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('sliderCategories');
        slider.scrollLeft += 500;
    };

    return (
        <div className='my-20' data-aos="fade-up" data-aos-offset="200" style={{  borderBottom: "2px solid"}} >
            <div className='categories-container'>
                <p>Categories</p>
                <div className='Explore'>
                    <Link to='/SignUP'>
                        <button type="button" className="btn btn-outline-secondary explore-button">
                            Explore
                        </button>
                    </Link>
                </div>
            </div>

            <div className='slider-container'>
                <div className='slider' id='sliderCategories'>
                    {booksDummy.map((book, id) => (
                        <div className='category-item' key={id}>
                            <img src={book.img} alt="im"/>
                            <p>{book.category}</p>
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

export default BookCategories;
