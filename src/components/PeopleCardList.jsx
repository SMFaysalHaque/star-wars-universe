import { Link } from "react-router-dom";

export default function PeopleCardList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        <Link to="/character/1">
          <div className="rounded-lg border text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-[#191d24] border-[#252c37] hover:border-[#fcd34a80]/50 hover:cursor-pointer">
            <div className="p-6">
              <div className="flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcd34a4d]/20 flex items-center justify-center group-hover:bg-[#fcd34a4d]/30 transition-colors">
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
                      className="h-6 w-6 text-[#fcd34a]"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#feedb4] group-hover:text-[#fcd34a] transition-colors">
                      Luke Skywalker
                    </h3>
                    <p className="text-sm text-[#94a3b8]">Character #1</p>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 group-hover:text-[#feedb4] h-9 rounded-md px-3 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#252c37] bg-[#101418] hover:bg-[#fcd34a] text-[#feedb4] hover:text-[#101418] h-10 px-4 py-2 hover:cursor-pointer"
          disabled
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-[#94a3b8]">Page 1 of 9</span>
        </div>

        <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#252c37] bg-[#101418] hover:bg-[#fcd34a] text-[#feedb4] hover:text-[#101418] h-10 px-4 py-2 hover:cursor-pointer">
          <span>Next</span>
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
