import React, { use, useState } from 'react';

const ProfileCard = ({ user }) => {
    const [count, setCount] = useState(0);
    const isIndia = user.country.toLowerCase() === "india";
    const cardStyles = isIndia
        ? 'bg-green-500 border-green-600'
        : 'bg-red-500 border-red-900';
    return (
        <div className={`flex flex-col p-6 rounded-2xl border-2 shadow-sm transition-all hover:shadow-md ${cardStyles}`}>

            {/* Profile Image */}
            <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-sm"
            />

            {/* User Details */}
            <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-black-800">{user.firstName} {user.lastName}</h2>
                <p className="text-sm font-medium text-black-600">Age: {user.age} • {user.country}</p>
                <p className="text-xs text-black-800 italic">{user.address}</p>
            </div>

            <hr className="my-4 opacity-50" />

            {/* Counter Section */}
            <div className="flex flex-col items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-800">Card Counter</span>
                <div className="text-3xl font-black text-gray-700 my-2">{count}</div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setCount(count - 1)}
                        className="px-4 py-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-bold"
                    >
                        -
                    </button>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-sm"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
