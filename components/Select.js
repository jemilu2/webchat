import '../public/static/styles/tailwind.css';


const Select = (props) => {
    return (
        <select {...props} className="w-full focus:border-green-light bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-transparent">
            {props.options.map((option)=><option key={option}>{option}</option>)}
        </select>
    );
}

export default Select;
