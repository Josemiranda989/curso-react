import React, { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=XIRrAa3TO5OjXep9tH4PLzHDTfJ7OOxP";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        image: img.images.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  // getGifs()

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
