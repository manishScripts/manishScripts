const menu = [
  {
    img: "https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?w=2526&h=1358&rs=1&pid=ImgDetMain",
  },
  {
    img: "https://cache.desktopnexus.com/thumbseg/2069/2069922-bigthumbnail.jpg",
  },
  {
    img: "https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?w=2526&h=1358&rs=1&pid=ImgDetMain",
  },
];

menu.map((slide, index) => {
  console.log(index);
  body.style.backgroundImage = body.url(slide);
});
