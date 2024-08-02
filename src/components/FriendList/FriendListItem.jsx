import clsx from 'clsx';
import css from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline, }) => {
    return (
        <div className={css.itemWrapper}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className= {clsx({
                [css.online]: isOnline === true,
                [css.offline]: isOnline === false
            })}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}

export default FriendListItem