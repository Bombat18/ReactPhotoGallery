import axios from "axios";
import './ImageDetiles.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ImageDetils() {
    const { id } = useParams();
    const [image, setimage] = useState({});

    async function downloadImage() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}/`);
        console.log(response);
        setimage({
            image: response.data.photo.url,
            title: response.data.photo.title,
            description: response.data.photo.description,

        })
    }

    useEffect(() => {
        downloadImage();
    }, []);


    return (
        <div className="image-detiles">
            <div className="img">
                <img src={image.image} />
            </div>
            <div>
               <h1 className="h1"> {image.title} </h1> 
               <h3> {image.description}  </h3> 
            </div>



        </div>
    );
}
export default ImageDetils ;