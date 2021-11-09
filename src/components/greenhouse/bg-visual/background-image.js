import { useEffect, useState } from "react";
import Image from "./imageList";
import "./background-image.css";

const imageSource =
  "https://images.unsplash.com/photo-1636392255535-e7b2e3a8b289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI2NDN8MHwxfGFsbHwyfHx8fHx8Mnx8MTYzNjQ1MjIwNg&ixlib=rb-1.2.1&q=80&w=1080";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  // const [width, setWidth] = useState();
  // const [height, setHeight] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos/?query=garden&client_id=0GVYyGRnrDPWgz0zauv7UIeADBIwyl7wD5r5bZrNN2s`
    )
      .then((response) => response.json())
      .then((json) => {
        setImage(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <img src={image?.results[0].urls.regular}></img>
    </div>
  );
}

// function BGImage() {
//   const [width, setWidth] = usestate();
//   const [height, setHeight] = useState();

//   useEffect(() => {
//     const { width, height } = getWindowDimensions();

//     setWidth(width);

//     setHeight(height);
//   }, []);

//   useEffect(() => {
//     function handleResize() {
//       const { width, height } = getWindowDimensions();

//       setWidth(width);

//       setHeight(height);
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (width && height) {
//     return <Image src={imageSource} width={width} height={height} />;
//   }

//   return null;
// }

export default BGImage;
