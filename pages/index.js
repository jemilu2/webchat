
import '../static/styles/tailwind.css';
import React from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message:"",
            messages:[]
        }
    }

    componentDidMount() {
        if (!this.conn) {
            this.ws();
        }
    }


    changeHandler = (event) => {
        this.setState({message:event.target.value});
    }

    //sends message via ws connection
    talkHandler = () => {
        this.conn.send(this.state.message);
        this.setState({...this.state,message:""});
    }

    //establishes websocket connection and sets
    //handler for various connection events.
    ws = () => {
        let url = "ws://localhost:8080/ws"
        try {
            this.conn = new window.WebSocket(url);
            alert("ws connection established");
        } catch (error) {
            alert("Failed to establish ws connection");
        }
        this.conn.onclose = this.wsCloseHandler;

        this.conn.onmessage = this.onWsMessageHandler;
    }

    wsCloseHandler = () => {
        alert("websocket connection closed");
    }

    onWsMessageHandler = (event) => {
        var messages = event.data.split('\n');
        let new_messages = [...this.state.messages,...messages];
        this.setState({...this.state, messages:new_messages});
    }


    render = () => {
        return (
            <div className="max-w-xs mx-auto flex flex-col">
                <div id="room" className="flex-1">
                    {
                        this.state.messages.map((message,index)=><div key={index}>{message}</div>)
                    }
                </div>
                <div id="channel" className="flex">
                    <div>
                        <textarea value={this.state.message} onChange={this.changeHandler} id="sendbox" rows="1" className="flex-1 border-blue-dark border-solid border-2"></textarea>
                    </div>
                    <div>
                        <button onClick={this.talkHandler} className="px-5 py-3 bg-blue text-white rounded-sm">Talk</button>
                    </div>
                </div>

                <style jsx>{`
                    #room {
                        min-width:40rem;
                        min-height:90vh;
                        border: 1px solid blue;
                    }

                    #sendbox {
                        min-width:40rem;
                        padding:10px;
                    }

                    #channel {
                        max-width:40rem;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;