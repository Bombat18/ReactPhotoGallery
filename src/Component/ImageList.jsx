import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import "./ImageList.css";


function ImageList() {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [imageApiUrl, setImageApiUrl] = useState(
    "https://api.slingacademy.com/v1/sample-data/photos"
  );


  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        params: {
          limit: 40,
        },
      });
      const imageResult = response.data.photos;
      const imageListResult = imageResult.map((imageData) => {
        const image = imageData
        console.log(image);
        return {

          image: image.url,
          id:image.id
        };
      });
      console.log(imageListResult);
      setImageList(imageListResult);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(imageApiUrl);
  }, [imageApiUrl]);


  return (
    <div>
      <div>
        <h1>IMAGE GALLERY</h1>
      </div>
      <div className="ImageListWrapper">
        {isLoading
          ? "Loading"
          : imageList.map((image) => (
            <Image image={image.image} id={image.id} />
          ))}
      </div>
      
    </div>
  );
}

export default ImageList;
