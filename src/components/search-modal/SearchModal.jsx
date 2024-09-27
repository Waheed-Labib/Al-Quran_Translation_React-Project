/* eslint-disable react/prop-types */
export const SearchModal = ({ isSearchModalOpen, setIsSearchModalOpen }) => {
    return (
        <div onClick={() => setIsSearchModalOpen(false)} className={`fixed z-[100] w-screen ${isSearchModalOpen ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
            <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${isSearchModalOpen ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                <svg onClick={() => setIsSearchModalOpen(false)} className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></svg>
                <h1 className="mb-2 text-2xl font-semibold">Welcome to NavigateUI!</h1>
                <p className="mb-5 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                <div className="flex justify-end gap-2">
                    <button onClick={() => setIsSearchModalOpen(false)} className="rounded-md bg-emerald-600 px-6 py-[6px] text-white hover:bg-emerald-700">
                        Ok
                    </button>
                    <button onClick={() => setIsSearchModalOpen(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
