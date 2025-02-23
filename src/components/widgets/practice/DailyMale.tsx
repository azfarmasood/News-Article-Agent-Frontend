// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// interface Article {
//   headline: string
//   description: string
//   image_url: string | null
//   link: string
//   category: string | null
//   updated_hours: string | null
// }
interface Article {
  title: string;
  description: string;
  image_url: string | null;
  url: string;
}

interface NewsData {
  articles: Article[];
}

export default function DailyMaleNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://news-agent-production.up.railway.app/daily-mail-news/");
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data: NewsData = await response.json();
        console.log(data);
        setNews(data.articles);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Daily Mail News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <Link
            href={article.url || '#'}
            key={index}
            target="_blank"
            className="block hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden bg-white"
          >
            <article className="border border-gray-200 rounded-lg h-full flex flex-col">
              <div className="relative h-48 w-full bg-gray-100">
                {article.image_url ? (
                  <Image
                    src={article.image_url!}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
