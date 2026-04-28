import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ProfileCard from "./ProfileCard.jsx";

const App = () => {
  const users = [
    {
      id: 1,
      firstName: "Kim Taehyung",
      lastName: "LOKESH",
      age: 31,
      country: "korean",
      address: "18th cross,korean street,Seoul",
      image: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      id: 2,
      firstName: "Prajwal",
      lastName: "Kumar",
      age: 20,
      country: "USA",
      address: "123 streat mark,Boston",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 3,
      firstName: "Bhoomika",
      lastName: "Shashikumar",
      age: 19,
      country: "Korea",
      address: "125 north  korea,Busan",
      image: "https://png.pngtree.com/background/20250607/original/pngtree-portrait-of-a-beautiful-korean-girl-in-photorealism-style-picture-image_16634895.jpg"
    }
  ];
  return (

    <div className='min-h-screen bg-gray-500 p-10'>
      <h1 className='text-4xl font-bold text-gray-50 text-center  '>Team Directory</h1>
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl max-h-6xl mx-auto p-5'>

        {/* Common pattern in react for render a list of components dynamically */}

        {users.map((person) => (
          <ProfileCard key={person.id} user={person} />
        ))}

      </div>
    </div>
  );


};



export default App;
