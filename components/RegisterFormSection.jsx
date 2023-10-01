'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
// import { signIn, signOut } from 'next-auth/react';
import { useFormik } from 'formik';
import { registerValidate } from '@/app/lib/validate';
// import { useRouter } from 'next/router';

const RegisterFormSection = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  // const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then(res => res.json())
      .then(data => {
        if (data) router.push('http://localhost:3000');
      });
  }

  return (
    <div className="right flex flex-col justify-evenly px-10">
      <div className="text-center py-10">
        <div className="3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
            <p className="w-3/4 mx-auto text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              officia?
            </p>
          </div>

          {/* form */}
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.input_group} ${
                formik.errors.username && formik.touched.username
                  ? 'border-rose-600'
                  : ''
              }`}
            >
              <input
                className={styles.input_text}
                type="text"
                name="Username"
                placeholder="Username"
                autoComplete="current-Username"
                {...formik.getFieldProps('username')}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.email && formik.touched.email
                  ? 'border-rose-600'
                  : ''
              }`}
            >
              <input
                className={styles.input_text}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="current-email"
                {...formik.getFieldProps('email')}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? 'border-rose-600'
                  : ''
              }`}
            >
              <input
                className={styles.input_text}
                type={`${show.password ? 'text' : 'password'}`}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                {...formik.getFieldProps('password')}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.cpassword && formik.touched.cpassword
                  ? 'border-rose-600'
                  : ''
              }`}
            >
              <input
                className={styles.input_text}
                type={`${show.cpassword ? 'text' : 'password'}`}
                name="cpassword"
                placeholder="Confirm password"
                autoComplete="current-password"
                {...formik.getFieldProps('cpassword')}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>

            {/* register buttons */}
            <div type="submit" className={styles.button}>
              <button type="submit">Sign Up</button>
            </div>
          </form>

          {/* bottom */}
          <p className="text-center text-gray-400 ">
            Have an account?
            <Link href={'/login'}>
              <span className="text-blue-700">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { RegisterFormSection };
