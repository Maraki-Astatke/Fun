


import React, { useState, useEffect } from 'react';


export default function Home() {
  const imageUrls = [
    'image1',
    'image2',
    'image3',
    'image4',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [className, setClassName] = useState('image1'); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      setClassName(imageUrls[(currentImageIndex + 1) % imageUrls.length]); 
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [currentImageIndex, imageUrls.length]);

  return (
    <div className={`header_image ${className}`}>
     
    </div>
  );
}
