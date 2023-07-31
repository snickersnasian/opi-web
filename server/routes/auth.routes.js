import Router from "express";

const router = Router();

// /api/auth/register
export const authRoutes = router.post("/register", (req, res) => {
  res.json({
    auth: false,
  });
});


