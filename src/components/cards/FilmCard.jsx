import { useEffect, useRef, useState } from "react";

export default function FilmCard({ film }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const crawlRef = useRef(null);

  useEffect(() => {
    if (!isExpanded && crawlRef.current) {
      crawlRef.current.scrollTop = 0; // scroll to top of internal div
    }
  }, [isExpanded]);

  return (
    <div className="border border-[#252c37] bg-[#191d24] shadow-md rounded-2xl p-6 mb-6 relative transition-all duration-500 ease-in-out opacity-0 animate-fade-in">
      <h2 className="text-xl font-semibold text-[#feedb4] mb-2">
        {film.properties.title}
      </h2>
      <p className="text-[#94a3b8]">
        <span className="font-medium text-[#feedb4c4]">Director:</span>{" "}
        {film.properties.director}
      </p>
      <p className="text-[#94a3b8]">
        <span className="font-medium text-[#feedb4c4]">Producer:</span>{" "}
        {film.properties.producer}
      </p>
      <p className="text-[#94a3b8]">
        <span className="font-medium text-[#feedb4c4]">Release Date:</span>{" "}
        {film.properties.release_date}
      </p>
      <div className="mt-3">
        <h3 className="font-semibold text-[#feedb4c4] mb-1">Opening Crawl:</h3>
        <div
          ref={crawlRef}
          className={`transition-all duration-300 whitespace-pre-line text-[#94a3b8] ${
            isExpanded
              ? "max-h-60 overflow-y-auto"
              : "line-clamp-6 overflow-hidden"
          }`}
          style={{ scrollBehavior: "smooth" }}
        >
          {film.properties.opening_crawl}
        </div>
        <button
          className="mt-2 text-blue-500 hover:underline text-sm hover:cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
