import React from 'react';
import chef from '../../assets/banner.jpg'

const Banner = () => {
        return (
                <div className=' h-96 grid grid-cols-2 pl-20 justify-center mt-16 items-center gap-6 bg-orange-700 bg-opacity-50'>
            <div className='h-full pt-6 text-white'>
                <h2 className='text-4xl capitalize text-opacity-50 font-bold text-center pb-4 '>
                    Wellcome to My Food village restaurants
                </h2>
                <p className='text-center text-xl px-6'>
                A restaurant is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings. 
                </p>
            </div>
            <div className=' border bg-white w-full h-full rounded-bl-2xl'>

                <img className=' mx-auto opacity-80 h-[350px] w-[450px]'  src={chef} alt="" />
                
            </div>
        </div>
        
    );
};

export default Banner;