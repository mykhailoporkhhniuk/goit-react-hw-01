import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <li className={css.friendListItem} key={id}>
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default FriendList