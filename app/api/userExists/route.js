// import { connectMongoDB } from '@/app/lib/mongodb';
// import { User } from '@/app/model/Schema';
// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     await connectMongoDB();
//     const { email } = await req.json();
//     const user = await User.findOne({ email }).select('_id');
//     console.log('user: ', user);
//     return NextResponse.json({ user });
//   } catch (error) {
//     console.log(error);
//   }
// }
