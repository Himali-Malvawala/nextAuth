import { useSession, signIn } from "next-auth/react";
import Button from "@mui/material/Button";

const Login_btn = () => {
  const { data: session } = useSession();

  return (
    <>
      Not signed in <br />
      <Button
        size="small"
        variant="contained"
        className="bg-amber-600"
        onClick={() => signIn(undefined, { callbackUrl: "/" })}
      >
        Sign In
      </Button>
    </>
  );
};

export default Login_btn;
