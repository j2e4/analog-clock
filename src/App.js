import { RecoilRoot } from 'recoil';
import Clock from './components/Clock';

function App() {
  return (
    <RecoilRoot>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Clock />
      </div>
    </RecoilRoot>
  );
}

export default App;
