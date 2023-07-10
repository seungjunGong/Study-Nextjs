// /api/session.js
export default function handler(req, res) {
  // 세션 확인 로직
  if (req.method === "GET") {
    res.status(200).json({ name: req.cookies.a_name, loggedIn: true });
  } else {
    res.status(200).json({ loggedIn: false });
  }
}
