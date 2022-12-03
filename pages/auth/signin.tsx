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
      <div className="absolute top-3">
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
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
