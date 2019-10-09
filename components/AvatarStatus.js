import Avatar from './Avatar';
import Status from './Status';
import PropTypes from 'prop-types';
import '../static/styles/tailwind.css';

const AvatarStatus = (props) => {
    return (
        <div id="avatar-status" className="flex bg-white min-w-xs flex-row shadow-md h-14 py-2 px-1">
            <Avatar image={props.image}/>
            <Status title={props.title} subtitle={props.subtitle} time={props.time}/>
            <style jsx>{`
                
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

export default AvatarStatus;