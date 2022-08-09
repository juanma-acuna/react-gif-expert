const apiKey = "Fhxvzusp6FIO32Rs2F9TKn2J33eOZV4W";
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?apiKey=${apiKey}&q=${category}&limit=10&rating=G`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
