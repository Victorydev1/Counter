"use client";

import { useState } from "react";

export default function Home() {
  const headerGradient = "from-indigo-600 to-purple-600"; 
  const cardBg = "bg-white";
  const buttonBg = "bg-indigo-100";
  const buttonText = "text-gray-700";

  const recipes = [
    { title: "tomato salad", time: "10 minutes to make", desc: "blah blah blah" },
    { title: "green salad", time: "10 minutes to make", desc: "blah blah blah" },
    { title: "lettuce salad", time: "10 minutes to make", desc: "blah blah blah" },
    { title: "raddish salad", time: "10 minutes to make", desc: "blah blah blah" },
  ];

  const [count, setCount] = useState(0);


  return (
    <div className="min-h-screen bg-indigo-50">
      <nav>
        <div
          className={`w-full py-6 flex items-center justify-between px-6 md:px-20 xl:px-60 bg-gradient-to-tr ${headerGradient}`}
        >
          <h1 className="text-white text-2xl font-semibold">Cooking Ninja</h1>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xl text-white font-thin cursor-pointer">
                Search:
              </span>
              <input
                type="text"
                placeholder="Search recipes..."
                className="py-1 px-2 outline-none rounded-md w-52"
              />
            </div>
            <button className="border border-white px-4 py-1 rounded-md text-white text-xl">
              Create Recipe
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container w-full md:px-40 mx-auto py-20">
          <div className="grid gap-10 px-10 md:px-0 mx-auto grid-cols-1 md:grid-cols-3">
            {recipes.map((r, i) => (
              <div
                key={i}
                className={`${cardBg} p-6 shadow-md rounded-md flex flex-col`}
              >
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {r.title}
                </h3>
                <p className="mb-2">{r.time}</p>
                <p className="my-4 flex-grow">{r.desc}</p>
                <button
                  className={`text-lg font-semibold ${buttonText} ${buttonBg} px-4 py-1 rounded-md block mx-auto`}
                >
                  Cook This
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

       <main className="min-h-screen grid items-center">
        <div className="container text-center">
          <h1 className="text-7xl font-semibold">Counter</h1>
          <span className="text-8xl font-bold">{count}</span>
          <div className="mt-6">
            <button
              onClick={() => setCount(() => count - 1)}
              className="uppercase bg-transparent py-2 px-4 tracking-widest text-sm border border-green-600 rounded-md m-2 hover:bg-green-100"
            >
              decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="uppercase bg-transparent py-2 px-4 tracking-widest text-sm border border-green-600 rounded-md m-2 hover:bg-green-100"
            >
              reset
            </button>
            <button
              onClick={() => setCount(() => count + 1)}
              className="uppercase bg-transparent py-2 px-4 tracking-widest text-sm border border-green-600 rounded-md m-2 hover:bg-green-100"
            >
              increase
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

