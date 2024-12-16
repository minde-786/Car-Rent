import React from 'react'
import Image from 'next/image'
import CarCard from '@/component/card';
import { Car } from "../../type/index";
import Link from 'next/link';


function page() {



  const cars: Car[] = [
    {
      id: 1,
      name: 'Koenigsegg',
      
      type: 'Sport',
      image: '/aa.png',
      fuel: 90,
      transmission: 'Manual',
      capacity: 2,
      price: 99,
    },
    {
      id: 2,
      name: 'Nissan GT - R',
      
      type: 'Sport',
      image: '/1.png',
      fuel: 80,
      transmission: 'Manual',
      capacity: 4,
      price: 80,
    },
    {
      id: 3,
      name: 'Rolls-Royce',
    
      type: 'Sport',
      image: '/2.png',
      fuel: 70,
      transmission: 'Manual',
      capacity: 6,
      price: 96,
    },
    {
      id: 4,
      name: 'Nissan GT - R',
      
      type: 'Sport',
      image: '/1.png',
      fuel: 80,
      transmission: 'Manual',
      capacity: 4,
      price: 80,
    },
    {
      id: 5,
      name: 'AllNewRush',
      
      type: 'SUV',
      image: '/5.png',
      fuel: 70,
      transmission: 'Manual',
      capacity: 6,
      price: 72.00,
    },
    {
      id: 6,
      name: 'CR-V',
      
      type: 'SUV',
      image: '/9.png',
      fuel: 80,
      transmission: 'Manual',
      capacity: 6,
      price: 80.00,
    },
    {
      id: 7,
      name: 'All New Terios',
      
      type: 'SUV',
      image: '/8.png',
      fuel: 90,
      transmission: 'Manual',
      capacity: 6,
      price: 74,
    },
    {
      id: 8,
      name: 'CR-V',
      
      type: 'SUV',
      image: '/9.png',
      fuel: 80,
      transmission: 'Manual',
      capacity: 6,
      price: 80.00,
    },
    {
      id: 9,
      name: 'MG ZX Exclusice',
      
      type: 'Hatchback',
      image: '/7.png',
      fuel: 80,
      transmission: 'Electric',
      capacity: 4,
      price: 76,
    },
    {
      id: 10,
      name: 'New MGZS',
    
      type: 'Hatchback',
      image: '/6.png',
      fuel: 90,
      transmission: 'Electric',
      capacity: 6,
      price: 80,
    },
    {
      id: 11,
      name: 'MG ZX Excite',
      
      type: 'Hatchback',
      image: '/7.png',
      fuel: 90,
      transmission: 'Electric',
      capacity: 4,
      price: 74,
    },
    {id: 12,
    name: 'New MGZS',
    
    type: 'Hatchback',
    image: '/6.png',
    fuel: 90,
    transmission: 'Electric',
    capacity: 6,
    price: 80,
  },

  ];




  return (
    <div className='  bg-slate-100 h- '>
      <div className=' lg:grid grid-cols-2  gap-7 py-4 mr-6 mx-4 '>
      <h1 className='bg-blue-400 lg:w-[580px] lg:h-[320px] py-[32px] px-[64] rounded-md mx-5 '>
        <p className='text-2xl text-white px-4 text-pretty'>The Best Platform <br></br>for Car Rental</p>
        <p className='text-xs text-white py-3 px-4'>Ease of doing a car rental safely and<br></br> reliably. Of course at a low price.</p>
        <Link href='/Rentalinfo'><button className='bg-blue-700 px-4 py-2 mt-3 mx-4 rounded '>Rent Now</button></Link>
        <Image
        src='/aa.png'
        alt='web image' width={606} height={316}
        className='px-36 py-4'
        /></h1>
      <h2 className='bg-blue-600 rounded-md mx-5 lg:w-[580px] lg:h-[320px] py-[32px] my-6 lg:my-0 '>
       <p className='text-2xl text-white px-4 text-pretty'>Easy way to rent a<br></br> car at a low price</p>
       <p className='text-xs text-white py-3 px-4'>Providing cheap car rental services <br></br>and safe and comfortable facilities.</p>
      
       <Link href='//Rentalinfo'><button className='bg-blue-400 px-6 py-2 mt-3 mx-4 rounded '>Rent Now</button></Link>
       <Image
        src='/image 8.png'
        alt='web image' width={606} height={316}
        className='px-36 py-2'
        /></h2></div>
<p className='lg:flex'><Image
 src='/h.png'
 alt='web image' width={606} height={136}
/>
<Image 
src='/99.png'
alt='arrow'  width={80} height={40} 
className=''/>
<Image
 src='/a.png'
 alt='web image' width={606} height={136}
/></p>
<h1 className='flex justify-between py-2'>
  <p className='text-xs px-3 text-slate-500'>Popular Car</p>
  <p className='text-blue-600 text-xs px-4'>view all</p>
</h1>
    <div className="min-h-screen bg-gray-100 p-6">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        
      </h1> */}

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  
<h1 className='text-center '>
  <Link href='/Carlist'><button className='bg-blue-600 px-2 py-2 rounded'> Show more cars</button> <span className='flex justify-end text-slate-500 text-sm '>120 cars</span></Link></h1>
</div>

)

} 
export default page







