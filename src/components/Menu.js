import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing Bootstrap CSS
import Cart from './Cart'; // Import the Cart component
import Navbar from './Navbar';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('breakfast'); // Default section 'breakfast'
  const [cartItems, setCartItems] = useState([]); // Manage cart items state

  // Sample data for the menu items
  const menuItems = {
    breakfast: [
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBubyUyMG9pbCUyMG5vJTIwYm9pbCUyMGZvb2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Porridge with fresh fruit and nuts', price: 120, description: 'Porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
    ],
    lunch: [
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Brown rice bowls with roasted vegetables and spices; ', price: 112, description: 'Brown rice bowls with roasted vegetables and spices; chickpea salads with mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
    ],
    dinner: [
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Bell peppers stuffed with quinoa and black beans', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans; stir-fried veggies with tofu, ginger, and garlic—all prepared without oil.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
    ]
  };

  // Handle adding item to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); // Add item to cart
  };

  return (
    <div>
        <Navbar />

      <div className="container-fluid  bg-primary-subtle">
        <h2 className="text-center mb-4">Our Menu</h2>

        {/* Meal Type Selection */}
        <div className="d-flex justify-content-center mb-5">
          {['breakfast', 'lunch', 'dinner'].map((section) => (
            <button
              key={section}
              className="btn btn-outline-primary mx-2"
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu items for selected category */}
        <div className="row">
          {menuItems[activeSection] ? (
            menuItems[activeSection].map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img src={item.img} className="card-img-top" alt={item.name} width={'100px'}  height={'400px'} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5">${item.price}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(item)} // Add item to cart
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Menu for this category is not available.</p> // Fallback message when section is invalid
          )}
        </div>
      </div>
      
      {/* Pass handleAddToCart to Cart component */}
      <Cart cartItems={cartItems} setCartItems={setCartItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Menu;