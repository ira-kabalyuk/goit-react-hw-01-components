import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'

import user from '../components/configs/user';
import data from '../components/configs/data';
import friends from '../components/configs/friends';
import transactions from '../components/configs/transactions';

export const App = () => {
  return (
    <div style={{
        padding: 24,
        backgroundColor: "#F9DBF7",
        color: '#000000',
      }}>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
