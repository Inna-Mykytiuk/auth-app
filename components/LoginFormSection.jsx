'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import { loginValidate } from '@/app/lib/validate';
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
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="current-email"
                value={email}
                onChange={handleChange}
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

            <div className={styles.input_group}>
              <input
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

            {/* login buttons */}
            <div className={styles.button}>
              <button type="submit">Login</button>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <div className={styles.button_custom}>
              <button
                type="button"
                className="flex gap-2"
                onClick={handleGoogleSignin}
                // onClick={() => signIn('google')}
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
                <span className="text-blue-700">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LoginFormSection };

// const formik = useFormik({
//   initialValues: {
//     email: '',
//     password: '',
//   },
//   validate: loginValidate,
//   handleSubmit,
// });

// async function onSubmit(values) {
//   const status = await signIn('credentials', {
//     redirect: false,
//     email: values.email,
//     password: values.password,
//     callbackUrl: '/',
//   });

//   if (status.ok) router.push(status.url);
// }
