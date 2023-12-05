import s from './FriendList.module.css';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li key={id} className={s.friendItem}>
            <span style={{ backgroundColor: isOnline ? "green" : "red" }} className={s.friendStatus}></span>
            <img
                    src={avatar}
                    alt="Friend avatar"
                    className={s.friendAvatar}
            />
            <p className={s.friendName}>{name}</p>
        </li>
    )
}