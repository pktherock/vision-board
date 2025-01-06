import { RowsPhotoAlbum } from "react-photo-album";

import photos from "./photos";
import "react-photo-album/rows.css";

const VisionBoard = () => {
  return <RowsPhotoAlbum photos={photos} />;
};

export default VisionBoard;
