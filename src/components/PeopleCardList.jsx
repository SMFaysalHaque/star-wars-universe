import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PeopleContext } from "../context/PeopleContext";
import PeopleCard from "./cards/PeopleCard";

export default function PeopleCardList() {
  const { searchResults, isSearching, clearSearch } = useContext(PeopleContext);
  const [allPeople, setAllPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPeople = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.swapi.tech/api/people?page=${page}&limit=10`
      );
      setAllPeople(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Failed to fetch people:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearching) {
      fetchPeople(currentPage);
    }
  }, [currentPage, isSearching]);

  const peopleToDisplay = isSearching ? searchResults : allPeople;

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        loading ? "h-[600px] flex flex-col justify-between pt-[250px]" : ""
      }`}
    >
      {isSearching &&
        (searchResults.length === 0 ? (
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 border-[6px] border-[#fcd34a] border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="mb-6">
            <button
              onClick={() => {
                clearSearch();
                setCurrentPage(1); // Reset to page 1
                setLoading(true);
              }}
              className="flex items-center gap-2 bg-[#fcd34a] text-[#101418] hover:bg-[#feedb4]/90 px-4 py-2 rounded-md transition-colors duration-500 ease-in-out hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 19l-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back
            </button>
          </div>
        ))}

      {loading ? (
        <div className="flex items-center justify-center ">
          <div className="w-12 h-12 border-[6px] border-[#fcd34a] border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {peopleToDisplay.map((item) =>
            searchResults.length === 0 ? (
              <Link to={`/character/${item.uid}`} key={item.uid}>
                <PeopleCard name={item.name} id={item.uid} />
              </Link>
            ) : (
              <Link to={`/character/${item.uid}`} key={item.uid}>
                <PeopleCard name={item.properties.name} id={item.uid} />
              </Link>
            )
          )}
        </div>
      )}

      {!isSearching && totalPages && (
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-[#252c37] h-10 px-4 py-2 ${
              currentPage === 1
                ? "bg-[#1f2937] text-[#6b7280] cursor-not-allowed"
                : "bg-[#101418] hover:bg-[#fcd34a] text-[#feedb4] hover:text-[#101418]"
            }`}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </button>

          <span className="text-sm text-[#94a3b8]">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-[#252c37] h-10 px-4 py-2 ${
              currentPage === totalPages
                ? "bg-[#1f2937] text-[#6b7280] cursor-not-allowed"
                : "bg-[#101418] hover:bg-[#fcd34a] text-[#feedb4] hover:text-[#101418]"
            }`}
          >
            <span>Next</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
