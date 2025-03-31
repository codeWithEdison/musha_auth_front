// pages/EditUser.jsx
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import api from '../api'

const EditUser = () => {
  const {id}=useParams()

  const [UPdata,setUpdat]=useState({})
  const [errors,seterrors  ]=useState('')
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [updateloading ,setloading]=useState(false)
    
  const fetchuser= async ()=>{
    try{
      const response=await api.get(`/user/${id}`)
      setUpdat(response.data)
      setname(response.data.username[0])
      setemail(response.data.email[0])
    }catch(err){
      seterrors(err.message)
    }
  
   
  }
   useEffect(()=>{
    fetchuser(id)
   },[])

   

   

  const [username,setusername]=useState('')
  const [useremail,setuseremail]=useState('')
  

   
   const handle_update=async(event)=>{
    event.preventDefault();
    setloading(true)
    try{
      const response=await api.put('/update/'+id,{username,useremail})
        console.log(response)

    }
    catch(err){
      seterrors(err.response?.data?.message || err.message)
    }
    finally{
      setloading(false)
    }
   }
  return (
    

    
    <div className="max-w-2xl mx-auto">

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Edit User</h2>
            <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">
              Back to Dashboard
            </Link>
          </div>
          
          {errors&&<div className='border-1 border-red-300 m-2 py-2'>{errors}</div>}
          <div className="mb-6 p-4 bg-blue-50 rounded-md">
            <p className="text-gray-600">
              Editing user ID: <strong>{id}</strong>
            </p>
          </div>

          <form onSubmit={handle_update}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={name}
               onChange={(event)=>{setusername(event.target.value)}}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              />
             <p>{username}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(event)=>{setuseremail(event.target.value)}}
               
                value={email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              />
              {useremail}
            </div>

            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                name="status" 
                defaultValue="active"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div> */}

            {/* <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                name="role"
                defaultValue="user"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
            </div> */}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {updateloading ? "updating..." :"update "}
              </button>
              <Link
                to="/dashboard"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Danger Zone</h2>
          <p className="mb-4 text-gray-600">
            Once you delete this user account, there is no going back. Please be certain.
          </p>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete User Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;