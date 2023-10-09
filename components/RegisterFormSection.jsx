'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';

import { registerValidate } from '@/app/lib/validate';
import { useFormik } from 'formik';

import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterFormSection = () => {
  const router = useRouter();

  const [show, setShow] = useState({ password: false, cpassword: false });
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: registerValidate,
    onSubmit: async ({ name, email, password }) => {
      if (!name || !email || !password) {
        setError('All fields are necessary');
        return;
      }

      try {
        setSubmitting(true);
        const response = await axios.post('/api/auth/register', {
          name,
          email,
          password,
        });
        console.log('Register success', response.data);
        router.push('/login');
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="right flex flex-col justify-evenly px-10">
      <div className="text-center">
        <div className="3/4 mx-auto flex flex-col gap-2 py-4">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold font-dancing mb-4">
              Register
            </h1>
            <p className="hidden md:flex w-3/4 mx-auto text-gray-400">
              Complete the registration to unlock exclusive access.
            </p>
          </div>

          {/* form */}

          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="text"
                name="name"
                placeholder="Username"
                autoComplete="current-name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="text-[14px] text-red-500">
                {formik.errors.name}
              </div>
            )}

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="current-email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-[14px] text-red-500">
                {formik.errors.email}
              </div>
            )}

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.password ? 'text' : 'password'}`}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-[14px] text-red-500">
                {formik.errors.password}
              </div>
            )}

            {/* register buttons */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                styles.button
              } w-[300px] sm:w-full mx-auto my-auto md:m-0 ${
                isSubmitting ? 'disabled' : ''
              }`}
            >
              Sign Up
            </button>

            {error && (
              <div className="bg-red-500 text-white flex items-center justify-center w-2/4 mx-auto text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            {/* bottom */}
            <p className="text-center text-gray-400 ">
              Have an account?{' '}
              <Link href={'/login'}>
                <span className="text-[#394f6f]">Sign In</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export { RegisterFormSection };
