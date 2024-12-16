import React from 'react'
import Image from 'next/image'
import { Car } from "../../../type/index"
import CarCard from '@/component/card';
function Carlist() {

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
    
         <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}


      <aside className="w-1/5 bg-white p-2 lg:p-5 shadow-md">
        {/* Type */}
        <h3 className="text-lg font-semibold mb-3">Type</h3>
        <ul className="space-y-2">
          <li>
            <input type="checkbox" className="mr-2" defaultChecked /> Sport (10)
          </li>
          <li>
            <input type="checkbox" className="mr-2" /> SUV (12)
          </li>
          <li>
            <input type="checkbox" className="mr-2" /> MPV (16)
          </li>
        </ul>

        {/* Capacity */}
        <h3 className="text-lg font-semibold mt-5 mb-3">Capacity</h3>
        <ul className="space-y-2">
          <li>
            <input type="radio" name="capacity" className="mr-2" /> 2 Person
          </li>
          <li>
            <input type="radio" name="capacity" className="mr-2" /> 4 Person
          </li>
          <li>
            <input type="radio" name="capacity" className="mr-2" /> 8 or More
          </li>
        </ul>

        {/* Price */}
        <h3 className="text-lg font-semibold mt-5 mb-3">Price</h3>
        <label className="block text-sm text-gray-600 mb-2">
          Max: $100.00
        </label>
        <input type="range" className="w-full" />
      </aside>




      <div>
<p className='flex p-5'><Image
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


    
      
      <div className="min-h-screen bg-gray-100 p-6">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        
      </h1> */}

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>  </div>
    </div>
  )
}

export default Carlist
