'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { signIn, signOut } from 'next-auth/react';
import { useFormik } from 'formik';
import { loginValidate } from '@/app/lib/validate';
// import { GoogleButton } from './GoogleButton';

const LoginFormSection = () => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }
  // Github Login
  async function handleGithubSignin() {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  }

  return (
    <div className="right flex flex-col justify-evenly px-10">
      <div className="text-center py-10">
        <div className="3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
            <p className="w-3/4 mx-auto text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              officia?
            </p>
          </div>

          {/* form */}
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
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
            {/* {formik.errors.email && formik.touched.email ? (
              <span className="text-rose-500">{formik.errors.email}</span>
            ) : (
              <></>
            )} */}

            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? 'border-rose-600'
                  : ''
              }`}
            >
              <input
                className={styles.input_text}
                type={`${show ? 'text' : 'password'}`}
                name="password"
                placeholder="password"
                autoComplete="current-password"
                {...formik.getFieldProps('password')}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {/* {formik.errors.password && formik.touched.password ? (
              <span className="text-rose-500">{formik.errors.password}</span>
            ) : (
              <></>
            )} */}

            {/* login buttons */}
            <div className={styles.button}>
              <button type="submit">Login</button>
            </div>
            <div className={styles.button_custom}>
              <button
                type="button"
                className="flex gap-2"
                onClick={handleGoogleSignin}
              >
                <p>Sign In with Google</p>
                <Image
                  src={'/assets/google.svg'}
                  alt=""
                  width={20}
                  height={20}
                ></Image>
              </button>
            </div>
            <div className={styles.button_custom}>
              <button
                type="button"
                className="flex gap-2"
                onClick={handleGithubSignin}
              >
                <p>Sign In with Github </p>
                <Image
                  src={'/assets/github.svg'}
                  alt=""
                  width={25}
                  height={25}
                ></Image>
              </button>
            </div>
          </form>

          {/* bottom */}
          <p className="text-center text-gray-400 ">
            don&apos;t have an account yet?{' '}
            <Link href={'/register'}>
              <span className="text-blue-700">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { LoginFormSection };
