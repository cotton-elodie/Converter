// == Import
import Currencies from '../Currencies/Currencies';
import Header from '../Header/Header';
import './styles.scss';
import data from '../../data/currencies'

// == Composant
const App = () => (
  <div className="app">
    <Header/>
    <Currencies currencies={data}/>
  </div>
);

// == Export
export default App;
