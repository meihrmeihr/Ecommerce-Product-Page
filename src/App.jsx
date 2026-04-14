import Countcontext from "./components/context/Countcontext";
import Home from "./components/Home";
const App = () => {
  return (
    <main className='min-h-screen font-kumbh-sans'>
      <Countcontext>
        <Home />
      </Countcontext>
    </main>
  );
};

export default App;