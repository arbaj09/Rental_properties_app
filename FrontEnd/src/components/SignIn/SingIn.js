import React from 'react'
import { useState } from 'react'
import Error from '../Error/Error'
import LogIn from '../LogIN/LogIN'
import { Link } from 'react-router-dom'

const SignUp=() =>{
    const [Register,SetisRegister] = useState({
    FullName: "",
        Email: "",
        Password: "",
        Number:"",
        Image: null,
        
        
    })

    const [existUser,SetisExistUser] = useState(false)

    const [succes,SetisSeccses] = useState(false)





    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        SetisRegister({
            ...Register,
            [name]: value
        })

        
    }
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0]; // Get the first file from the FileList
        
        SetisRegister({
          ...Register,
          Image: imageFile,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(Register)
    try {
        const formData = new FormData();
        formData.append("FullName", Register.FullName);
        formData.append("Email", Register.Email);
        formData.append("Password", Register.Password);
        formData.append("Number", Register.Number);
        formData.append("Image", Register.Image); // Append the file object
        

        const response = await fetch("https://rental-prlts-api.onrender.com/api/user",{
            method: "POST",
            body: formData
        })


        if(response.ok){
        SetisRegister({
            FullName: "",
            Email: "",
            Password: "",
            Number:"",
            Image: null
        })
        SetisSeccses(true)
        alert("succefully registered")
        }
        else{
            const ErrorResponse=  await response.json()

            SetisExistUser(true)
            alert(ErrorResponse.error)
            alert("User Already Exist")
      

        }
       


    } catch (error) {
        console.log("Error while registering:", error);
        
    }
        
    }

    const succesPop=<div >succefully registered </div>
   




        



  return (



   <><section>


      {existUser ? <Error
        errorCode="404"
        title="User Already Exist"
        message="Please Sign In"
        buttonLabels="Sign In" /> : <div className="grid grid-cols-0 lg:grid-cols-0 ">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24  w-full">
          {succes ? succesPop : <div className="xl:mx-auto xl:w-1/2 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?
              <Link
                to="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>





            <form onSubmit={handleSubmit} method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">

                    FullName
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      name="FullName"
                      onChange={handleInputChange}
                      value={Register.FullName}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">

                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name='Email'
                      onChange={handleInputChange}
                      value={Register.Email}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">

                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Password"
                      id="password"
                      name='Password'
                      onChange={handleInputChange}
                      value={Register.Password}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">

                      PhoneNumber
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Password"
                      id="password"
                      name='Number'
                      onChange={handleInputChange}
                      value={Register.Number}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">

                      Profile Picture
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      placeholder="Password"
                      id="password"
                      name='Image'
                      required
                      onChange={handleImageChange}
                      value={Register.imageFile}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>


            <div className="mt-3 space-y-3">


            </div>
          </div>}
        </div>

      </div>}

    </section><LogIn /></>



  )
}
export default SignUp;
