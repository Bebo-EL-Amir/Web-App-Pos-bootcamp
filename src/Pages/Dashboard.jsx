import React from 'react';
import PieChartWithCustomizedLabel from '../components/componentItemDerails/Recharts';
import LineChartComponent from '../components/componentItemDerails/LineChart';
import { CiSquareChevDown } from "react-icons/ci";
import { LuUserRoundPlus } from "react-icons/lu";
import BouttonDropdowns from '../components/componentItemDerails/BouttonDropdowns';
import BestEmployess from '../components/componentItemDerails/BestEmployess';

export default function Dashboard() {
  return (
    <div className='w-full h-full overflow-y-auto bg-gray-50 p-6'>
      <header className="mb-8">
        <h1 className='text-3xl font-extrabold text-gray-800 tracking-tight'>Dashboard</h1>
        <p className="text-gray-500 mt-2">Overview of your store's performance.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart Section */}
        <LineChartComponent />

        {/* Pie Chart Section */}
        <div className="bg-white w-full p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4">
               <h2 className="text-xl font-bold text-gray-800">Category Distribution</h2>
            </div>
            <div className="w-full flex justify-center">
               <PieChartWithCustomizedLabel />
            </div>
        </div>
        <div className="lg:flex lg:flex-col grid grid-cols-1 gap-[3rem] items-center">

            <div className="lg:w-[400px] lg:h-[120px] w-full h-[120px]  border border-gray-100 rounded-2xl shadow-sm  bg-white flex ">
          <div className="p-2 "> <CiSquareChevDown className="text-[22px] text-white bg-red-600  rounded-[5px]"/>
          </div> 
          <div className="pt-1 ">
          <h2 className='text-[18px] font-bold'>Total Orders</h2>
          <p className='text-red-600 text-[16px]'>-2.33%</p>

          <h1 className='text-[25px] pl-[30px] pt-[5px] text-black font-bold '>21,375</h1>
          <div className="grid grid-cols-2 pl-5">

          <p className="border-b-[2px]  border-red-400 "></p>
          <p className="border-b-[2px]  pl-[30px] border-gray-200"></p>
          </div>
          </div>
            </div>

               <div className="lg:w-[400px] lg:h-[120px] w-full h-[120px] border border-gray-100 rounded-2xl shadow-sm  bg-white flex ">
          <div className="p-2 "> <LuUserRoundPlus className="text-[22px] text-white bg-yellow  rounded-[5px]"/>
          </div> 
          <div className="pt-1 ">
          <h2 className='text-[18px] font-bold'>New Coustmers</h2>
          <p className='text-green-600 text-[16px]'>+32.40%</p>

          <h1 className='text-[25px] pl-[30px] pt-[5px] text-black font-bold '>256</h1>
          <div className="grid grid-cols-2 pl-5">

          <p className="border-b-[2px]  border-yellow "></p>
          <p className="border-b-[2px]  pl-[30px] border-gray-200"></p>
          </div>
          </div>
            </div>
        </div>
        <div className=" grid lg:grid-cols-2 lg:gap-[623px] ">


              <div className="lg:w-[600px] w-full   p-3 border border-gray-100 rounded-2xl shadow-sm  bg-white flex flex-col">
                <div className="flex justify-between w-full">

                   <h1 className="text-[18px] font-bold">Trending Dishes</h1>
                   <BouttonDropdowns/>
                </div>

                <div className="flex justify-between p-2">
                  <h2 className="text-[16px] text-gray-500 font-semibold">Dishes</h2>
                  <h2 className="text-[16px] text-gray-500 font-semibold">Orders</h2>
                </div>

                <div className="flex flex-col gap-[1rem]">

                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[45px] h-[45px] bg-yellow rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://png.pngtree.com/png-vector/20240829/ourmid/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png" 
                        alt="burger" 
                        className='w-[35px] object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] w-[50px] bg-yellow rounded-2xl pl-[11px] font-medium text-black mt-1">Food</span>
                      <h3 className="text-[15px] font-semibold text-gray-800 leading-none pt-2">Cheese Burger</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">519</h1>
                </div>


                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[45px] h-[45px] bg-indigo-100 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://m.media-amazon.com/images/I/61TEazg2PxL._AC_UF894,1000_QL80_.jpg" 
                        alt="burger" 
                        className='w-[13px] object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] w-[50px] bg-indigo-100 rounded-2xl pl-[11px] font-medium text-black mt-1">Drink</span>
                      <h3 className="text-[15px] font-semibold text-gray-800 leading-none pt-2">V7 Cola</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">480</h1>
                </div>


                    
                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[45px] h-[45px] bg-yellow rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Ff887f2ac7f1212f18ade68c61ca6075c.png&w=256&q=75" 
                        alt="burger" 
                        className='w-[35px] object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] w-[50px] bg-yellow rounded-2xl pl-[11px] font-medium text-black mt-1">Food</span>
                      <h3 className="text-[15px] font-semibold text-gray-800 leading-none pt-2">Meat Burger</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">450</h1>
                </div>


                    
                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[45px] h-[45px] bg-indigo-100 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://m.media-amazon.com/images/I/61TEazg2PxL._AC_UF894,1000_QL80_.jpg" 
                        alt="burger" 
                        className='w-[13px] object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] w-[50px] bg-indigo-100 rounded-2xl pl-[11px] font-medium text-black mt-1">Drink</span>
                      <h3 className="text-[15px] font-semibold text-gray-800 leading-none pt-2">V7 Lemon</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">320</h1>
                </div>

        
                     </div>
                </div>



                
             <div className="lg:w-[600px] w-full  p-3 border border-gray-100 rounded-2xl shadow-sm  bg-white flex flex-col">
                <div className="flex justify-between w-full">

                   <h1 className="text-[18px] font-bold">Best Employess</h1>
                   <BestEmployess/>
                </div>

                <div className="flex justify-between p-2">
                  <h2 className="text-[16px] text-gray-500 font-semibold">Employee</h2>
                  <h2 className="text-[16px] text-gray-500 font-semibold">Earnings</h2>
                </div>

                <div className="flex flex-col gap-[1rem]">

                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] bg-indigo-100 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://e7.pngegg.com/pngimages/34/116/png-clipart-book-restylane-facial-1malaysia-people-s-housing-programme-face-steinway-street.png" 
                        
                        className='w-[50px] h-[50px] rounded-full object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[16px]   rounded-2xl pl-[1px] font-semibold text-black mt-1">Theresa Webb</span>
                      <h3 className="text-[14px] font-medium text-gray-800 leading-none pt-2">Waiter</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">$23,700</h1>
                </div>


                
                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] bg-indigo-100 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://toppng.com/uploads/preview/dt-akaadian-2016-summer-matthew-higginbotham-11569032449cqulvds1jq.png" 
                        
                        className='w-[50px] h-[50px] rounded-full object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[16px]   rounded-2xl pl-[1px] font-semibold text-black mt-1">Tom Handerson</span>
                      <h3 className="text-[14px] font-medium text-gray-800 leading-none pt-2">Manager</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">$21,389</h1>
                </div>


                
                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] g-indigo-100 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDu-ZjT5hFOY4gowHWo2aeQjM3pzrHPGvYw&s" 
                        
                        className='w-[50px] h-[50px] rounded-full object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[16px]   rounded-2xl pl-[1px] font-semibold text-black mt-1">Alice Flores</span>
                      <h3 className="text-[14px] font-medium text-gray-800 leading-none pt-2">CEO</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">$16,622</h1>
                </div>


                
                <div className="flex items-center justify-between mt-3 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] g-indigo-100 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XZxCqw28vhygj0UEZtAZcIQA143iKXiD2Q&s" 
                        
                        className='w-[50px] h-[50px] rounded-full object-contain' 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[16px]   rounded-2xl pl-[1px] font-semibold text-black mt-1">Theresa Webb</span>
                      <h3 className="text-[14px] font-medium text-gray-800 leading-none pt-2">Courier</h3>
                    </div>
                  </div>
                  <h1 className="text-[16px] font-bold text-gray-800">$14,121</h1>
                </div>


                
        
                     </div>
                </div>



        </div>


      </div>
    </div>
  )
}
