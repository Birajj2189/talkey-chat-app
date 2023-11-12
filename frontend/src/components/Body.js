import React from 'react'
import Chats from './Chats'
const Body = () => {
  return (
<div class="main-body overflow h-[100vh] sm:ml-[6vw]">
<div className='main-container mt-[10vh] flex overflow-hidden h-[90vh] w-full'>
    <div className='left w-1/3 h-full backdrop-blur-sm overflow-y-scroll px-2 md:px-4  bg-transparent'>
  <div class="list-container py-2">
    <div class="friend list-items flex flex-col sm:flex-row items-center justify-between max-w-lg mx-auto border-b border-text-color py-4  rounded-md my-1 px-4">
      <div class="flex flex-row items-center space-x-4">
        <img src="https://i.pravatar.cc/150?img=31" alt="default img" class="h-6 w-6 md:h-10 md:w-10 rounded-full" />
        <div>
          <h1 class="tracking-tight text-start text-sm md:text-md lg:text-lg">Scarlet Johnson</h1>
          <p class="text-text-color tracking-tight font-light text-xs md:text-sm lg:text-md">scarlet@starkindustries.com</p>
        </div>
      </div>
      <div>       
      </div>
    </div>


</div>

</div>
  <Chats/>
</div>

</div>
  )
}

export default Body