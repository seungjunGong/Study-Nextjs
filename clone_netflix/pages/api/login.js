// /api/login.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // 로그인 처리 로직
    // 사용자의 인증 정보 확인 및 세션 생성
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.status(200).json({ success: true, message: "로그인 성공" });
  } else {
    res
      .status(405)
      .json({ success: false, message: "허용되지 않은 메서드입니다." });
  }
}
