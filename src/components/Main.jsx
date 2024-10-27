import React from 'react'

const Main = () => {
  return (
    <div className='bg-[#000] h-[100%] w-[100%] py-4'>
    <div className='text-white w-[100%] flex justify-center mb-[3rem]'>
    <input type="text" placeholder='Ink your thoughts; the world is waiting to read them'  className='w-11/12 bg-[#302f2f] border-1 border-black outline-none md:[1.25rem] text-[1.3rem] lg:text-[1.5rem] amita-bold text-center p-5 rounded-lg tracking-wide '></input></div>
      <div className='lg:h-[90vh] h-fit flex lg:flex-row  flex-col w-[90%] mx-auto relative '>
        <div className='h-[90vh] lg:w-[65%] w-[100%] overflow-y-hidden relative flex items-end hero z-[100]'>
          <div className='bg-image bg1 h-full w-full'></div>
          <div className='flex flex-col gap-2 w-fit mx-[4rem] my-[1rem] absolute abs'>
            <button className='bg-blue-400 w-fit  text-white px-3  text-[0.9rem] font-semibold py-1 tracking-[1px] uppercase'>WRITE</button>
            <p className='roboto-bold w-[80%] md:text-[2rem] text-[1.7rem] tracking-wide text-white'>Every blog post is a step on the path to mastery—let’s take those steps together!.</p>
            <div  className='text-[1rem] text-[grey] font-semibold flex gap-5'>
            <p>John Doe</p>
            <p>December 29, 2017</p>
            </div>
          </div>
        </div>
        <div className='lg:h-[90vh] lg:w-[35%] h-full w-full lg:block flex flex-row-reverse ' >
          <div className='h-[45vh] lg:w-full w-[50%] relative'>
          <div className='bg-image bg2 h-full w-full relative z-0'></div>
          <div className='flex flex-col w-fit gap-[0.5rem] z-10 bg-transparent absolute bottom-0 p-[0.8rem] lg:abs'>
            <button className='bg-green-400 w-fit  text-white px-3 text-[0.8rem] font-semibold py-1 tracking-[1px] uppercase'>LEARN</button>
            <p className=' w-[80%] md:text-[1.5rem] text-[1rem] text-white  roboto-bold tracking-wide '>Every story is worth telling; start yours today.</p>
            <div  className='text-[1rem] text-[grey] font-semibold flex gap-5'>
            <p>John Doe</p>
            <p>December 29, 2017</p>
            </div>
          </div>
          </div>
          <div className='h-[45vh] lg:w-full w-[50%] relative '>
          <div className='bg-image bg3 h-full w-full'></div>
          <div className='flex flex-col w-fit gap-[0.5rem] z-10 bg-transparent absolute bottom-0 p-[0.8rem] abs'>
            <button className='bg-green-400 w-fit  text-white px-3 text-[0.8rem] font-semibold py-1 tracking-[1px] uppercase'>GROW</button>
            <p className=' w-[80%] md:text-[1.5rem] text-[1rem] text-white roboto-bold tracking-wide'>Let your words be the brush that paints your thoughts.</p>
            <div  className='text-[1rem] text-[grey] font-semibold flex gap-5'>
            <p>John Doe</p>
            <p>December 29, 2017</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
