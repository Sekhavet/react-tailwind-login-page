import React from "react";

function App() {
  return (
    <div className="flex h-screen">
      <div className="text-white rounded-lg bg-orange-500 m-auto p-8 flex flex-col w-96">
        <h1 className="text-3xl text-center font-semibold mb-4">
          <i className="fa-solid fa-user"></i> Login
        </h1>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="text-orange-900 w-full border-radius rounded-lg focus:outline-none p-1 mb-2"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="text-orange-900 w-full border-radius rounded-lg focus:outline-none p-1 mb-1"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <input type="checkbox" className="accent-orange-100"/>
            <label>Remember Me</label>
          </div>
          <div>
            <a href="#" className="text-orange-100 font-semibold hover:opacity-50 hover:transition-all">
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
          <button className="w-full bg-white text-orange-900 mt-6 p-3 rounded-lg font-semibold hover:bg-transparent border-2 hover:border-white hover:transition-all hover:text-white">
          <i className="fa-solid fa-right-to-bracket"/> Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

