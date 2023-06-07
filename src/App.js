// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Nabbar';
import Card  from './components/Card';
import Vender from './components/Vender';
import Product from './components/Product';
import PublishRequirement from './components/PublishRequirement';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Card />
        <Vender />
        <Product />
        <PublishRequirement />
        
    </div>
  );
}

export default App;
