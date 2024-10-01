import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>LinkNodes Clone  <UserButton /> </h1>

      <div className="ln_box">
        <div className="link_box">
          <div className="name">Name</div>
          <div className="inside_link_box">
            <div className="icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="link_box">
        <div className="name">Github</div>
          <div className="inside_link_box">
            <div className="icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="link_box">
        <div className="name">Youtube</div>
          <div className="inside_link_box">
            <div className="icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="link_box">
        <div className="name">Instagram</div>
          <div className="inside_link_box">
            <div className="icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
