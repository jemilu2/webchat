import PropTypes from 'prop-types';
import {DefaultUserImage} from '../constants';
import '../public/static/styles/tailwind.css';

const style = `
h-12
w-12
rounded-full
`

const Avatar = (props) => {
    const image = props.image || DefaultUserImage;
    return (
        <img className={style} src={image} style={{color: "white"}} />
    );
}

Avatar.propTypes = {
    image : PropTypes.string,
};

export default Avatar;