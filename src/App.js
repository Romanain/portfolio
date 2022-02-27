import './sass/App.scss';

import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import MyWork from './Components/MyWork';
import ContactMe from './Components/ContactMe';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Banner />
      <br />
      <AboutMe />
      <br />
      <MyWork />
      <br />
      <ContactMe />
    </div>
  );
}

export default App;