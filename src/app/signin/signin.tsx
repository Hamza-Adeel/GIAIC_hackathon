import Link from "next/link";
import Image from "next/image"; // Importing Image from Next.js
import upper from "@/app/assets/upper.png"; // Importing the image
import Google from "@/app/assets/Google.png";
import Apple from "@/app/assets/Apple.png";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            404 Error
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
            <span>&gt;</span>
            <Link
              href="/error"
              className="text-orange-500 hover:text-yellow-500"
            >
              404
            </Link>
          </div>
        </div>
      </div>
      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            {/* <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div> */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox" className="w-4 h-4 accent-orange-500 border-orange-500 focus:ring-0 checked:bg-orange-500 checked:text-white checked:focus:ring-0"/>
              <span className="ml-2">Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
                Forgot password?
              </Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>OR</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={Google} alt="Google" className="h-6 mr-2" />
              Sign In with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={Apple} alt="Apple" className="h-6 mr-2" />
              Sign In with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
