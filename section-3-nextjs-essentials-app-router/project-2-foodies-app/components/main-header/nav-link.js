"use client";

import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <Link
      className={
        pathName.startsWith(href)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}
