import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='bg-gradient-to-br h-screen from-indigo-900 via-indigo-800 to-blue-800'>
      <div className='container mx-auto px-4 flex justify-center'>
        <div className='flex-1'>
          <h2 className='py-8 px-4 text-center text-white font-bold text-xl uppercase tracking-wide sm:text-2xl md:text-3xl'>
            Recipe Search App - ReactJS & Edamam API
          </h2>
          <div className=' bg-white w-full shadow-lg py-7 px-5 rounded max-w-6xl mx-auto'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
