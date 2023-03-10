import NextAuth from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER
      // style: {
      //   bg: '#f6f6f6'
      // }
    })
  ]
}

export default NextAuth(authOptions)
