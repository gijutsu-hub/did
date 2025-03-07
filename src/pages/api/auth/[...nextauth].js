import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "Iv23liz5TyQZbsgNJ50y",
      clientSecret: "2178d761fa612edb2b118da1e4a2408eb6bca8db",
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)