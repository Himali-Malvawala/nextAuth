import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

const Login_btn = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <Button size="small" variant="contained" onClick={() => signIn()}>
        Sign In
      </Button>
    </>
  );
};

export default Login_btn;
