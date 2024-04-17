import React from 'react'


import { useState } from 'react'
import Error from '../Error/Error'
import { Link } from 'react-router-dom';




const LogIn=()=> {

    const [isError, setIsError] = useState(false);
   const[Login,setLogin] =useState({
        Email: "",
        Password: "",
    })


    const handleInputChange = (event) => {
        const { name, value } = event.target;
   
        setLogin({
            ...Login,
            [name]: value
        })
        
    }


    const goBackHandler= (e) => {
        setIsError(false)



        alert("you can go back")
        
    }

    const LoginHandler = async (event) => {
        event.preventDefault();
        console.log(Login)





        try {
            const response = await fetch("https://rental-prlts-api.onrender.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Login),
            });
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                alert("succefully logged in")
                setLogin({
                    
                    Email: "",
                    Password: "",
                })
            }
            else{
                setIsError(true)
          

              


            }
         



            
        } catch (error) {

            console.log(   ' WHILE LOGIN USER:',error)
            
        }
    }




  return (
    <section className='flex justify-center  align-middle justify-items-center  text-white'>
      <div className="grid-cols-1 lg:grid-cols-2 align-middle  flex justify-center">
        {isError? <Error
          title="Email or password is incorrect."
          message="please enter correct email and password."
          buttonLabels={{ goBack: 'Go Back' }}
          onGoBack={goBackHandler}


        />: <div className="flex justify-items-center  justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?
              <Link
                to="/sign-up"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form  onSubmit={LoginHandler} method="POST" className="mt-8 align-middle">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full text-black rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      name='Email'
                      value={Login.Email}
                      onChange={handleInputChange}

                      
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
            
                      Password
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
              
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full text-black rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      name='Password'
                      value={Login.Password}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    LogIn 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>}
       
      </div>
    </section>
  )
}
export default LogIn;
