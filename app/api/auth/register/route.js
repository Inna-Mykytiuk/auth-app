import { connectMongoDB } from '@/app/lib/mongodb';
import { User } from '@/app/model/Schema';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await connectMongoDB();

    const { name, email, password } = await req.json();
    const user = await User.findOne({ email }).select('_id');
    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      {
        message: 'User created successfully',
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
