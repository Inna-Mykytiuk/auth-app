'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
// import { signIn, signOut } from 'next-auth/react';
// import { useFormik } from 'formik';
// import { registerValidate } from '@/app/lib/validate';
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
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="text"
                name="Username"
                placeholder="Username"
                autoComplete="current-Username"
                value={name}
                onChange={handleChange}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                autoComplete="current-email"
                onChange={handleChange}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.password ? 'text' : 'password'}`}
                name="password"
                value={password}
                placeholder="Password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>

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
            <button type="submit" className={styles.button}>
              Sign Up
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            {/* bottom */}
            <p className="text-center text-gray-400 ">
              Have an account?{' '}
              <Link href={'/login'}>
                <span className="text-blue-700">Sign In</span>
              </Link>
            </p>
          </form>
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
