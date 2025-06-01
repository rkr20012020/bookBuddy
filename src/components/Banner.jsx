const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 md:space-x-20'>
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-36'>
                    <div className="space-y-8">
                        <div className="flex flex-col space-y-6">
                            <h1 className='text-2xl md:text-4xl font-bold text-wrap'>Welcome to book<span className='text-blue-500'>Buddy</span>!! </h1>
                            <h1 className='text-lg md:text-2xl text-blue-500'> Your Gateway to the World of Stories.Discover, explore, and fall in love with books.</h1>
                        </div>
                        <p className='text-md md:text-xl text-gray-700 dark:text-white'>Browse through thousands of titles across genres, read honest reviews, connect with fellow book lovers, and keep track of your reading journey. With a user-friendly interface and personalized recommendations, BookHaven is more than a bookstore — it's a vibrant community for readers, by readers.Start your next chapter with us</p>
                    </div>
                </div>
                <div className='order-1 w-full md:w-1/2 mt-12 md:mt-22'>
                    <img src='/bookBuddy1.png' className='w-92 h-92' alt="Logo" />
                </div>
            </div>
        </>
    )
}

export default Banner
