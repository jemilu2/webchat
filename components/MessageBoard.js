import PropTypes from 'prop-types';
import ChatCard from './ChatCard';
import '../static/styles/tailwind.css';



class MessageBoard extends React.Component {
    render = () => {
        const {messages} = this.props || [];
        return (
            <div id="message-board" className="p-10">
            
            {
                messages.map((message,index)=>{
                    const card = <ChatCard message={message} />
                    if (message.own) {
                        return (
                            <div key={index} className="flex flex-row justify-end">
                                {card}
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="flex flex-row justify-start">
                                {card}
                            </div>
                        );
                    }
                })
            }

            <style jsx>{`
                #message-board {
                    background-image:url(/static/images/whatsapp3.png);
                    background-repeat:no-repeat;
                    background-size:cover;
                    height:100vh;
                    max-height:83vh;
                    overflow-y: scroll;
                    overflow-x:hidden;
                }

                

                #message-board::-webkit-scrollbar-track{
                    //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    background-color: white;
                }

                #message-board::-webkit-scrollbar
                {
                    width: 4px;
                    background-color: white;
                }

                #message-board::-webkit-scrollbar-thumb
                {
                    background-color: #8795a1;
                }
            `}
            </style>
            </div>
        );
    }
}

MessageBoard.propTypes = {
    messages : PropTypes.array,
}

// background-image: url("photographer.jpg"); /* The image used */
//   background-color: #cccccc; /* Used if the image is unavailable */
//   height: 500px; /* You must set a specified height */
//   background-position: center; /* Center the image */
//   background-repeat: no-repeat; /* Do not repeat the image */
//   background-size: cover; /* Resize the background image to cover the entire container */


export default MessageBoard;