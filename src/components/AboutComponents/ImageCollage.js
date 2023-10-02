import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageCollage() {
  return (
    <ImageList
      sx={{ width: 800, height: 400, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/post/featured_image/37279/optimized_95fb88f2254eeac2e3356e5169d474d7.jpeg",
    title: "houstonview",
    rows: 2,
    cols: 4,
  },
  {
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/12/08/97.jpg",
    title: "spaceman",
    rows: 2,
    cols: 4,
  },
  {
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/04/0c/1f.jpg",
    title: "wallArt",
    rows: 2,
    cols: 4,
  },
  {
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/a4/2b/9d.jpg",
    title: "museumofnaturalscience",
    rows: 2,
    cols: 4,
  },
];
