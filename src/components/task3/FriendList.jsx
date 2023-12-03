import s from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                return (
                    <li key={friend.id} className={s.friendItem}>
                    <span className={s.friendStatus
                    ? s.onLine
                    : s.offLine}>{friend.isOnline}</span>
                    <img
                      src={friend.avatar}
                      alt="Friend avatar"
                      className={s.friendAvatar}
                    />
                    <p className={s.friendName}>{friend.name}</p>
                  </li>
        );
            })}
        </ul>
    )
}