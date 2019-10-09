import '../static/styles/tailwind.css';

class SearchBar extends React.Component {
    render = () => {
        return (
            <div id="search-bar" className="shadow bg-white py-2 flex rounded-full">
                <svg className="h-6 px-3 py-1" fill="grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
                
                <textarea rows="1" className="flex-1 rounded-full"></textarea>

                <style jsx>{`
                    textarea {
                        outline:none;
                        resize:none;
                    }
                `}</style>
            </div>
        );
    }
}

// <div class="inline-block relative w-64">
//   <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//     <option>Really long option that will likely overlap the chevron</option>
//     <option>Option 2</option>
//     <option>Option 3</option>
//   </select>
//   <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//     <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//   </div>
// </div>

export default SearchBar;