import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const delay=5000;

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const Carousel = ( { repo }: { repo: ProjectCardProps[] }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === repo.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  
    return () => {
      resetTimeout();
    };
  }, [index, repo.length]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {repo.map((item, index) => (
          <ProjectCard key={index} {...item} />
          // <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>

      <div className="slideshowDots">
        {repo.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
