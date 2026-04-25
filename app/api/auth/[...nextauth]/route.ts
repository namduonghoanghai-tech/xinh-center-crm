import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "123456"
        ) {
          return { id: "1", name: "Admin", role: "admin" }
        }

        if (
          credentials?.username === "user" &&
          credentials?.password === "123456"
        ) {
          return { id: "2", name: "User", role: "user" }
        }

        return null
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    }
  },

  pages: {
    signIn: "/login"
  },

  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }