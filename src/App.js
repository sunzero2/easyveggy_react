import './App.css';
import './css/style.css';
import Header from './component/Header';
import IngredientCard from './component/IngredientCard';
import Menu from './component/Menu';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <IngredientCard />
      <Menu />
      <Footer />
      <script src="./js/jqBootstrapValidation.js" crossOrigin="true"></script>
      <script src="./js/contact_me.js" crossOrigin="true"></script>
      <script src="./js/scripts.js" crossOrigin="true"></script>
      <script src="./js/include/top.js" crossOrigin="true"></script>
      <script src="./js/index/index.js" crossOrigin="true"></script>
    </div>
  );
}

export default App;
