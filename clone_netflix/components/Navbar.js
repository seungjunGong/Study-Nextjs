import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <img
          src="/logo_netflix.png"
          alt="Netflix Logo"
          className={styles.img}
        />

        <li>
          <Link href="/" className={styles.link}>
            홈
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.link}>
            시리즈
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.link}>
            영화
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.link}>
            NEW! 요즘 대세 콘텐츠
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.link}>
            내가 찜한 콘텐츠
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.link} s>
            언어별로 찾아보기
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
