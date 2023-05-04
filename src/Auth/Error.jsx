import React from 'react';

const Error = ({error, message}) => {
    console.log( message)
    return (
        <div className='bg-gray-400 h-[110vh] flex justify-center items-center'>
            <div className='w-1/4 bordor '>
                <img className='w-96 rounded' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-21190.jpg?size=626&ext=jpg&ga=GA1.2.2077699082.1681132836&semt=sph" alt="" />

                <h1 className='text-3xl text-red-600 font-bold '>{error}</h1>
                <h1 className='text-3xl text-red-600 font-bold '>{message}</h1>


            </div>
        </div>
    );
};

export default Error;