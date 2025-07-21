import axios from "axios";
import { useContext, useState } from "react";
import { PeopleContext } from "../context/PeopleContext";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { setSearchResults, setIsSearching } = useContext(PeopleContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    setSearchResults([]);
    setIsSearching(true);

    try {
      const response = await axios.get(
        `https://www.swapi.tech/api/people/?name=${search}`
      );

      if (response.data?.result?.length > 0) {
        setSearchResults(response.data.result);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
      setSearch("");
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-[#fcd34a]/20 to-[#101418] border-b border-[#252c37]">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-open-sans font-bold text-[#feedb4] mb-4 animate-fade-in">
              Star Wars Universe
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              Explore the galaxy far, far away and discover the heroes,
              villains, and legends of the Star Wars universe.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-2xl mx-auto"
          >
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                Search Characters
              </label>
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
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8] h-4 w-4"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                id="search"
                className={`flex w-full rounded-md border px-3 py-2 ring-[#101418] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-20 h-12 textLg bg-[#191d24] border-[#94a3b8] focus:ring-[#fcd34a] focus:border-none ${
                  search ? "text-[#fcd34a]" : "text-[#94a3b8]"
                }`}
                placeholder="Search for a Star Wars character..."
              />

              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                <button
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none rounded-md h-8 px-3 transition-colors duration-200
                      ${
                        loading
                          ? "bg-[#fcd34a]/50 text-gray-500 cursor-not-allowed"
                          : "bg-[#fcd34a] hover:bg-[#feedb4]/90 hover:cursor-pointer"
                      }`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
