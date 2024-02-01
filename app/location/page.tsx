'use client'
import Image from "next/image";
import RootLayout from "../layout";
import { useEffect, useState } from "react";
import ButtonLink from "../design-system/components/Button";
import Location from "./components/location";
import Footer from "@/components/Footer";



const LocationPage = () => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    } else
  return (
      <>
      <Location/>
      <Footer background="gold" />
      </>
 
 
   
  );
};

export default LocationPage;
