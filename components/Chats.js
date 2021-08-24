import '../public/static/styles/tailwind.css';
import AvatarStatus from './AvatarStatus';

const chats = [
    {title:"MTNGH Open Api Support",time:"21:33",subtitle:"+233 55 766 2638"},
    {title:"Adonai",time:"17:57",subtitle:"Yeah"},
    {title:"Jobs Portal Project Team",time:"05:12",subtitle:"Thubs Up"},
    {title:"MTNGH Open Api Support",time:"21:33",subtitle:"+233 55 766 2638"},
    {title:"MTNGH Open Api Support",time:"21:33",subtitle:"+233 55 766 2638"},
    {title:"MTNGH Open Api Support",time:"21:33",subtitle:"+233 55 766 2638"},
    {title:"MTNGH Open Api Support",time:"21:33",subtitle:"+233 55 766 2638"},
    {title:"MTNGH Open Api Support",time:"21:33",subtitle:"+233 55 766 2638"},
]

class Chats extends React.Component {
    render = () => {
        return (
            <div className="max-w-xs bg-white" id="chats">
            {
                chats.map((chat,index)=><AvatarStatus key={index} {...chat} />)
            }
            {
                chats.map((chat,index)=><AvatarStatus key={index} {...chat} />)
            }

            <style jsx>{`
                #chats {
                    max-height:35rem;
                    overflow-y: scroll;
                    overflow-x:hidden;
                }

                #chats::-webkit-scrollbar-track{
                    //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    background-color: white;
                }

                #chats::-webkit-scrollbar
                {
                    width: 4px;
                    background-color: white;
                }

                #chats::-webkit-scrollbar-thumb
                {
                    background-color: #8795a1;
                }
            `}</style>
            </div>
        );
    }
}



export default Chats;