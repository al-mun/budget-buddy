import './App.css';
import React, {useState} from "react"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from "./components/Categories"
import Menu from "./components/Menu"
import items from "./components/data"

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

//useState for the menuItems
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {

    //if category is all, return all of the menu items
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };



  return (
    <div className="App">
      <Nav></Nav>
      <Hero/>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Recipes</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems}/>
          {/* need to pass in the selected item to modal */}
          
        </section>
      </main>
    </div>
  );
}

export default App;
