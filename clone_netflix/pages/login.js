import { useState } from "react";
import axios from "axios";
import styles from "../styles/Login.module.css";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { id, password });
      if (response.data.success) {
        location.href = "/";
      }
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <div className={styles.background}>
      <img
        onClick={handleLogin}
        src="/logo_netflix.png"
        alt="Netflix Logo"
        className={styles.logo}
      />
      <form className={styles.container}>
        <p className={styles.title}>로그인</p>
        <div className={styles.field}>
          <input
            type="text"
            value={id}
            required
            onChange={(e) => setId(e.target.value)}
          />
          <span className={styles.floating_label}>
            이메일 주소 또는 전화번호
          </span>
        </div>
        <div className={styles.field}>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={styles.floating_label}>비밀번호</span>
        </div>
        <div />
        <button className={styles.signin_btn} onClick={handleLogin}>
          로그인
        </button>
        <div className={styles.action_group}>
          <label for="remember-me">
            <input type="checkbox" id="remember-me" />
            로그인정보 저장
          </label>
          <a>도움이 필요하신가요?</a>
        </div>
        <div className={styles.q1}>
          Netflix 회원이 아닌가요?
          <a style={{ color: "white" }}> 지금 가입하세요.</a>
        </div>
        <div className={styles.q2}>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
          확인합니다. <a style={{ color: "#0071eb" }}>자세히 알아보기.</a>
        </div>
      </form>
    </div>
  );
}
