import '../static/styles/tailwind.css';
import ChatRoomHeader from './ChatRoomHeader';
import MessageBoard from './MessageBoard';
import MessengerBar from './MessengerBar';
import uuid from 'uuid/v4';
import { withRouter } from 'next/router'


class ChatRoom extends React.Component {

    constructor(props) {
        super(props);
        this.username = ""
        this.state = {
            messages : [],
            author:uuid(),
        }
    }

    participants = () => {
        const participants = [this.state.author];
        for (let i=0;i<this.state.messages.length;i++) {
            let message = this.state.messages[i];
            if (participants.includes(message["author"])) {
                continue
            } else {
                participants.push(message["author"]);
            }
        }
        return participants;
    }

    componentDidMount() {
        this.username = window.sessionStorage.getItem("name")
        if (this.username === null) {
            alert("Redirecting to login...");
            this.props.router.push("/");
        }
        if (!this.conn) {
            this.ws();
        }
    }

    //establishes websocket connection and sets
    //handler for various connection events.
    ws = () => {
        let url = "ws://localhost:5000/ws"
        try {
            this.conn = new window.WebSocket(url);
            console.log("ws connection established");
        } catch (error) {
            console.log("Failed to establish ws connection");
        }
        this.conn.onclose = this.wsCloseHandler;

        this.conn.onmessage = this.onWsMessageHandler;
    }

    wsCloseHandler = () => {
        console.log("websocket connection closed");
    }

    onWsMessageHandler = (event) => {
        var messages = event.data.split('\n').map((message)=>{
            let jsonMessage = JSON.parse(message);
            if (jsonMessage.author === this.state.author) {
                jsonMessage["own"] = true;
            } else {
                jsonMessage["own"] = false;
            }
            return jsonMessage;
        });
        let new_messages = [...this.state.messages,...messages];
        this.setState({...this.state, messages:new_messages});
    }

    makeMessage = (text) => {
        return {
            author:this.state.author,
            content : text,
            time : new Date().getHours().toString() + ":" + new Date().getMinutes().toString(),
            username: this.username || ""
        }
    }

    sendHandler = (message) => {
        this.conn.send(JSON.stringify(this.makeMessage(message)));
    }

    render = () => {
        const subtitle = this.participants().length.toString() + " online"
        return (
            <div className="flex flex-col">
                <ChatRoomHeader 
                    title={this.username} 
                    subtitle={subtitle} />
                <MessageBoard messages={this.state.messages} />
                <MessengerBar onSend={this.sendHandler} />
            </div>
        );
    }
}

export default withRouter(ChatRoom);