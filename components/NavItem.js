import '../static/styles/tailwind.css';
import AvatarStatus from './AvatarStatus'
import Avatar from './Avatar';

class NavItem extends React.Component {
    render = () => {
        return (
            <div>
                <AvatarStatus {...this.props} />
            </div>
        );
    }
}

export default NavItem;