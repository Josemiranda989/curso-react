//const getImagenPromesa = () => new Promise(resolve => resolve('https:/HDAHSOSOAIDAS.com'))
//getImagenPromesa().then(console.log)

const getImage = async () => {
  try {
    const apiKey = "XIRrAa3TO5OjXep9tH4PLzHDTfJ7OOxP";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = await data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImage();
