import NextIcon from "../svgs/NextIcon";
import UserIcon from "../svgs/UserIcon";

export default function PeopleCard({ name, id }) {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-[#191d24] border-[#252c37] hover:border-[#fcd34a80]/50 hover:cursor-pointer">
      <div className="p-6">
        <div className="flex items-center justify-between group">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#fcd34a4d]/20 flex items-center justify-center group-hover:bg-[#fcd34a4d]/30 transition-colors duration-500 ease-in-out">
              <UserIcon />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#feedb4] group-hover:text-[#fcd34a] transition-colors duration-500 ease-in-out">
                {name}
              </h3>
              <p className="text-sm text-[#94a3b8]">Character #{id}</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-center group-hover:text-[#feedb4] h-9 rounded-md px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <NextIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
