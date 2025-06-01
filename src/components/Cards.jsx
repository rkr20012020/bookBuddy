import React from 'react'

const Cards = ({item}) => {
    //console.log(item)
    return (
        <>
            <div className='mt-4 p-3'>
            <div className="card bg-base-100 w-92 hover:shadow-2xl duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                        src={item.image}
                        alt="Image" 
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className={`badge badge-primary ${item.category == 'Offer' ? `block` : `hidden`}`}>{item.category == 'Offer' ? item.category : ``}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="flex justify-between">
                        <div className="text-red-500">₹{item.price}</div>
                        <a href={item.location} target='_blank' className="hover:bg-base-200 hover:text-gray-600  duration-200 cursor-pointer px-2 py-1 rounded-full  border-[2px]">Buy Now</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cards
