import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly

<section>

<div>
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Where can you find us?</h2>
        <p className="text-xl text-gray-400">KG 452 St, Kigali Rwanda</p>
    </div>
</div>
<div className="relative flex justify-center">



<iframe
 className="relative flex justify-center items-center " 
 width="560" height="315" 
 src={import.meta.env.GOOGLE_MAP_API} 
 title="google maps" 
 frameBorder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

 </iframe>

</div>
</ section>
  );
}