import styles from "./FriendList.module.scss";
import cx from 'classnames';


const FriendList = ({friends}) => {  

  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span className={cx(isOnline ? styles.online : styles.offline)}></span>
          <img className={styles.avatar} src={avatar} alt="User avatar"/>
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};


export default FriendList;