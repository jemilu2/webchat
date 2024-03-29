import '../public/static/styles/tailwind.css';

const style = `
rounded-lg 
block w-full 
bg-gray-200 
text-gray-700 
border border-black 
focus:border-green-light 
py-3 px-4 mb-3 leading-tight 
focus:border-transparent  
focus:outline-none focus:bg-white
`

function Input(props){
    return (
        <input 
            {...props} 
            display="block" 
            className={style}
        />
    );
}

export default Input;