// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// interface Article {
//   headline: string
//   description: string
//   image_url: string | null
//   link: string
//   category: string | null
//   updated_hours: string | null
// }
interface Article {
  title: string
  description: string
  image_url: string | null
  url: string
}

interface NewsData {
  articles: Article[]
}

export default function TelegraphNews() {
  const [news, setNews] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://news-agent-production.up.railway.app/telegraph-news/')
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        const data: NewsData = await response.json()
        console.log(data)
        setNews(data.articles)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Telegraph News</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main section with images */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news
              .filter(article => article.image_url)
              .map((article, index) => (
                <Link 
                  href={article.url || '#'}
                  key={index}
                  target="_blank"
                  className="block hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden bg-white"
                >
                  <article className="border border-gray-200 rounded-lg h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.image_url!}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority={index < 3}
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>

        {/* Side section without images */}
        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Latest Updates
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {news
                .filter(article => !article.image_url)
                .map((article, index) => (
                  <Link 
                    href={article.url || '#'}
                    key={index}
                    target="_blank"
                    className="block hover:bg-blue-50 transition-colors duration-200"
                  >
                    <article className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 hover:text-blue-600">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {article.description}
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <span className="hover:underline">Read full story</span>
                        <svg 
                          className="w-4 h-4 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}