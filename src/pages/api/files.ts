import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

type Data = Array<{
  fileName: string
  createdAt: string
  size: number
}>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method === 'GET') {
    const directory = path.join(process.cwd(), 'public/videos')

    fs.readdir(directory, (err, files) => {
      if (err) {
        res.status(500).json({ error: 'Failed to read directory' })
        return
      }

      const fileData: Data = files.map((fileName) => {
        const filePath = path.join(directory, fileName)
        const stats = fs.statSync(filePath)

        return {
          fileName,
          createdAt: stats.ctime.toISOString(),
          size: stats.size
        }
      })

      res.status(200).json(fileData)
    })
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}