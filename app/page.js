import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx"; // Import your navbar component
import Slider from "../components/Slider.jsx";
import { sliderData } from "../components/sliderData.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello First Responder</title>
        <meta name="description" content="Thank you for your service" />
      </Head>
      
      {/*Creating Constant Verbage That will be used throughout the website*/}
      <Hero slogan='Serving those who serve others' sloganMsg='We provide solutions to challenges that retiring first responders may face by helping them prepare for life beyond the badge'/>
      <Slider slides={sliderData}/>
    </div> 
  );
}
