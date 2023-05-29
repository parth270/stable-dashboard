import { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';

const usePdfToImages = (pdfObject) => {
  const [pdfImages, setPdfImages] = useState([]);

  useEffect(() => {
    if (pdfObject && pdfObject.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const pdfData = new Uint8Array(event.target.result);
        convertPdfToImages(pdfData);
      };
      reader.readAsArrayBuffer(pdfObject);
    }
  }, [pdfObject]);

  const convertPdfToImages = (pdfData) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const loadingTask = pdfjs.getDocument({ data: pdfData });

    loadingTask.promise.then((pdf) => {
      const numPages = pdf.numPages;
      const images = [];

      const renderPage = (pageNum) => {
        pdf.getPage(pageNum).then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          page.render(renderContext).promise.then(() => {
            const imageSrc = canvas.toDataURL();
            images.push(imageSrc);

            if (images.length === numPages) {
              setPdfImages(images);
            } else {
              renderPage(pageNum + 1);
            }
          });
        });
      };

      renderPage(1);
    });
  };

  return pdfImages;
};

export default usePdfToImages;
