import React, { use, useState } from 'react';

const ProfileCard = ({ user }) => {
    const [count, setCount] = useState(0);
    const isIndia = user.country.toLowerCase() === "india";
    const cardStyles = isIndia
        ? 'bg-green-50 border-green-600'
        : 'bg-red-50 border-red-900';
    return (

        <div className={`flex flex-col p-6 rounded-2xl border-2 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] ${cardStyles}`}>
            {/* Image details */}
            <img
                src={user.image}
                alt={user.firstName}
                className='w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-sm ' />


            {/* user details */}
            <div className='text-center space-y-1 pt-2'>
                <h2 className='text-xl font-bold text--gray-800 '>{user.firstName} {user.lastName}</h2>
                <p className='text-xl font-bold text-black-200'>Age: {user.age} • {user.country}</p>
                <p className='text-xl font-light text-gray-500'>Address: {user.address}</p>
            </div>

            <hr className='my-4 opacity-50' />

            <div className='flex flex-col items-center'>
                <span className='text-xs font-semibold uppercase tracking-wider text-gray-900'> Card Counter</span>
                <div className='text-3xl font-black text-gray-700 my-2 '>{count}</div>
                <div className='flex gap-3 items-center'>
                    <button onClick={() => setCount(count - 1)} className='px-4 py-1 bg-white border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-bold'> - </button>
                    <button onClick={() => setCount(count + 1)} className='px-4 py-1 bg-blue-300 border-gray-300 rounded-lg hover:bg-blue-500 transition-colors font-bold'> + </button>
                    <button onClick={() => setCount(0)} className='px-4 py-1 bg-amber-50 border-gray-50 rounded-lg hover:bg-gray-400 transition-colors font-bold'>Reset</button>
                </div>



            </div>



        </div>

    );
};

export default ProfileCard;
