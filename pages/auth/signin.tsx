import { getProviders, signIn, getSession } from "next-auth/react";
import { useState } from "react";

const SignIn = ({ providers }: any) => {
  const [email, setEmail] = useState("");

  const filteredProviders = Object.values(providers).filter(
    (item: any) => item?.name !== "Email"
  );

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      const emailSignIn = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/",
      });
      // if (error) {
      //   throw new Error(error);
      // }
      setEmail("");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="relative">
      <div>
        <video
          className="w-full object-cover h-screen"
          autoPlay
          muted
          loop
          src="/assets/background-img.mp4"
        >
          <source src="/assets/background-img.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-1/3 left-12 sm:left-40 md:left-1/3 mx-3 md:mx-6 bg-white bg-opacity-20 backdrop-blur-md px-5 md:px-10 py-7 rounded-lg drop-shadow-2xl">
        {providers &&
          filteredProviders?.map((provider: any) => (
            <div key={provider?.name} className="my-4">
              <button
                onClick={() => signIn(provider?.id)}
                className="bg-[#0c4a6e] transition delay-100 hover:bg-[#fb7185] w-full py-4 px-3 rounded-md text-white"
              >
                Sign in with {provider?.name}
              </button>
            </div>
          ))}
        <form onSubmit={handleSignIn}>
          <label htmlFor="email" className="text-sm text-white">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tom@holland.com"
            className="py-2 px-4 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 focus:border-blue-400 focus:ring-blue-400 transition disabled:opacity-50 disabled:cursor-not-allowed "
          />
          <button
            type="submit"
            className="bg-[#0c4a6e] transition delay-100 hover:bg-[#fb7185] w-full py-4 px-3 rounded-md text-white mt-4"
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { providers },
  };
}
