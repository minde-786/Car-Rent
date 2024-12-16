// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { Fuel, Heart } from 'lucide-react';
// import { Users } from 'lucide-react';
// function Card() {
//   return (
//     <div className=' '>
//       <h1 className=' grid grid-cols-4 py-4 gap-3 px-3 bg-white rounded-sm'>
//         <p > 
//           <p className='flex justify-between '> <p className='font-bold'>Koenigsegg</p><Image
//         src="/heart.png"
//         alt="like icon" width={24} height={24} /> 
//         </p>
//         <p className='text-xs text-slate-400'>sport</p>
//         <Image   src="/aa.png"
//         alt="car image" width={240} height={240} className='py-7'/>
        
//        <p className='text-slate-400 flex justify-around'> <Fuel/> 90L
        
//         <Image   src="/car.png"
//         alt="image" width={76} height={24} /> 
//         <Users/> 2 people </p>
//         <p className='font-bold text-2xl py-4 flex justify-between'>$99.00/ <li className='text-xs text-slate-400 py-3'> days</li> 
        
//        <Link href='/'> <button className='bg-blue-600 text-white py-1 px-2 font-medium text-lg rounded-md'> Rent Now</button></Link>
        
//         </p>
        
//         </p>




//         <p > 
//           <p className='flex justify-between'>  
//         <p className='font-bold'>NissanGT-R</p> <Heart className='text-slate-400'/></p>
//         <p className='text-xs text-slate-400'>sport</p>
//         <Image   src="/1.png"
//         alt="car image" width={240} height={240} className='py-7'/>
        
//        <p className='text-slate-400 flex justify-around'> <Fuel/> 80L
        
//         <Image   src="/car.png"
//         alt="image" width={76} height={24} /> 
//         <Users/> 2 people </p>
//         <p className='font-bold text-2xl py-4 flex justify-between'>$80.00/ <p className='text-xs text-slate-400 py-3'> days</p> 
        
//        <Link href='/'> <button className='bg-blue-600 text-white py-1 px-2 font-medium text-lg rounded-md'> Rent Now</button></Link>
        
//         </p>
        
//         </p>










//         <p > 
//           <p className='flex justify-between'>  
//         <p className='font-bold'>Rolls-Royce</p> <Image
//         src="/heart.png"
//         alt="like icon" width={24} height={24} /> </p>
//         <p className='text-xs text-slate-400'>sport</p>
//         <Image   src="/2.png"
//         alt="car image" width={240} height={240} className='py-7'/>
        
//        <p className='text-slate-400 flex justify-around'> <Fuel/> 70L
        
//         <Image   src="/car.png"
//         alt="image" width={76} height={24} /> 
//         <Users/> 4 people </p>
//         <p className='font-bold text-2xl py-4 flex justify-between'>$96.00/ <p className='text-xs text-slate-400 py-3'> days</p> 
        
//        <Link href='/'> <button className='bg-blue-600 text-white py-1 px-2 font-medium text-lg rounded-md'> Rent Now</button></Link>
        
//         </p>
        
//         </p>




//         <p > 
//           <p className='flex justify-between'>  
//         <p className='font-bold'>NissanGT-R</p> <Heart className='text-slate-400'/></p>
//         <p className='text-xs text-slate-400'>sport</p>
//         <Image   src="/1.png"
//         alt="car image" width={240} height={240} className='py-7'/>
        
//        <p className='text-slate-400 flex justify-around'> <Fuel/> 80L
        
//         <Image   src="/car.png"
//         alt="image" width={76} height={24} /> 
//         <Users/> 2 people </p>
//         <p className='font-bold text-2xl py-4 flex justify-between'>$80.00/ <p className='text-xs text-slate-400 py-3'> days</p> 
        
//        <Link href='/'> <button className='bg-blue-600 text-white py-1 px-2 font-medium text-lg rounded-md'> Rent Now</button></Link>
        
//         </p>
        
//         </p>










        
//       </h1>
//     </div>
//   )
// }

// export default Card




import React from 'react';
import { Car } from "./../../type/index"

import Image from 'next/image';
import Link from 'next/link';
interface CarCardProps {
  car: Car;
}

const CarCard : React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="  border rounded-lg shadow-md hover:shadow-lg transition p-4 bg-white">

       {/* Car Info */}
       <h2 className="text-lg font-semibold text-gray-800 mb-1 flex justify-between">{car.name} <p> <Image src='/heart.png' alt='Like' width={24} height={24}/></p></h2>
      <p className="text-sm text-gray-500 mb-2">{car.type}</p>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={car.image}
          alt={car.name}
          className="object-contain h-32"
        />
      </div>

     
      <div className="flex items-center space-x-4 text-gray-600 mb-4 text-sm">
        <div className="flex items-center space-x-1">
          <span>⛽</span>
          <span>{car.fuel}L</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>⚙️</span>
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>👥</span>
          <span>{car.capacity} People</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-blue-600">
          ${car.price} <span className="text-gray-400 text-sm">/ day</span>
        </div>
       <Link href='/Rentalinfo'> <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Rent Now
        </button></Link>
      </div>
    </div>
  );
};

export default CarCard;
