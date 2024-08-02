import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={css.wrapper}>
            <div>
                <img className= {css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.username}>{name}</p>
                <p className={css.info}>@{tag}</p>
                <p className={css.info}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.key}>Followers</span>
                    <span className={css.value}>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.key}>Views</span>
                    <span className={css.value}>{views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.key}>Likes</span>
                    <span className={css.value}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;