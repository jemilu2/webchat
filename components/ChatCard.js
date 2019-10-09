import '../static/styles/tailwind.css';
import PropTypes from 'prop-types';

class ChatCard extends React.Component {
    render = () => {
        const {message} = this.props || {};
        return (
            <div className="chat-card bg-white rounded-lg shadow m-2 flex p-3 flex-col max-w-md">
                <div className="header flex justify-between flex-row mb-2">
                    <p className="text-xs text-grey">{message.username}</p>
                </div>
                <div className="content flex-1 mb-2">
                    <p>{message.content}</p>
                </div>
                <div className="footer flex flex-row-reverse">
                    <span className="text-xs">{message.time}</span>
                </div>

                <style jsx>{`
                    p {
                        text-wrap:wrap;
                    }
                    .chat-card {
                        border-radius: 5px 30px 30px 30px;
                    }
                `}</style>
            </div>
        );
    }
}

ChatCard.propTypes = {
    message : PropTypes.object,
}

export default ChatCard;