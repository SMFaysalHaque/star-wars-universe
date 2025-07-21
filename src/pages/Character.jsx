import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://www.swapi.tech/api/people/${id}`
        );
        setCharacter(response.data.result);
        console.log("Character info:", response.data.result);
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  // Show loading indicator while data is being fetched
  if (loading) {
    return (
      <div className="text-center text-yellow-400 py-10">
        Loading character...
      </div>
    );
  }

  // Handle case where character data failed to load
  if (!character) {
    return (
      <div className="text-center text-red-400 py-10">Character not found.</div>
    );
  }

  const {
    name,
    gender,
    birth_year,
    height,
    mass,
    hair_color,
    eye_color,
    skin_color,
  } = character.properties;

  return (
    <>
      <div className="bg-gradient-to-r from-[#fcd34a33] to-[#dc282833] border-b border-[#252c37]">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-black text-[#feedb4] hover:bg-[#feedb4] hover:text-[#252c37] border border-transparent h-10 px-4 py-2 mb-6 transition-colors duration-500 ease-in-out"
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
          </Link>

          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full bg-[#fcd34a33] flex items-center justify-center animate-pulse-glow">
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
                className="h-10 w-10 text-[#fcd34a]"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#feedb4] mb-2 animate-fade-in">
                {name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-[#252c37] text-[#feedb4]">
                  {gender}
                </div>
                <div className="inline-flex items-center rounded-full border border-[#252c37] px-2.5 py-0.5 text-xs font-semibold text-[#feedb4]">
                  {birth_year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Physical Characteristics */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-[#252c37] bg-[#191d24] text-[#feedb4] shadow-sm animate-fade-in">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold text-[#feedb4] leading-none tracking-tight flex items-center space-x-2">
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
                    className="h-5 w-5 text-[#fcd34a]"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Physical Characteristics</span>
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-[#94a3b8]">Height</p>
                    <p className="font-semibold">{height} cm</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Mass</p>
                    <p className="font-semibold">{mass} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Hair Color</p>
                    <p className="font-semibold capitalize">{hair_color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Eye Color</p>
                    <p className="font-semibold capitalize">{eye_color}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-[#94a3b8]">Skin Color</p>
                    <p className="font-semibold capitalize">{skin_color}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="rounded-lg border border-[#252c37] bg-[#191d24] text-[#feedb4] shadow-sm animate-fade-in">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Quick Stats
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  {/* Films */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
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
                        className="lucide lucide-film h-4 w-4 text-[#94a3b8]"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 3v18" />
                        <path d="M3 7.5h4" />
                        <path d="M3 12h18" />
                        <path d="M3 16.5h4" />
                        <path d="M17 3v18" />
                        <path d="M17 7.5h4" />
                        <path d="M17 16.5h4" />
                      </svg>
                      <span className="text-sm">Films</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-[#252c37]">
                      0
                    </div>
                  </div>

                  {/* Starships */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
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
                        className="lucide lucide-rocket h-4 w-4 text-[#94a3b8]"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>
                      <span className="text-sm">Starships</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-[#252c37]">
                      0
                    </div>
                  </div>

                  {/* Vehicles */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
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
                        className="lucide lucide-car h-4 w-4 text-[#94a3b8]"
                      >
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                      <span className="text-sm">Vehicles</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-[#252c37]">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
