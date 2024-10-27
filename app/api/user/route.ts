// ap/api/user/route.ts
import { NextResponse } from 'next/server';

export async function GET(){
    // database logic
    return Response.json({
        email:"manas@gmail.com",
        name : "Manas"
    })
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Here, you would typically perform validation and store the user data in a database
  // For simplicity, we'll just log the username and password to the console
  console.log('Username:', username);
  console.log('Password:', password);

  return NextResponse.json({ message: 'Sign up successful' });
}