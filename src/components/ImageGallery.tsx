import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";

type Images = { id: string; download_url: string };

interface Props {
  isOpen: boolean;
  onImageSelect: (img: string) => void;
}

const ImageGalleryDialog: React.FC<Props> = (props) => {
  const [images, setImages] = useState<Array<Images>>([]);
  const { isOpen, onImageSelect } = props;

  useEffect(() => {
    fetch(
      `https://picsum.photos/v2/list?limit=18&page=${Math.floor(
        Math.random() * 10
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <Dialog open={isOpen} keepMounted aria-labelledby="dialog-slide-title">
      <DialogTitle id="dialog-slide-title">
        {"Select your image avatar"}
      </DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((img) => (
            <div
              style={{ cursor: "pointer" }}
              key={img.id}
              onClick={() => onImageSelect(img.download_url)}
            >
              <img src={img.download_url} alt="Display" />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryDialog;
