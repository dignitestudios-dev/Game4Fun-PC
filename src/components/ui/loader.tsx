import React from 'react'


function Loader() {
  return (
 <div className='flex justify-center items-center  h-screen w-screen  top-0 left-0 z-[999999999999999999999999]' >
<div className="loader">
  <div className="loader_cube loader_cube--color"></div>
   <div className="loader_cube loader_cube--glowing"></div>
</div>
</div>
  )
}

export default Loader