import PropTypes from 'prop-types';
import ChatCard from './ChatCard';
import '../static/styles/tailwind.css';



class MessageBoard extends React.Component {

    constructor(props) {
        super(props);
        this.log = React.createRef();
    }

    adjustHeight = () => {
        if(this.log.current === null) {
            return;
        }
        let log = this.log.current;
        log.scrollTop = log.clientHeight + 1000;
    }

    render = () => {
        this.adjustHeight();
        const {messages} = this.props || [];
        const {className} = this.props;
        return (
            <div id="message-board" className={"p-10 "+className} >
            <div ref={this.log}>
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
            </div>

            <style jsx>{`
                #message-board {
                    background-image:url(/static/images/whatsapp3.png);
                    background-repeat:no-repeat;
                    background-size:cover;
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

export default MessageBoard;