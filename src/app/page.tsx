'use client'

import { DATA } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<'overview' | 'marketing' | 'sales' | 'product'>('sales');

  return (
    <main className="flex items-center justify-center h-screen w-full">
      <section className="h-full w-full max-w-[300px] bg-white border-r text-3xl flex flex-col items-start p-10 justify-between">
        <h1 className="text-4xl font-black text-blue-800">RIVELY</h1>

        <section className="space-y-1">
          <h1 className={`${active == 'overview' ? "text-black font-bold" : "text-gray-500"} cursor-pointer`} onClick={() => setActive("overview")}>Overview</h1>
          <h1 className={`${active == 'product' ? "text-black font-bold" : "text-gray-500"} cursor-pointer`} onClick={() => setActive("product")}>Product</h1>
          <h1 className={`${active == 'marketing' ? "text-black font-bold" : "text-gray-500"} cursor-pointer`} onClick={() => setActive("marketing")}>Marketing</h1>
          <h1 className={`${active == 'sales' ? "text-black font-bold" : "text-gray-500"} cursor-pointer`} onClick={() => setActive("sales")}>Sales</h1>
        </section>

        <section className="space-y-1">
          <h1 className="text-gray-500">Settings</h1>
          <h1 className="text-gray-500">Help Care</h1>
          <h1 className="text-gray-500">Feedback</h1>
        </section>

      </section>

      <section className="flex flex-col h-full w-full  bg-sky-50 p-10 space-y-4">

        <section className="flex justify-between">
          <h1 className="text-3xl text-blue-800 font-bold">Dashboard</h1>
          <input placeholder="Search" className="border p-2 rounded-xl" />
        </section>

        {/*
            <section className="flex h-52 w-full space-x-4">

            <section className="w-full h-full bg-white rounded-xl shadow border"></section>
            <section className="w-full h-full bg-white rounded-xl shadow border"></section>
            <section className="w-full h-full bg-white rounded-xl shadow border"></section>
            <section className="w-full h-full bg-white rounded-xl shadow border"></section>

            </section>
        */}

        <section className="h-0 flex-grow w-full bg-white rounded-xl shadow border p-10 space-y-5 overflow-auto">

          {
            DATA[active].map(k =>
              <section className="border p-5 hover:bg-blue-200 cursor-pointer ">
                <h1 className="text-3xl">{k.title}</h1>
                <h1>{k.desc}</h1>
              </section>
            )
          }
          

        </section>

      </section>

    </main>
  );
}
