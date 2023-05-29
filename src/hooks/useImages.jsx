import React, { useState, useEffect } from "react";
import { pdfjs, Document } from "pdfjs-dist";


const useImages = ({ pdfFile }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const convertuseImages = async () => {
      try {
        const pdf = await pdfjs.getDocument(pdfFile).promise;
        const numPages = pdf.numPages;

        const pageImages = [];

        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise;

          const imageData = canvas.toDataURL("image/png");
          pageImages.push(imageData);
        }

        setImages(pageImages);
      } catch (error) {
        console.error("Error converting PDF to images:", error);
      }
    };

    convertuseImages();
  }, [pdfFile]);

  return images;
};

export default useImages;
