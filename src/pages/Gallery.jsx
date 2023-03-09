import React,{ useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Header from '../partials/Header';

export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/upload')
          .then(response => response.json())
          .then(data => setImages([...images, data ]))
          
          
      }, []);
      
  return (
    
    <div className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    {images.forEach(ele => console.log(ele))}
    <MDBRow 
      style={{
        marginTop: "4.5rem"
        
      }}
    >
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          
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
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
    </div>
  );
}