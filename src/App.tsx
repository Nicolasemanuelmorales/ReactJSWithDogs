import Routes from '../src/routes/routes';
import Wrapper from './components/wrapper/wrapper.component';

function App() {
  return <Wrapper child={<Routes />} />;
}

export default App;
