import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/logout");
      if (response.data.success) {
        setIsLogin(false);
      }
    } catch (error) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      const response = await axios.get("/api/session");
      if (response.status === 200 && response.data.name) {
        setIsLogin(response.data.loggedIn);
      } else {
        setIsLogin(false);
      }
    };

    checkSession();
  }, []);

  const handleLoginClick = () => {
    if (isLogin) {
      handleLogout();
    } else {
      location.href = "/login";
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/">
          <img
            src="/logo_netflix.png"
            alt="Netflix Logo"
            className={styles.img}
          />
        </Link>
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
          <Link href="#" className={styles.link}>
            언어별로 찾아보기
          </Link>
        </li>
        <li>
          <button className={styles.login} onClick={handleLoginClick}>
            {isLogin ? "로그아웃" : "로그인"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
