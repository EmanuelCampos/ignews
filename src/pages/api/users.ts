import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Diego'},
    { id: 2, name: 'Emanuel'},
    { id: 3, name: 'Ana'} 
  ]

  return response.json(users)
}