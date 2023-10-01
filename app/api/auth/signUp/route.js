// async function handler(req, res) {
//   res.json({ message: 'Signup Post Request' });
// }

// export { handler as GET, handler as POST };

// async function fetch(req, res) {
//   res.json({ message: 'Signup Post Request' });
// }

// export { fetch as GET, fetch as POST };

// async function fetch(req, res) {
//   if (req.method === 'POST') {
//     // Обробка POST-запиту
//     res.json({ message: 'Signup Post Request' });
//   } else {
//     // Обробка GET-запиту
//     // Можливо, ви хочете повернути якусь інформацію для GET-запиту
//     res.json({ message: 'Signup Get Request' });
//   }
// }

// export { fetch };

import { connectMongo } from '@/app/database/connect';
import { Users } from '@/app/model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch(error => res.json({ error: 'Connection Failed...!' }));

  // only post method is accepted
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const { username, email, password } = req.body;

    // check duplicate users
    const checkexisting = await Users.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: 'User Already Exists...!' });

    // hash password
    Users.create(
      { username, email, password: await hash(password, 12) },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
