import { useEffect, useState } from "react";

const WindowSizeDetector = () => {
  const [windowsize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>
        {windowsize <= 640
          ? "small screen"
          : windowsize <= 1007
          ? "medium screen"
          : "large screen"}{" "}
        = {windowsize}
      </h2>
    </div>
  );
};

export default WindowSizeDetector;
