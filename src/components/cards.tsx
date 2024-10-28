import React from 'react'

const Cards = () => {
  return (
    <section className='h- [292px] bg-[#252B42] flex justify-center items-center pb-20'> 

    <div className='bg-white w-80 mr-5 h-72 pt-9 pr-10 pb-9 pl-10 rounded-md gap-5'>
        <div className='w-[70px] h-[76px] rounded-lg pt bg-[#FFDCD1]'></div>
        <h3 className='h-6 font-bold text-base mt-5 leading-6 text-[#252B42]'>training courses</h3>
        <div className='w-12 h-[2px] bg-[#E74040] mt-4 mb-4'></div>
        <p className='w-[222] h-[60] leading-5 text-[#737373] font-[montserat] text-400 text-sm font-normal '>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...</p>
      
    </div>
    <div className='bg-white w-80 h-72 mr-5 pt-9 pr-10 pb-9 pl-10 rounded-md gap-5'>
        <div className='w-[70px] h-[76px] rounded-lg pt bg-[#89EAA8]'></div>
        <h3 className='h-6 font-bold text-base mt-5 leading-6 text-[#252B42]'>2,769 online courses</h3>
        <div className='w-12 h-[2px] bg-[#E74040] mt-4 mb-4'></div>
        <p className='w-[222] h-[60] leading-5 text-[#737373] font-[montserat] text-400 text-sm font-normal'>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...</p>
      
    </div>
    <div className='bg-[#23a6f0] w-80 h-72 pt-9 pr-10 pb-9 pl-10 rounded-md gap-5'>
        <div className='w-[70px] h-[76px] rounded-lg pt bg-[#FFFFFF]'></div>
        <h3 className='h-6 font-bold text-base mt-5 leading-6 text-[#FFFFFF]'>training courses</h3>
        <div className='w-12 h-[2px] bg-[#FFFFFF] mt-4 mb-4'></div>
        <p className='w-[222] h-[60] leading-5 text-[#FFFFFF] font-[montserat] text-400 text-sm font-normal'>The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...</p>
      
    </div>
    
    </section>
  )
}

export default Cards
