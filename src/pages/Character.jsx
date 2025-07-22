import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FilmCard from "../components/cards/FilmCard";
import BackForwardIcon from "../components/svgs/BackForwardIcon";
import FilmIcon from "../components/svgs/FilmIcon";
import FilmIcon2 from "../components/svgs/FilmIcon2";
import HomeIcon from "../components/svgs/HomeIcon";
import RocketIcon from "../components/svgs/RocketIcon";
import VehiclesIcon from "../components/svgs/VehiclesIcon";

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeWorld, setHomeWorld] = useState(null);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(`https://www.swapi.tech/api/people/${id}`);
        setCharacter(res.data.result);
      } catch (err) {
        setError("Error fetching character.");
      }
    };

    fetchCharacter();
  }, [id]);

  useEffect(() => {
    const fetchFilmsForCharacter = async () => {
      if (!character) return;

      const characterUrl = character.properties.url;

      try {
        const res = await axios.get("https://www.swapi.tech/api/films");
        const allFilms = res.data.result;

        const matchedFilms = allFilms.filter((film) =>
          film.properties.characters.includes(characterUrl)
        );

        setFilms(matchedFilms);

        const starshipsSet = new Set();
        const vehiclesSet = new Set();

        matchedFilms.forEach((film) => {
          const { starships = [], vehicles = [] } = film.properties;

          starships.forEach((url) => starshipsSet.add(url));
          vehicles.forEach((url) => vehiclesSet.add(url));
        });

        setStarships([...starshipsSet]);
        setVehicles([...vehiclesSet]);
      } catch (err) {
        setError("Error fetching films.");
      } finally {
        setLoading(false);
      }
    };

    fetchFilmsForCharacter();
  }, [character]);

  useEffect(() => {
    const fetchHomeWorldForCharacter = async () => {
      if (!character) return;

      const characterHomeWorld = character.properties.homeworld;

      try {
        const res = await axios.get(characterHomeWorld);
        const home = res.data.result;

        setHomeWorld(home);
      } catch (err) {
        setError("Error fetching films.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeWorldForCharacter();
  }, [character]);

  const handleToggle = () => {
    if (visibleCount >= films.length) {
      setVisibleCount((prev) => Math.max(3, prev - 3));
    } else {
      setVisibleCount((prev) => Math.min(films.length, prev + 3));
    }
  };

  const visibleFilms = films.slice(0, visibleCount);
  const isAtMax = visibleCount >= films.length;

  if (loading) {
    return (
      <div className="text-center text-yellow-400 py-10">
        Loading character...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!character || !homeWorld) {
    return (
      <div className="text-center text-red-400 py-10">Character not found.</div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-[#fcd34a33] to-[#dc282833] border-b border-[#252c37]">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-[#252c37] text-[#feedb4] hover:bg-[#feedb4] hover:text-[#252c37] border border-transparent h-10 px-4 py-2 mb-6 transition-colors duration-500 ease-in-out"
          >
            <BackForwardIcon />
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
                {character.properties.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-[#252c37] text-[#feedb4]">
                  {character.properties.gender}
                </div>
                <div className="inline-flex items-center rounded-full border border-[#252c37] px-2.5 py-0.5 text-xs font-semibold text-[#feedb4]">
                  {character.properties.birth_year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Physical Characteristics */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                    <p className="font-semibold">
                      {character.properties.height} cm
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Mass</p>
                    <p className="font-semibold">
                      {character.properties.mass} kg
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Hair Color</p>
                    <p className="font-semibold capitalize">
                      {character.properties.hair_color}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8]">Eye Color</p>
                    <p className="font-semibold capitalize">
                      {character.properties.eye_color}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-[#94a3b8]">Skin Color</p>
                    <p className="font-semibold capitalize">
                      {character.properties.skin_color}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="rounded-lg border border-[#252c37] bg-[#191d24] shadow-sm animate-fade-in">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-[#feedb4]">
                  Quick Stats
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  {/* Films */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#94a3b8]">
                      <FilmIcon />
                      <span className="text-sm text-[#feedb4]">Films</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent text-[#feedb4] bg-[#252c37]">
                      {films.length}
                    </div>
                  </div>

                  {/* Starships */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#94a3b8]">
                      <RocketIcon />
                      <span className="text-sm text-[#feedb4]">Starships</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent text-[#feedb4] bg-[#252c37]">
                      {starships.length}
                    </div>
                  </div>

                  {/* Vehicles */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#94a3b8]">
                      <VehiclesIcon />
                      <span className="text-sm text-[#feedb4]">Vehicles</span>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent text-[#feedb4] bg-[#252c37]">
                      {vehicles.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home world */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full rounded-lg border border-[#252c37] bg-[#191d24] text-[#feedb4] shadow-sm animate-fade-in p-6">
          <h3 className="text-2xl font-semibold text-[#feedb4] leading-none tracking-tight flex items-center space-x-2 mb-6">
            <HomeIcon />
            <span>Home Wolrd</span>
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div>
              <p className="text-sm text-[#94a3b8]">Name</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Population</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.population}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Climate</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.climate}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Gravity</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.gravity}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Terrain</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.terrain}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Orbital period</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.orbital_period}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Rotation period</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.rotation_period}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Diameter</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.diameter}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94a3b8]">Surface water</p>
              <p className="font-semibold capitalize">
                {homeWorld.properties.surface_water}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="w-full rounded-lg border border-[#252c37] bg-[#191d24] text-[#feedb4] shadow-md animate-fade-in p-6">
          <h3 className="text-2xl font-semibold text-[#feedb4] leading-none tracking-tight flex items-center space-x-2 mb-6">
            <FilmIcon2 />
            <span>Films with {name}</span>
          </h3>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {films.length === 0 ? (
              <div className="text-center text-gray-500">No films found.</div>
            ) : (
              visibleFilms.map((film) => (
                <FilmCard key={film.uid} film={film} />
              ))
            )}
          </div>

          {/* More Button */}
          {films.length > 3 && (
            <div className="text-center mt-6">
              <button
                className="rounded-md text-sm font-medium border border-[#252c37] h-10 px-4 py-2 bg-[#101418] hover:bg-[#fcd34a] text-[#feedb4] hover:text-[#101418] transition-all duration-300 hover:cursor-pointer"
                onClick={handleToggle}
              >
                {isAtMax ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
