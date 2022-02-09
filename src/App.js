import './App.css';
import Address from './Profile/Address';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
