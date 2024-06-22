'use client'

import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { FormEvent, useState } from 'react'
import Confetti from 'react-confetti'

export default function ContactForm() {
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })

      if (res.status === 200) {
        setSubmitted(true)
        console.log('Form submitted successfully')
      } else {
        console.error('Form submission failed with status:', res.status)
      }
    } catch (err: any) {
      console.error('Error submitting form:', err)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center p-12 bg-gradient-to-r from-indigo-300 to-indigo-400">
        {isSubmitted ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Thank you for your message!
            </h1>
            <p className="text-md leading-6 text-white font-semibold">View our <a href="/blog" className="font-semibold"><u>Blog</u></a></p>
            <Confetti />
          </div>
        ) : (
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="input w-full input-bordered input-primary rounded-md p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  className="input w-full input-bordered input-primary rounded-md p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (CA)<span className="text-red-500">*</span>
                </label>
                <input
                  className="input w-full input-bordered input-primary rounded-md p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  placeholder="XXX-XXX-XXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="textarea w-full textarea-primary rounded-md p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}