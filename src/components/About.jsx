import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
                    <div className='flex flex-col mt-20 md:mt-10 space-y-4 md:px-10 px-10'>
                        <h1 className='text-3xl md:text-4xl'>About Us</h1>
                        <h1 className='text-blue-500 text-lg md:text-2xl'>Welcome to bookBuddy – Where Every Story Finds Its Path to You</h1>
                        <p>At bookBuddy , we believe the journey to a good book should be as enjoyable as reading one. In a world where everything is moving online, we’ve built a bridge between the digital and physical reading experience. Our mission is simple: help you discover the books you love and guide you to where they’re waiting for you — in real bookstores near you.</p>
                        <p>We are a unique platform for book lovers who value both the convenience of online browsing and the tangible magic of buying books in person. Whether you're looking for the latest bestseller, a local author’s newest release, or a rare gem that’s hard to find, BookTrail offers a seamless experience to search, explore, and buy — all while supporting local bookstores in your area.</p>
                        <h1 className='text-blue-500 text-lg md:text-2xl'>How It Works</h1>
                        <p>BookTrail offers a comprehensive and intuitive online browsing experience. You can search books by title, author, genre, or keyword, explore curated collections, read summaries, and check reviews from fellow readers. But here’s where we stand apart: when you’re ready to make a purchase, instead of simply shipping the book to you, we show you exactly where you can find it nearby.</p>
                        <p>Using real-time store inventories and GPS-based mapping, we direct you to the nearest physical bookstore that has your chosen book in stock. You’ll receive directions, store hours, and contact information, allowing you to either reserve your copy or walk in and buy it on the spot.</p>
                        <p>We like to think of it as book buying with purpose — combining the ease of digital discovery with the joy of supporting local businesses and experiencing books in the way they were meant to be found: on real shelves.</p>
                        <h1 className='text-blue-500 text-lg md:text-2xl'>Why bookBuddy?</h1>
                        <p>In recent years, many independent and local bookstores have struggled to stay afloat. At the same time, readers often feel overwhelmed by massive online marketplaces where human connection and community are lost. We built BookTrail to change that.</p>
                        <p>Support Local: Every book you find through BookTrail supports a real bookstore in your community.</p>
                        <p>Discover Differently: Enjoy modern tools like wishlists, personalized recommendations, and advanced search — without losing the charm of traditional book shopping.</p>
                        <p>Real-Time Availability: Our technology checks stock across partnered stores, ensuring the book you want is actually available before you head out.</p>
                        <p>Map-First Navigation: Our platform doesn’t just list stores — it guides you with turn-by-turn directions to the exact place you can get the book.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
