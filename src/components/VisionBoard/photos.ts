import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string) {
  return `/assets/imgs/${asset}`;
}

const photos = [
  {
    asset: "diet.jpg",
    width: 1080,
    height: 780,
    alt: "Diet img",
  },
  {
    asset: "diet2.jpg",
    width: 1080,
    height: 1620,
    alt: "Diet 2 img",
  },
  {
    asset: "exercise.jpg",
    width: 1080,
    height: 720,
    alt: "exercise img",
  },
  {
    asset: "exercise2.jpg",
    width: 1080,
    height: 720,
    alt: "exercise 2 img",
  },
  {
    asset: "exercise3.jpg",
    width: 1080,
    height: 1620,
    alt: "exercise 3 img",
  },
  {
    asset: "house.jpg",
    width: 1080,
    height: 607,
    alt: "house img",
  },
  {
    asset: "house2.jpg",
    width: 1080,
    height: 608,
    alt: "house 2 img",
  },
  {
    asset: "house3.jpg",
    width: 1080,
    height: 720,
    alt: "house 3 img",
  },
  {
    asset: "house4.jpg",
    width: 1080,
    height: 1549,
    alt: "house 4 img",
  },
  {
    asset: "instruments.jpg",
    width: 1080,
    height: 720,
    alt: "instruments img",
  },
  {
    asset: "problem-solving.jpg",
    width: 1080,
    height: 694,
    alt: "problem-solving img",
  },
  {
    asset: "problem-solving2.jpg",
    width: 1080,
    height: 1620,
    alt: "problem-solving 2 img",
  },
  {
    asset: "problem-solving3.jpg",
    width: 1080,
    height: 720,
    alt: "problem-solving 3 img",
  },
  {
    asset: "problem-solving4.jpg",
    width: 1080,
    height: 1440,
    alt: "problem-solving 4 img",
  },
  {
    asset: "problem-solving5.jpg",
    width: 1080,
    height: 1620,
    alt: "problem-solving 5 img",
  },
  {
    asset: "problem-solving6.jpg",
    width: 1080,
    height: 810,
    alt: "problem-solving 6 img",
  },
  {
    asset: "react.jpg",
    width: 1080,
    height: 595,
    alt: "react img",
  },
  {
    asset: "read-books.jpg",
    width: 1080,
    height: 595,
    alt: "read-books img",
  },
  {
    asset: "read-books2.jpg",
    width: 1080,
    height: 810,
    alt: "read-books 2 img",
  },
  {
    asset: "read-books3.jpg",
    width: 1080,
    height: 720,
    alt: "read-books 3 img",
  },
  {
    asset: "typing.jpg",
    width: 1080,
    height: 1440,
    alt: "typing img",
  },
  {
    asset: "typing2.jpg",
    width: 1080,
    height: 810,
    alt: "typing 2 img",
  },
  {
    asset: "typing3.jpg",
    width: 1080,
    height: 720,
    alt: "typing 3 img",
  },
  {
    asset: "typing4.jpg",
    width: 1080,
    height: 1440,
    alt: "typing 4 img",
  },
  {
    asset: "typing5.jpg",
    width: 1080,
    height: 810,
    alt: "typing 5 img",
  },
  {
    asset: "typing6.jpg",
    width: 1080,
    height: 720,
    alt: "typing 6 img",
  },
  {
    asset: "work-on-ideas.jpg",
    width: 1080,
    height: 1440,
    alt: "work-on-ideas img",
  },
  {
    asset: "work-on-ideas2.jpg",
    width: 1080,
    height: 810,
    alt: "work-on-ideas 2 img",
  },
  {
    asset: "work-on-ideas3.jpg",
    width: 1080,
    height: 720,
    alt: "work-on-ideas 3 img",
  },
  {
    asset: "work-on-ideas4.jpg",
    width: 1080,
    height: 1440,
    alt: "work-on-ideas 4 img",
  },
  {
    asset: "speaking.jpg",
    width: 1080,
    height: 1440,
    alt: "speaking img",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo)
);

export default photos;
