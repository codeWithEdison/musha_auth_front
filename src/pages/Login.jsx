import React from 'react'

const Login = () => {
  return (
    <div className='  h-screen  flex flex-col  justify-center items-center'>
      <div className=' shadow-md  p-6 rounded-lg  '>
      <h2 className=' text-2xl font-bold  text-center text-gray-800 mb-8 '>Login to your account </h2>
      <form action="" className='mb-4'>
        <label
        className='block text-sm text-gray-700 font-bold mb-2 '
        htmlFor="username"> username:  
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
          type="text" id='username' />
        </label> <br />
        <label
        className='block text-sm text-gray-700 font-bold mb-2 '
        htmlFor="password">password:
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
          type="password" id='password' />
        </label> <br />
        <input type="submit" value="login" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        
        />

      </form>
      </div>
    </div>
  )
}

export default Login