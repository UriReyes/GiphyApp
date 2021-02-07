export const getGifs = async (category) => {
  const api_key = "ixX8Ljv5kG1WvYK3IzclO118dDKgLqai";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=20&api_key=${api_key}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
    size: img.images?.downsized_medium.size,
  }));
  return gifs;
};
