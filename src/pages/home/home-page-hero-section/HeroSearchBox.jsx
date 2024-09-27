/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

const HeroSearchBox = ({ setIsSearchModalOpen }) => {
    return (
        <div>
            <div onClick={() => setIsSearchModalOpen(true)}>
                <input placeholder="Search Quran" className="w-full h-10 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4"></input>
            </div>

            <div className="pl-1 text-xs text-cyan-950 flex items-center gap-2 mt-1">
                <div className="">
                    <FaSearch></FaSearch>
                </div>
                <p>Search by <span className="font-medium">Chapter Name</span> / <span className="font-medium">Chapter Number</span> / <span className="font-medium">Part of a Verse</span> / <span className="font-medium">Verse Key (10:5 is 5th ayah of 10th surah.)</span></p>
            </div>
        </div>
    );
};

export default HeroSearchBox;