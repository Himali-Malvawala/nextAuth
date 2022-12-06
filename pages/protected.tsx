import { Link } from "@mui/material";
import { useSession } from "next-auth/react";

const Protected = () => {
  const { data: session } = useSession();
  console.log("session: ", session);
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
        <h1>Access Granted</h1>
        <p>This is the protected Content!! (lol)</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
export default Protected;
