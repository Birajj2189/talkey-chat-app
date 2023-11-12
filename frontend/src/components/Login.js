import React from 'react'

const Login = () => {
  return (
    <div className='login-box h-[100vh] w-[100vw] overflow-hidden'>
      <div className='flex flex-wrap h-full w-full justify-center items-center'>

          <div className='backdrop-blur-md w-4/12 border-white border-b border-r p-12  rounded-xl shadow-2xl'>            
            <form className='w-full'>
              <div class="mb-6 ">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="shadow-md bg-transparent border-text-color  text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@flowbite.com" required/>
              </div>
              <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                <input type="password" id="password" class="shadow-md bg-transparent border-text-color text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
              </div>
              <div class="mb-6">
                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
                <input type="password" id="repeat-password" class="shadow-md bg-transparent border-text-color text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
              </div>

              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>

          </div>
          <div>
            <img className='h-64 md:h-[30rem] png-img' src='./Mobile-login.png'/>
          </div>
      </div>
      


    </div>
  )
}

export default Login