// /api/logout.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // 로그아웃 처리 로직
    // 세션 제거
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    res.status(200).json({ success: true, message: "로그아웃 성공" });
  } else {
    res
      .status(405)
      .json({ success: false, message: "허용되지 않은 메서드입니다." });
  }
}
