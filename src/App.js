
import './App.css';
import ProfilePhoto from './companent/profile/profilrphoto';
import FullName from './companent/profile/fullname';
import Adress from './companent/profile/adress';

function App() {
  return (
    <div className="App">
    <FullName/>
    <ProfilePhoto/>
    <Adress/>
    </div>
  );
}

export default App;
