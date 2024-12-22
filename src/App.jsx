import Categories from './Pages/Categories/Categories';
import './App.css';
import Our_Best_Products from './Pages/Our_Best_Products/Our_Best_Products';
import Product_Details from './Pages/Product_Details/Product_Details';
import Blog_Details from './Pages/Blogs/Blog_Details/Blog_Details';

const App = () => {
  return (
    <div className='App'>
      <Blog_Details/>
      {/* <Product_Details/> */}
      {/* <Our_Best_Products/>
      <Categories /> */}
    </div>
  )
}

export default App