import '../public/static/styles/tailwind.css';
import Avatar from './Avatar';
import MoreButton from './MoreButton';
import PropTypes from 'prop-types';
import Status from './Status';
import ChatRoom from './ChatRoom';

const AvatarStatus = (props) => {
    return (
        <div id="avatar-status" className="flex min-w-xs flex-row h-14 py-2 px-1">
            <Avatar image={props.image}/>
            <Status title={props.title} subtitle={props.subtitle} time={props.time}/>
            <style jsx>{`
                // background-color: #00bfa5;
                // color: white
            `}
            </style>
        </div>
    );
}

AvatarStatus.propTypes = {
    image : PropTypes.string,
    title : PropTypes.string,
    subtitle : PropTypes.string,
    time : PropTypes.string,
}

const SearchButton = (props) => {
    return (
        <button className="h-12 w-8 p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
        </button>
    );
}

const ClipButton = (props) => {
    return (
        <button className="h-12 w-8 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M20.12 11.95l-6.58 6.59a5 5 0 1 1-7.08-7.07l6.59-6.6a3 3 0 0 1 4.24 4.25l-6.58 6.59a1 1 0 1 1-1.42-1.42l6.59-6.58a1 1 0 0 0-1.42-1.42l-6.58 6.59a3 3 0 0 0 4.24 4.24l6.59-6.58a5 5 0 0 0-7.08-7.08l-6.58 6.6a7 7 0 0 0 9.9 9.9l6.59-6.6a1 1 0 0 0-1.42-1.4z"/>
            </svg>
        </button>
    );
}

class ChatRoomHeader extends React.Component {
    render = () => {
        return (
            <div id="chat-room-header" className="shadow-md h-16 flex flex-row justify-between align-baseline">
            <div className="flex-1"><AvatarStatus {...this.props} /></div>
            <div className="flex flex-row my-3">
                <SearchButton />
                <ClipButton />
                <MoreButton />
            </div>

            <style jsx>{`
                #chat-room-header {
                    background-color:#f7f7f7;
                }
            `}</style>
            </div>
        );
    }
}

ChatRoomHeader.propTypes = {
    ...AvatarStatus.propTypes
}

export default ChatRoomHeader;