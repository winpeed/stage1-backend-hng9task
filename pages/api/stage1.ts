import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    slackUsername: string,
    backend: boolean,
    age: number,
    bio: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json( { slackUsername: "PraiseObende", backend: true, age: 27, bio: "I am Praise, a skilled web developer with a flair for frontend development and Cloud Technology. I build performant and result oriented websites. I currently live in Lagos, Nigeria and I'm currently open to remote dev. roles." })
}
