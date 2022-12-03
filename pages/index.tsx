import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import { Button, Typography, Link } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityIcon from "@mui/icons-material/Security";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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

          {session && (
            <div className="absolute top-14 mx-3 md:mx-6 bg-white bg-opacity-20 backdrop-blur-md px-5 md:px-10 py-7 rounded-lg drop-shadow-2xl sm:w-11/12 sm:flex sm:justify-between sm:items-center">
              <Typography className="text-white text-base md:text-lg">
                Signed in as {session?.user?.email}
              </Typography>
              <Button
                size="small"
                variant="contained"
                className="bg-[#0c4a6e] hover:bg-[#fb7185] mt-3 sm:mt-0"
                onClick={() => signOut({ callbackUrl: "/signin" })}
              >
                Sign out
              </Button>
            </div>
          )}
          <div className="absolute top-56 sm:top-44 mx-3 md:mx-6 bg-white bg-opacity-20 backdrop-blur-md px-5 md:px-10 py-7 rounded-lg drop-shadow-2xl">
            <div>
              <Link href="/signin" underline="none">
                <Typography className="text-base md:text-lg text-white hover:underline underline-offset-[3px]">
                  Go to the SignIn page
                  <LockOpenIcon className="ml-1" />
                </Typography>
              </Link>
            </div>
            <div>
              <Link href="/protected" underline="none">
                <Typography className="text-base md:text-lg text-white hover:underline underline-offset-[3px]">
                  Go to the Protected page
                  <SecurityIcon className="ml-1" />
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
