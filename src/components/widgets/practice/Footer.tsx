import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">NewsHub</h3>
              <p className="text-sm">Your trusted source for the latest news and updates from around the world.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">News Sources</h4>
              <ul className="space-y-2">
                <li><Link href="/bbc" className="hover:text-blue-400 transition-colors">BBC News</Link></li>
                <li><Link href="/guardian" className="hover:text-blue-400 transition-colors">The Guardian</Link></li>
                <li><Link href="/telegraph" className="hover:text-blue-400 transition-colors">The Telegraph</Link></li>
                <li><Link href="/independent" className="hover:text-blue-400 transition-colors">The Independent</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">World</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Business</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Technology</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Sports</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 NewsHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm hover:text-blue-400 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;