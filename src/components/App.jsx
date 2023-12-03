import user from '../assets/user.json';
import data from '../assets/data.json';
import { Statistics } from './task2/Statistics';
import { Profile } from './task1/Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
    </div>
  );
};
