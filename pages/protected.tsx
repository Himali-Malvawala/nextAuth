import { Link, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

const Protected = () => {
  const { data: session, status } = useSession();

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
      <div>
        <div className="absolute top-4 mx-3 md:mx-6">
          <Link underline="none" href="/">
            <p className="text-2xl md:text-3xl text-white font-semibold mt-5">
              NextAuth App
            </p>
          </Link>
        </div>
        {status === "loading" && (
          <div className="absolute top-24 mx-3 md:mx-6 bg-white bg-opacity-20 backdrop-blur-md px-5 md:px-10 py-7 rounded-lg drop-shadow-2xl sm:w-11/12 text-white">
            <p>Loading...</p>
          </div>
        )}
        {!session && status === "unauthenticated" && (
          <div className="absolute top-24 mx-3 md:mx-6 bg-white bg-opacity-20 backdrop-blur-md px-5 md:px-10 py-7 rounded-lg drop-shadow-2xl sm:w-11/12 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-xl md:text-2xl font-bold text-red-500">
              Access Denied
            </h1>
            <Link
              underline="none"
              onClick={() => signIn(undefined, { callbackUrl: "/" })}
            >
              <Typography className="text-lg font-medium mt-3 underline underline-offset-[3px] cursor-pointer text-white">
                You must be signed in to view this page
              </Typography>
            </Link>
          </div>
        )}
        {session && status === "authenticated" && (
          <div className="absolute top-24 mx-3 md:mx-6 bg-white bg-opacity-20 backdrop-blur-md px-5 md:px-10 py-7 rounded-lg drop-shadow-2xl sm:w-11/12 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-xl md:text-2xl font-bold text-green-500">
              Access Granted
            </h1>
            <p className="text-lg md:text-xl font-medium mt-3">
              This is the protected Content (lol)
            </p>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Protected;
