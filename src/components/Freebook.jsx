import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'
import { useState,useEffect } from 'react'

const Freebook = () => {

    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API}/book`)
                //console.log(res.data)
                setBook(res.data.filter((data) => data.category === 'Offer'))
            }
            catch (error) {
                console.log(error)
            }
        };

        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-lg md:text-xl pb-2 text-blue-500'>Free Books</h1>
                    <p className='text-sm md:text-md'>At BookHaven, we bring readers and stories together in a beautifully curated digital space. Whether you're looking for the latest bestsellers, timeless classics, or hidden indie gems, our platform makes it easy to find your next great read.</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {book.map((item,i) => (
                            <Cards item={item} key={i} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook
