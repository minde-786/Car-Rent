import { HelpCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Graph() {
   const transactions = [
      {
        id: 1,
        car: "Nissan GT – R",
        type: "Sport Car",
        date: "20 July",
        price: "$80.00",
        image: "/1.png", // Replace with your image path
      },
      {
        id: 2,
        car: "Koenigsegg",
        type: "Sport Car",
        date: "19 July",
        price: "$99.00",
        image: "/aa.png", // Replace with your image path
      },
      {
        id: 3,
        car: "Rolls – Royce",
        type: "Sport Car",
        date: "18 July",
        price: "$96.00",
        image: "/2.png", // Replace with your image path
      },
      {
        id: 4,
        car: "CR – V",
        type: "SUV",
        date: "17 July",
        price: "$80.00",
        image: "/9.png", // Replace with your image path
      },
    ];
  
  return (
    <div className=" flex  bg-gray-100">
        <span><hr></hr></span>
      <aside className='bg-white  border border-slate-100'>
<h1 className='text-slate-400 text-sm py-4 px-6'>MAIN MENU</h1>
<ul>
    <li>
<button className='bg-blue-500 rounded-md py-2 px-6 mx-6'> 🏠  Dashboard </button>
</li>
<li className='text-slate-500 text-sm  py-4 px-6'>
   <Link href="/Carlist"> 🚘 Car Rent</Link></li>
   <li className='text-slate-500 text-sm py-4 px-6'>
   <Link href="/graph">  📶 insight</Link></li>
   <li className='text-slate-500 text-sm py-4 px-6'>
   <Link href="/graph"> 💸 Reimburse</Link></li>
    

   <li className='text-slate-500 text-sm py-4 px-6'>
   <Link href="/graph"> 📩  Inbox</Link></li>
   <li className='text-slate-500 text-sm py-4 px-6'>
   <Link href="">📅 Calender</Link>
            </li>
      </ul>

      <h1 className='text-slate-400 text-sm py-4 px-6'>PREFERENCES</h1>
<ul>
<li className='text-slate-500 text-sm py-4 px-6'>
   <Link href="/graph">⚙️ setting</Link>
            </li>
            <li className='text-slate-500 text-sm py-4 px-6 flex gap-1'>
   <HelpCircle/> <Link href=""> <span> Help & Center</span> </Link>
            </li>
            <li className='text-slate-500 text-sm py-4 px-6'>
   <Link href="">Dark Mode</Link>
            </li>
<Link href=""><li className='text-slate-500 text-sm py-4 px-6'>Logout</li></Link>
</ul>
</aside>
<div className='bg-white w-[500px] mx-6 mt-4 rounded mb-12  border border-slate-200 h-50  shadow-md'>
<div className='px-4 py-4 mt-3'>Details Rental</div>
<div className="h-48 bg-blue-100 rounded-md mb-4 flex justify-center items-center">
            <p className="text-sm text-gray-600"> 
               <Link
        href="https://www.google.com/maps/place/Karakoram+Rent+a+Car+Services/@29.7214381,60.7031733,5z/data=!4m10!1m2!2m1!1srental+car!3m6!1s0x38e4638cf908db21:0x3ccb8987ddf4432e!8m2!3d35.2892539!4d75.623296!15sCgpyZW50YWwgY2FykgERY2FyX3JlbnRhbF9hZ2VuY3ngAQA!16s%2Fg%2F11g6mj1fgc?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" // Replace this with your Instagram profile link
        target="_blank"
        rel="noopener noreferrer"> <Image 
        src='/Maps.png'
        alt='map review' width={486} height={20} className='py-4 border border-gray-100 mt-16 mb-10 h-72'></Image> </Link></p>
          </div>


<div className='px-2 flex mt-14'> 
  <Image
  src="/Look.png"
 alt='car image' width={132} height={72} />
 <div className='flex justify-between'><h1><p className='text-2xl font-semibold px-2'>Nissan GT - R</p>
 <p className='px-2 text-slate-600'>Sport car</p>
               </h1>
               <h2 className='pl-28 text-slate-600'>#9761</h2>
         </div>
    </div>
    <div>
      <div className='py-3 px-2 font-bold'>Pick - Up</div>
      <div className='lg:grid grid-cols-3'>
      <h1><p className='px-2 font-bold'>Location</p>
      <select className='text-slate-500  border-slate-100' >
         <option>Kota Semarang</option>
         <option></option>
         <option></option>
         </select>
         </h1>

         <h1><p  className='px-2 font-bold'>Date</p>
      <select className='text-slate-500  border-slate-100'>
         <option>20 july 2023</option>
         <option></option>
         <option></option>
         </select>
         </h1>


         <h1><p  className='px-2 font-bold'>Time</p>
      <select className='text-slate-500 border border-slate-100' >
         <option>07:00 pm</option>
         <option></option>
         <option></option>
         </select>
         </h1>
         </div>
</div>


<div className='py-4 px-2 font-bold '>Drop - Off</div>
      <div className='lg:grid grid-cols-3'>
      <h1><p className='px-2 font-bold'>Location</p>
      <select className='text-slate-500  border-slate-100' >
         <option>Kota Semarang</option>
         <option></option>
         <option></option>
         </select>
         </h1>

         <h1><p  className='px-2 font-bold'>Date</p>
      <select className='text-slate-500  border-slate-100'>
         <option>21 July 2022</option>
         <option></option>
         <option></option>
         </select>
         </h1>


         <h1><p  className='px-2 font-bold'>Time</p>
      <select className='text-slate-500 border border-slate-100' >
         <option>10:00 pm</option>
         <option></option>
         <option></option>
         </select>
         </h1>
         </div>

<div className='flex  justify-between py-4 mt-4 px-2'>
    <div>
       
       <h1 className='font-bold px-2'>Total Rent Price</h1><p className='text-xs text-slate-400'>Overall price and includes rental discount</p>
          
        </div>
        <p className='font-bold text-lg'>$80.00</p>
    </div>
</div>

<div>
<div  className='bg-white w-[500px] mx-6 mt-4 rounded mb-4 h-64'>

<Image
  src="/kk.png"
 alt='car image' width={524} height={324} />


</div>
<div  className='bg-white w-[500px] mx-6 mt-5 rounded  h-50  '>

<div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded shadow-md w-full max-w-2xl   ">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Recent Transactions</h2>
          <Link href="#" className="text-blue-500 text-sm hover:underline">
            View All
          </Link>
        </div>
        <div>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 border-b last:border-none"
            >
              <div className="flex items-center">
                <img
                  src={transaction.image}
                  alt={transaction.car}
                  className="h-16 w-24 rounded-md object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-md font-semibold text-gray-800">
                    {transaction.car}
                  </h3>
                  <p className="text-sm text-gray-500">{transaction.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{transaction.date}</p>
                <p className="text-md font-semibold text-gray-800">
                  {transaction.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


          </div>
     </div> 
  </div>
  )
}

export default Graph



// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-4">
//           <h1 className="text-xl font-bold text-blue-500">Main Menu</h1>
//         </div>
//         <nav className="mt-4">
//           <ul>
//             <li className="py-2 px-4 hover:bg-gray-200">
//               <a href="#" className="flex items-center text-blue-500 font-medium">
//                 <span className="mr-2">🏠</span>
//                 Dashboard
//               </a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-200">
//               <a href="#" className="flex items-center text-gray-600">
//                 <span className="mr-2">🚗</span>
//                 Car Rent
//               </a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-200">
//               <a href="#" className="flex items-center text-gray-600">
//                 <span className="mr-2">📊</span>
//                 Insight
//               </a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-200">
//               <a href="#" className="flex items-center text-gray-600">
//                 <span className="mr-2">💸</span>
//                 Reimburse
//               </a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-200">
//               <a href="#" className="flex items-center text-gray-600">
//                 <span className="mr-2">📥</span>
//                 Inbox
//               </a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-200">
//               <a href="#" className="flex items-center text-gray-600">
//                 <span className="mr-2">📅</span>
//                 Calendar
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details Rental</h2>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           {/* Map Section */}
//           <div className="h-48 bg-gray-100 rounded-lg mb-6 relative">
//             {/* Simulated map */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p className="text-gray-400">Map Preview</p>
//             </div>
//             <div className="absolute top-4 left-4 w-6 h-6 bg-blue-500 rounded-full"></div>
//             <div className="absolute top-4 left-12 w-32 h-1 bg-blue-500"></div>
//           </div>

//           {/* Car Details */}
//           <div className="flex items-center">
//             <img
//               src="/nissan-gt-r.jpg" // Replace with actual image path
//               alt="Nissan GT-R"
//               className="w-24 h-16 rounded-lg object-cover mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800">Nissan GT-R</h3>
//               <p className="text-sm text-gray-500">Sport Car</p>
//               <p className="text-sm text-gray-400">#9761</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;









