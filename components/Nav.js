import '../static/styles/tailwind.css';
import NavHeader from './NavHeader';
import SearchBar from './SearchBar';
import Chats from './Chats';

const Nav = () => {
    return (
        <div id="nav" className="flex flex-col max-w-md">
            <div className="mb-2"><NavHeader /></div>
            <div className="mt-1"><SearchBar /></div>
            <div className="mt-2"><Chats /></div>

        <style jsx>{`
        #nav{
            background-color: #f7f7f7;
            // max-height:80%;
            overflow:vertical;
        }
        `}
        </style>
        </div>
    );
}

export default Nav;