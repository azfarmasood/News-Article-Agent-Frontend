"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-gray-800">NewsHub</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/bbc" className="text-gray-600 hover:text-blue-600 transition-colors">BBC</Link>
              <Link href="/guardian" className="text-gray-600 hover:text-blue-600 transition-colors">Guardian</Link>
              <Link href="/telegraph" className="text-gray-600 hover:text-blue-600 transition-colors">Telegraph</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;