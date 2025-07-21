import { createContext, useState } from "react";

export const PeopleContext = createContext();

export function PeopleProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const clearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <PeopleContext.Provider
      value={{
        searchResults,
        setSearchResults,
        isSearching,
        setIsSearching,
        clearSearch,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
}
