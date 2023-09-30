'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';

const RegisterFormSection = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

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
          <form className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="text"
                name="Username"
                placeholder="Username"
                autoComplete="current-Username"
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
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.cpassword ? 'text' : 'password'}`}
                name="cpassword"
                placeholder="Confirm password"
                autoComplete="current-password"
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>

            {/* register buttons */}
            <div className={styles.button}>
              <button type="submit">Login</button>
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

export default RegisterFormSection;
