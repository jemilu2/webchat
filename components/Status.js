import '../static/styles/tailwind.css';

const Status = (props) => {
    const time = props.time || ""
    return (
        <div id="status" className="p-2 flex flex-row">
            <div className="flex-1 min-w-xs">
                <p className="text-lg">{props.title}</p>
                <p className="text-grey-dark">{props.subtitle}</p>
            </div>
            <div>
                <span className="text-grey-dark ml-12 text-sm">{time}</span>
            </div>
            <style jsx>{`
                #status {
                    // background-color: #f7f7f7;
                }

                #status:hover {
                    cursor:pointer;
                }

                p {
                    margin:0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    display:block;
                    max-width:9rem;
                }
            `}</style>
        </div>
    )
}

export default Status;