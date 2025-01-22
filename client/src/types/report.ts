interface Image{
  url: string
  key: string
  fileType: string
  fileName: string
}

 export interface InterfaceReport {
  description: string;
  costCode: string;
  images: Image[];
}

/* 

{
      "url": "https://example.com/image1.jpg",
      "key": "image1",
      "fileType": "image/jpeg",
      "fileName": "image1.jpg"
    },
*/