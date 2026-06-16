import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi URL ka path badle ga, page smooth scrolling ke sath upar chala jaye ga
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Aap "smooth" bhi likh sakte hain, lekin "instant" upar phenk deta hai bina jhatke ke
    });
  }, [pathname]);

  return null;
}