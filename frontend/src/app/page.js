import Image from "next/image";
import styles from "./page.module.css";
import MainHub from "@/components/MainHub/MainHub";
import MainDiscover from "@/components/MainDiscover/MainDiscover";

export default function Home() {
  return (
    <main>
      <MainHub/>
      <MainDiscover/>
    </main>
  );
}
