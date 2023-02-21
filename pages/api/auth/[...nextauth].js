import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // clientId:"920706146633-b19j1otnllvikhe4tqlgd6vcidqv8iid.apps.googleusercontent.com",
      // clientSecret: "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",
    }),
  ],

  pages: {
    // signIn: "/signin",
    // signOut: "/signOut",
    // error: "/error",
  },

  // callbacks: {
  //   async signin({ user, email }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
});
