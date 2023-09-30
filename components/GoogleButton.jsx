// 'use client';

// import { signIn } from 'next-auth/react';
// import { useSearchParams } from 'next/navigation';
// import Image from 'next/image';

// const GoogleButton = () => {
//   const searchParams = useSearchParams();

//   const callbackUrl =
//     // searchParams.get('callbackUrl') ||
//     // `https://practice-course-next.vercel.app/profile/profile`;

//     signIn('google', {
//       callbackUrl: `http://localhost:3000`,
//     });

//   return (
//     <div className={styles.button_custom}>
//       <button
//         type="button"
//         className="flex gap-2"
//         onClick={() =>
//           signIn('google', {
//             callbackUrl,
//           })
//         }
//       >
//         <p>Sign In with Google</p>
//         <Image src={'/assets/google.svg'} alt="" width={20} height={20}></Image>
//       </button>
//     </div>
//   );
// };

// export { GoogleButton };
