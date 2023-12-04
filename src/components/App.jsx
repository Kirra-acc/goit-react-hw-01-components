import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import { TransactionHistory } from './task4/TransactionHistory';
import { FriendList } from './task3/FriendList';
import { Statistics } from './task2/Statistics';
import { Profile } from './task1/Profile';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 

      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes} />

    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions}/>
    </div>
  );
};
