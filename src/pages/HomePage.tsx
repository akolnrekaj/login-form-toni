import { useEffect, useState } from "react";
import WindowSizeDetector from "../components/WindowSizeDetector";
import { useLoginContext } from "../context/LoginContext";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setIsLoggedIn } = useLoginContext();
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

      <button onClick={() => setIsLoggedIn(false)}>logout</button>
    </div>
  );
};

export default HomePage;
