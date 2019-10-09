import '../static/styles/tailwind.css';
import PropTypes from 'prop-types';

const SmileyButton = (props) => {
    return (
        <button className="h-12 w-8 p-1" {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 20 20">
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z"/>
        </svg>
        </button>
    );
}


const SendButton = (props) => {
    return (
        <button className="h-12 w-8 p-1" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 20 20">
                <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/>
            </svg>
        </button>
    );
}


class MessengerBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:""
        }
        this.enterKeyCode = 13;
        this.messageBox = React.createRef();
    }

    keyPressHandler = (event) => {
        if (event.key === "Enter") {
            this.sendHandler();
        }
    }

    sendHandler = () => {
        this.props.onSend(this.messageBox.current.value);
        this.messageBox.current.value = "";
        this.messageBox.current.blur();
    }

    render = () => {
        return (
            <div className="flex flex-row p-2 justify-center align-baseline" id="messenger-bar">
            <div className="mx-2">
                <SmileyButton />
            </div>
            <div className="flex-1 flex">
                <textarea rows="1" onKeyPress={this.keyPressHandler} ref={this.messageBox} placeholder="Type a message" className="flex-1 rounded-full p-3" />
            </div>
            <div className="mx-2 ">
                <SendButton onClick={this.sendHandler} />
            </div>
            <style jsx>{`
    
                #messenger-bar {
                    background-color: #f7f7f7;  
                }
    
                textarea {
                    border : 1px #f7f7f7 solid;
                    outline:none;
                    resize:none;
                    overflow:hidden;
                }
            `}</style>
            </div>
        );
    }
}

//TODO:
//Ensure that messenger-box expands vertically

MessengerBar.propTypes = {
    onSend : PropTypes.func,
}

export default MessengerBar;