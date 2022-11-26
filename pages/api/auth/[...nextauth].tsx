import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
};

export default nextAuth(authOptions);
