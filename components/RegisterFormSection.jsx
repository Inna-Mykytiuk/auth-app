'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
// import { signIn, signOut } from 'next-auth/react';
// import { useFormik } from 'formik';
// import { registerValidate } from '@/app/lib/validate';
import { useRouter } from 'next/navigation';

const RegisterFormSection = () => {
  const router = useRouter();

  const [show, setShow] = useState({ password: false, cpassword: false });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');

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

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   if (!name || !email || !password) {
  //     setError('All fields are necessary.');
  //     return;
  //   }

  //   try {
  //     const resUserExists = await fetch('api/userExists', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (resUserExists.ok) {
  //       const json = await resUserExists.json();
  //       const user = json.user;

  //       if (user) {
  //         setError('User already exists.');
  //         return;
  //       }
  //     } else {
  //       console.log('Failed to check user existence.');
  //       return;
  //     }

  //     const { user } = await resUserExists.json();

  //     if (user) {
  //       setError('User already exists.');
  //       return;
  //     }

  //     const res = await fetch('/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });

  //     if (res.ok) {
  //       const form = e.target;
  //       form.reset();
  //       router.push('/');
  //     } else {
  //       console.log('User registration failed.');
  //     }
  //   } catch (error) {
  //     console.log('Error during registration: ', error);
  //   }
  // };
  const handleSubmit = async e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are necessary.');
      return;
    }

    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // if (resUserExists.ok) {
      //   const json = await resUserExists.json();
      //   const user = json.user;

      //   if (user) {
      //     setError('User already exists.');
      //     return;
      //   }
      // } else {
      //   console.log('Failed to check user existence.');
      //   return;
      // }

      const { user } = await resUserExists.json();

      if (user) {
        setError('User already exists.');
        return;
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        //redirect to main page(for our case its login fon now)
        router.push('/');
      } else {
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error during registration: ', error);
    }
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
                onChange={e => setName(e.target.value)}
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
                placeholder="Email"
                autoComplete="current-email"
                onChange={e => setEmail(e.target.value)}
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
                placeholder="Password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
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
            <div type="submit" className={styles.button}>
              <button type="submit">Sign Up</button>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            {/* bottom */}
            <p className="text-center text-gray-400 ">
              Have an account?
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
