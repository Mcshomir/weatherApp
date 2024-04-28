import React from 'react';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const ContainerBox = () => {
    return (
        <div className="bg-slate-500 h-screen relative">
            <div className='w-[900px] h-[500px] bg-red-300 ml-[200px] absolute mt-20 flex'>
                <div className='p-5 '>
                    <input type="search" placeholder='Search chity ' name="" id="" />
                    <h1 className='mt-[100px] font-bold text-500px'>40.C</h1>
                    <h2 className='mt-[300px]'>Today 5: 30pm || 28/04/2024 || Dhaka </h2>



                </div>
                <div>
                    <h1 className='text-2xl ml-14 p-2'>Today's Heighlights</h1>

                    <div className='grid grid-cols-2 gap-10 justify-center align-middle '>

                        <div className='bg-gray-400 w-[200px] h-[200px] justify-center align-middle grid'>
                            <p>Wind Status</p>
                            <h1>4.3 mph</h1>
                        </div>
                        <div className='bg-gray-400 w-[200px] h-[200px]  justify-center align-middle grid'>
                            <p> Humidity</p>
                            <h1>58%</h1>
                        </div>



                        <div className='bg-gray-400 w-[200px] h-[200px]  justify-center align-middle grid'>
                            <p>Visibility</p>
                            <h1>1 miles</h1>

                        </div>
                        <div className='bg-gray-400 w-[200px] h-[200px]  justify-center align-middle grid'>
                            <p>Air Pressure</p>
                            <h1>1013mb</h1>
                        </div>


                    </div>



                </div>
            </div>
        </div>
    );
};

export default ContainerBox;