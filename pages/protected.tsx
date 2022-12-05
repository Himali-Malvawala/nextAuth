import { useSession } from "next-auth/react";

const Protected = () => {
  const { data: session } = useSession();
  console.log("session:", session);

  if (session === undefined) {
    return {
      redirect: { destination: "/" },
    };
  }

  return <div>okokokok</div>;
};

export default Protected;
