import { useEffect, useState } from "react";
import WindowSizeDetector from "../components/WindowSizeDetector";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 576;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {windowWidth}
      {isMobile ? "mobile" : "desktop"}
      <WindowSizeDetector />
    </div>
  );
};

export default HomePage;
