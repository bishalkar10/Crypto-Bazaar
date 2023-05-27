import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const News = () => {
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/news"
        );
        const data = response.data;
        setNewsArray(response.data.news);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const newsList = newsArray.map((news) => {
    const validExtensions = [".jpeg", ".jpg", ".gif", ".png", ".svg", ".webp"];
    const ampersandCount = (news.description.match(/&/g) || []).length;

    if (
      validExtensions.some((extension) => news.imgURL.endsWith(extension)) &&
      ampersandCount <= 5
    ) {
      return (
        <NewsCard
          key={news.id}
          title={news.title}
          description={news.description}
          imgURL={news.imgURL}
          source={news.source}
          link={news.link}
        />
      );
    }

    return null;
  });

  return (
    <div>
      <h2 className="text-center text-5xl sm:text-6xl md:text-7xl mt-12">
        <span className="text-red-400">N</span>
        <span className="text-yellow-400">E</span>
        <span className="text-green-400">W</span>
        <span className="text-blue-400">S</span>
      </h2>

      {/* Render the fetched news data */}
      {newsList}
    </div>
  );
};

export default News;
