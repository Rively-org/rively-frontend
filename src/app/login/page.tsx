import { IconBrandFacebook, IconBrandGoogle, IconBrandLinkedin, IconDots, IconX } from "@tabler/icons-react";
import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center" >
      <footer className="text-2xl absolute top-10 left-10 text-blue-900 font-black">Rively</footer>

      <section className="flex flex-col items-center justify-center w-full max-w-xl space-y-3">
        <h1 className="text-5xl">Welcome Back</h1>
        <h1 className="text-7xl font-black text-blue-900">RIVELY</h1>

        <div className="w-full">
          <h1 className="text-2xl font-medium text-black ">Email</h1>
          <input placeholder="Enter your Email" className="border border-black rounded-sm w-full h-12 p-3 "></input>
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-medium text-black ">Password</h1>
          <input placeholder="Enter Password" className="border border-black rounded-sm w-full h-12 p-3 " type="password"></input>
        </div>

        <Link href="/" className="bg-black text-white py-3 px-14 rounded-md font-bold hover:bg-white hover:text-black border border-black">Login</Link>

        <h1 className="opacity-70 pt-5">other ways to sign in</h1> 
        <section className="flex space-x-2">
          <IconBrandGoogle />
          <IconBrandFacebook />
          <IconBrandLinkedin />
          <IconDots />
        </section>

      </section>
    </main>
  )
};
