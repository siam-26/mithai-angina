import Categories from './Pages/Categories/Categories';
import './App.css';
import Our_Best_Products from './Pages/Our_Best_Products/Our_Best_Products';

const App = () => {
  return (
    <div className='App'>
      <Our_Best_Products/>
      <Categories />
    </div>
  )
}

export default App