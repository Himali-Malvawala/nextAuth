import { getProviders, signIn, getSession } from "next-auth/react";

const SignIn = ({ providers }: any) => {
  return (
    <div>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
