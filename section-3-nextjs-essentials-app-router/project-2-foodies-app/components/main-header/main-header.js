import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          {/* this image is being lazy loaded. what does that means? */}
          <Image
            src={logoImage}
            width={100}
            height={100}
            alt="A plate with food on it"
            priority // this means this should load as priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
