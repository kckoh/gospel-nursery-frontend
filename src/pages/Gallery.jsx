import React,{ useState, useEffect } from 'react';

import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Header from '../partials/Header';

export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect( () => {
      fetch('http://gospelbackend-env.eba-pqmzkhpf.us-east-1.elasticbeanstalk.com/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      },[]);
   
  return (
    
    <div className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <MDBRow 
      style={{
        marginTop: "4.5rem"
        
      }}
    >
     
      {images.map(ele => 
        {
          return <MDBCol lg={6} md={16} className='mb-4 mb-lg-0'>
          <img
            src={ele}
            className='w-100 shadow-1-strong rounded mb-4'
          />
        </MDBCol>

        })}
  

        {/* <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />

          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
          />
        </MDBCol> */}


    </MDBRow>
    </div>
  );
}