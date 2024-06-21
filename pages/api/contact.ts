// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body

    // Here you can add your logic to handle the contact form submission
    // For example, sending an email or saving the data to a database

    res.status(200).json({ message: 'Form submitted successfully' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}