import { getProviders, signIn, getSession } from "next-auth/react";

const SignIn = ({ providers }: any) => {
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
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name} className="my-4">
            <button
              onClick={() => signIn(provider.id)}
              className="bg-[#0c4a6e] transition delay-100 hover:bg-[#fb7185] w-full py-4 px-3 rounded-md text-white"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
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
