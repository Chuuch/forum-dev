import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel"; // Adjust import path if needed
import { Spinner } from "../components/ui/spinner"; // Adjust import path if needed
import { useAuth } from "../context/AuthContext"; // Adjust import path if needed

// Define interfaces for the new API response format
interface NewsApiResponse {
  result: {
    response: string;
    newsCount: number;
    skipped: number;
  };
  news: NewsItem[];
}

interface NewsItem {
  Title: string;
  Source: string;
  Url: string;
  PublishedOn: string;
  Description: string;
  Language: string;
  Image: string;
  SourceNationality: string;
  TitleSentiment: {
    sentiment: string;
    score: number;
  };
  Summary: string;
  Countries: string[];
  Categories: {
    label: string;
    IPTCCode: string;
  };
}

// Define our simplified Article model that we'll use in the component
interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  date: string;
  source: string;
  summary: string;
  sentiment: string;
  category: string;
}

const News: React.FC = () => {
  const { token } = useAuth(); // Get token from context
  const [articles, setArticles] = useState<Article[]>([]); // To store fetched articles
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch news on component mount
  useEffect(() => {
    const fetchNews = async () => {
      if (!token) {
        setError("No token found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/news", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the header
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch news.");
        }

        const responseData: NewsApiResponse = await response.json();

        // Check if the response has the expected structure
        if (
          responseData.result?.response === "ok" &&
          Array.isArray(responseData.news)
        ) {
          // Transform the API data to match our Article interface
          const transformedArticles: Article[] = responseData.news
            .filter((item) => item.Image) // Only include items with images
            .map((item, index) => ({
              id: index, // Since there's no id in the new format, use index as id
              title: item.Title || "Untitled",
              description: item.Description || "",
              url: item.Url || "#",
              image: item.Image || "",
              date: new Date(item.PublishedOn).toLocaleDateString(),
              source: item.Source || "",
              summary: item.Summary || "",
              sentiment: item.TitleSentiment?.sentiment || "neutral",
              category: item.Categories?.label || "",
            }));

          setArticles(transformedArticles);
        } else {
          setError("Invalid data format");
        }
        setLoading(false);
      } catch (error: unknown) {
        setError((error as Error).message || "Failed to fetch news.");
        setLoading(false);
      }
    };

    fetchNews(); // Invoke the news fetching function
  }, [token]);

  // Get sentiment color for styling
  const getSentimentColor = (sentiment: string): string => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return "text-green-500";
      case "negative":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  // If loading, show a loading message
  if (loading) {
    return (
      <div className="flex items-center justify-center h-60">
        <Spinner className="text-teal-500" />
      </div>
    );
  }

  // If there's an error, show an error message
  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full p-4">
      <Carousel>
        <CarouselContent>
          {articles.length > 0 ? (
            articles.map((article) => (
              <CarouselItem key={article.id}>
                <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="h-64 md:h-full">
                      <img
                        alt={article.title}
                        src={
                          article.image ||
                          "https://via.placeholder.com/800x400.png?text=No+Image"
                        }
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">
                            {article.source}
                          </span>
                          <span
                            className={`text-sm font-medium ${getSentimentColor(
                              article.sentiment
                            )}`}
                          >
                            {article.sentiment.charAt(0).toUpperCase() +
                              article.sentiment.slice(1)}
                          </span>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                          {article.title}
                        </h1>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                          {article.description}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {article.summary}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {article.date}
                        </span>
                        <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="w-full p-8 text-center text-gray-500">
              No articles available.
            </div>
          )}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer -ml-2 md:-ml-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-800/90" />
        <CarouselNext className="cursor-pointer -mr-2 md:-mr-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-800/90" />
      </Carousel>
    </div>
  );
};

export default News;
