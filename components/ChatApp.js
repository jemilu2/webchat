import '../public/static/styles/tailwind.css';
import Nav from './Nav';
import ChatRoom from './ChatRoom';

class ChatApp extends React.Component {
    render = () => {
        return (
            <div id="chat-app" className="flex flex-row">
                <Nav />
                <div className="flex-1"><ChatRoom /></div>

                <style jsx>{`
                    #chat-app {
                        max-height:40rem;
                        margin:4rem;
                    }
                `}</style>
            </div>
        );
    }
}

export default ChatApp;