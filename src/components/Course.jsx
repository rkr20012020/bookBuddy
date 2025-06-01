import React, { useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Course = () => {

  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/book`)
        //console.log(res.data)
        setBook(res.data)
      }
      catch (error) {
        console.log(error)
      }
    };

    getBook();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
        <div className='mt-20 md:mt-28 justify-center text-center px-10'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-blue-500'> Here :)</span></h1>
          <p className='md:text-md text-sm mt-6'> From gripping thrillers to heartwarming romances, thought-provoking non-fiction to fantastical adventures, we offer a wide range of titles to satisfy every reading appetite.
            With easy navigation, detailed book summaries, user reviews, and tailored recommendations, we make discovering your next favorite book effortless. Whether you're a lifelong bibliophile or just starting your reading journey, our platform is designed to inspire curiosity and ignite your love for stories.
            Enjoy exclusive author interviews, curated reading lists, pre-order opportunities, and a seamless online shopping experience. At bookBuddy , we believe that every great day begins with a good book.</p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            book.map((item,i) => (
              <Cards key={i} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
Course