'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { signIn } from 'next-auth/react';
import { registerValidate } from '@/app/lib/validate';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/navigation';

const LoginFormSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Field type name - ${name} doesn't work`);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/dashboard',
      });

      if (res.error) {
        setError('Invalid Credentials');
        return;
      }

      router.replace('dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
    // signIn('google');
  }

  return (
    <div className="right flex flex-col justify-evenly px-10">
      <div className="text-center py-4">
        <div className="3/4 mx-auto flex flex-col gap-2">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold font-dancing mb-4">
              Explore
            </h1>
            <p className="w-3/4 mx-auto text-gray-400">
              Secure your spot by logging in.
            </p>
          </div>

          {/* form */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={registerValidate}
            onSubmit={handleSubmit}
          >
            {/* {({ errors, touched, values, handleChange }) => ( */}
            <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className={styles.input_group}>
                <Field
                  className={styles.input_text}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  autoComplete="current-email"
                />
                <span className="icon flex items-center px-4">
                  <HiAtSymbol size={25} />
                </span>
              </div>
              {/* {touched.email && errors.email && (
                  <div className="text-[14px] text-red-500">{errors.email}</div>
                )} */}

              <div className={styles.input_group}>
                <Field
                  className={styles.input_text}
                  type={`${show ? 'text' : 'password'}`}
                  name="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleChange}
                />
                <span
                  className="icon flex items-center px-4"
                  onClick={() => setShow(!show)}
                >
                  <HiFingerPrint size={25} />
                </span>
              </div>
              {/* {touched.password && errors.password && (
                <div className="text-[14px] text-red-500">
                  {errors.password}
                </div>
              )} */}

              {/* login buttons */}
              <button
                className={`${styles.button} w-[300px] sm:w-full mx-auto my-auto md:m-0`}
                type="submit"
              >
                Login
              </button>

              {error && (
                <div className="bg-red-500 text-white flex items-center justify-center w-2/4 mx-auto text-sm py-1 px-3 rounded-md mt-2">
                  <p className="">{error}</p>
                </div>
              )}

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

              {/* bottom */}
              <p className="text-center text-gray-400 ">
                don&apos;t have an account yet?{' '}
                <Link href={'/register'}>
                  <span className="text-[#394f6f]">Sign Up</span>
                </Link>
              </p>
            </Form>
            {/* )} */}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { LoginFormSection };
