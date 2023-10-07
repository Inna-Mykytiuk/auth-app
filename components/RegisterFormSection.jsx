'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
// import { signIn, signOut } from 'next-auth/react';

import { registerValidate } from '@/app/lib/validate';
import { Formik, Form, Field } from 'formik';

import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterFormSection = () => {
  const router = useRouter();

  const [show, setShow] = useState({ password: false, cpassword: false });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [cpassword, setCpassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    // setCpassword('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are necessary');
      resetForm();
      return;
      // setFieldsError('');
    }

    try {
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
    }
    resetForm();
  };

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
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            validate={registerValidate}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className={styles.input_group}>
                  <Field
                    className={styles.input_text}
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="current-Username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  <span className="icon flex items-center px-4">
                    <HiOutlineUser size={25} />
                  </span>
                </div>
                {touched.username && errors.username && (
                  <div className="text-[14px] text-red-500">
                    {errors.username}
                  </div>
                )}

                <div className={styles.input_group}>
                  <Field
                    className={styles.input_text}
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <span className="icon flex items-center px-4">
                    <HiAtSymbol size={25} />
                  </span>
                </div>
                {touched.email && errors.email && (
                  <div className="text-[14px] text-red-500">{errors.email}</div>
                )}

                <div className={styles.input_group}>
                  <Field
                    className={styles.input_text}
                    type={`${show.password ? 'text' : 'password'}`}
                    name="password"
                    value={values.password}
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                  <span
                    className="icon flex items-center px-4"
                    onClick={() =>
                      setShow({ ...show, password: !show.password })
                    }
                  >
                    <HiFingerPrint size={25} />
                  </span>
                </div>
                {touched.password && errors.password && (
                  <div className="text-[14px] text-red-500">
                    {errors.password}
                  </div>
                )}

                {/* <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.cpassword ? 'text' : 'password'}`}
                name="cpassword"
                placeholder="Confirm password"
                autoComplete="current-password"
                onChange={e => setCpassword(e.target.value)}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div> */}

                {/* register buttons */}
                <button
                  type="submit"
                  className={`${styles.button} w-[300px] sm:w-full mx-auto my-auto md:m-0`}
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { RegisterFormSection };

// const formik = useFormik({
//   initialValues: {
//     username: '',
//     email: '',
//     password: '',
//     cpassword: '',
//   },
//   validate: registerValidate,
//   handleSubmit,
// });
