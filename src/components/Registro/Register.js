import React, { useState, useEffect } from "react";
import Logo from '../../assets/images/Logo.png'


export default function SignUp() {
  return(
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Registro a Brum Brum RacingGame
      </h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
      <div>
          <label for="email-address" className="sr-only">Username</label>
          <input id="username" name="username"  autocomplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
        </div>
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="email-address" className="sr-only">Name</label>
          <input id="name" name="name" type="name" autocomplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
        </div>
        <div>
          <label for="email-address" className="sr-only">Surname</label>
          <input id="surname" name="surname"  autocomplete="surname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Surname"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="curren" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">

        <div className="text-sm">
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Ya tienes una cuenta?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" className="buttonClass group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign up
        </button>
      </div>
    </form>
  </div>
</div>
  );
}