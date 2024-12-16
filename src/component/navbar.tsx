import React from 'react'
import { Search } from 'lucide-react';
 import { TextSearch } from 'lucide-react';
 import { Heart } from 'lucide-react';
 import { Settings } from 'lucide-react';
 import { Bell } from 'lucide-react';
import Image from 'next/image';

function Navbar() {
  return (
    <div className='grid grid-cols-3 '>
     <h1 className=' text-2xl text-blue-600 mx-7 font-semibold py-4  '> MORENT</h1>
     <h1 className='border border-slate-200 w-64 rounded-2xl mt-4 mb-5 px-3 py-2 flex gap-3 '>
     <Search />
     <input
     type='text'
     
     placeholder='Search something here'

     /> <TextSearch/></h1>
     <h2 className='grid grid-cols-4 py-4 mx-5 ml-2'><Heart 
     className='border border-gray-100 rounded-full py-1 px-1 mt-2'/> <Bell className='border border-gray-100 mt-2 rounded-full py-1 px-1 '/> <Settings className='border border-gray-100  mt-2 rounded-full py-1 px-1 '/>
     <Image
     src='/mm.png'
     alt='profile' width={40} height={40}
     className='mb-1'
     />
     </h2>
    </div>
  )
}

export default Navbar
