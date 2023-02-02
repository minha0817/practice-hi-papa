import Link from 'next/link'
import react from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Hipapa</h1>
      <p>Welcome, teacher!</p>
      <p>logout</p>
      <Link href="/reports">reports</Link>
    </nav>
  )

}
