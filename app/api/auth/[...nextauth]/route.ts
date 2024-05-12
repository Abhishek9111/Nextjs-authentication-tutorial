import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
// export function GET(
//   req: NextRequest,
//   { params: { authRoutes } }: { params: { authRoutes: String[] } }
// ) {
//   console.log(authRoutes);
//   return NextResponse.json({
//     message: "asd",
//   });
// }
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "name", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // signIn: ({ user }) => {
    //   console.log("user", user);
    //   if ((user.email = "test")) {
    //     return false;
    //   }
    //   return true;
    // },
    jwt: ({ token, user }) => {
      console.log("test", token, user);
      return token;
    },
  },
});
export const GET = handler;

export const POST = handler;
