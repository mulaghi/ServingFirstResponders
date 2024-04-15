import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero.jsx";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen mb-12  bg bg-fixed bg-center bg-cover custom-img">
      <title>Hello First Responder</title>

      <Hero />
      </div>
  );
}
