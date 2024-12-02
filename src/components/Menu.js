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
      { name: 'Quinoa Oatmeal with Berries and Nuts', price: 120, description: 'A hearty bowl of quinoa oatmeal, topped with fresh berries, almond milk, and chia seeds.', img: 'https://amychaplin.com/wp-content/uploads/2010/01/quinoa-oatmeal.jpg' },
      { name: 'Fruit and Nut Porridge', price: 120, description: 'Warm porridge with fresh fruit and nuts; quinoa with berries, almond milk, and chia seeds.', img: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBubyUyMG9pbCUyMG5vJTIwYm9pbCUyMGZvb2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D' },
      { name: 'Chia Seed and Berry Oatmeal', price: 120, description: 'A nutritious bowl of oatmeal with chia seeds, almond milk, and fresh berries.', img: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Breakfast Quinoa Bowl', price: 120, description: 'A filling quinoa breakfast bowl with almond milk, chia seeds, and fresh fruit toppings.', img: 'https://weborder.aabsweets.com/order/_next/image?url=https%3A%2F%2Fweborder.aabsweets.com%2Fapi%2Fproducts%2F81.jpeg&w=1920&q=75' },
      { name: 'Mixed Berry Quinoa Porridge', price: 120, description: 'Quinoa porridge topped with a variety of fresh berries, almond milk, and chia seeds.', img: 'https://weborder.aabsweets.com/order/_next/image?url=https%3A%2F%2Fweborder.aabsweets.com%2Fapi%2Fproducts%2F23205.jpeg&w=1920&q=75' },
      { name: 'Nutrient-packed Quinoa Oatmeal', price: 120, description: 'A nutritious oatmeal made with quinoa, chia seeds, almond milk, and fresh fruits.', img: 'https://weborder.aabsweets.com/order/_next/image?url=https%3A%2F%2Fweborder.aabsweets.com%2Fapi%2Fproducts%2F24326.jpeg&w=1920&q=75' },
      { name: 'Vibrant Porridge with Nuts and Fruit', price: 120, description: 'A delicious mix of quinoa and oats with fresh fruits, nuts, and chia seeds.', img: 'https://weborder.aabsweets.com/order/_next/image?url=https%3A%2F%2Fweborder.aabsweets.com%2Fapi%2Fproducts%2F23204.jpeg&w=1920&q=75' },
      { name: 'Oatmeal with Fruit and Nuts', price: 120, description: 'Oatmeal enriched with fruits, nuts, and chia seeds for a healthy breakfast.', img: 'https://weborder.aabsweets.com/order/_next/image?url=https%3A%2F%2Fweborder.aabsweets.com%2Fapi%2Fproducts%2F22260.jpeg&w=1920&q=75' },
      { name: 'Chia Oatmeal with Fresh Fruits', price: 120, description: 'Chia seeds, fresh fruit, and quinoa combined into a satisfying breakfast bowl.', img: 'https://weborder.aabsweets.com/order/_next/image?url=https%3A%2F%2Fweborder.aabsweets.com%2Fapi%2Fproducts%2F8241.jpeg&w=1920&q=75' },
    ],
    lunch: [
      { name: 'Brown Rice with Roasted Vegetables', price: 112, description: 'A healthy brown rice bowl with roasted vegetables, chickpea salad, and a lemon-tahini dressing.', img: 'https://i.pinimg.com/736x/ad/6c/cf/ad6ccfd7fefddceccd155256ce057f02.jpg' },
      { name: 'Chickpea Salad and Brown Rice', price: 112, description: 'A light, flavorful brown rice bowl with roasted veggies and a refreshing chickpea salad.', img: 'https://img.freepik.com/premium-photo/black-chickpea-chaat-kala-chana-chat-recipe-is-popular-snack-recipe-from-india-served-bowl-selective-focus_466689-19355.jpg?w=996' },
      { name: 'Mixed Greens with Brown Rice', price: 112, description: 'A hearty meal of brown rice with a chickpea salad, mixed greens, cucumbers, and a lemon-tahini vinaigrette.', img: 'https://img.freepik.com/premium-photo/stewed-cabbage-with-mushrooms-tomato-sauce_2829-10288.jpg?w=740' },
      { name: 'Cabbage and Mushrooms with Rice', price: 112, description: 'A nutritious bowl of stewed cabbage and mushrooms paired with brown rice.', img: 'https://img.freepik.com/premium-photo/stewed-cabbage-with-mushrooms-tomato-sauce_2829-10288.jpg?w=740' },
      { name: 'Vegetable Stir Fry with Brown Rice', price: 112, description: 'Brown rice with roasted vegetables, topped with a tangy lemon-tahini dressing.', img: 'https://img.freepik.com/premium-photo/homemade-kothu-parotta-paratha-stir-fried-leftover-chapati-masala-fodnichi-poli-marathi-served-bowl-plate-with-curd-hot-tea-selective-focus_466689-30885.jpg?w=996' },
      { name: 'Tomato and Zucchini Soup', price: 112, description: 'A rich tomato and zucchini vegetable soup with herbs, served alongside brown rice and vegetables.', img: 'https://img.freepik.com/free-photo/tomato-zucchini-vegetable-soup-with-herbs-black-bowl-books_114579-57.jpg?t=st=1733068449~exp=1733072049~hmac=ef934b0407dc146cb0a333cce3bb031af992b2de6d86b2e0dceb0f82ac0ae998&w=360' },
    ],
    dinner: [
      { name: 'Stuffed Bell Peppers with Quinoa', price: 1500, description: 'Bell peppers stuffed with quinoa and black beans, stir-fried vegetables with tofu and ginger.', img: 'https://krollskorner.com/wp-content/uploads/2019/08/Quinoabellpepblog5-1024x1536.jpg' },
      { name: 'Stuffed Bell Peppers with Black Beans', price: 1500, description: 'Bell peppers filled with quinoa and black beans, stir-fried tofu, ginger, and garlic, all oil-free.', img: 'https://img.freepik.com/free-photo/homemade-chicken-vegetable-soup-overhead-view-book-table_114579-261.jpg?t=st=1733068530~exp=1733072130~hmac=15045d8000ec17c10f7608d2f6cb9489d37c7ca60c48166d2c1c1503bb63a20c&w=996' },
      { name: 'Quinoa and Tofu Stir Fry', price: 1500, description: 'Stir-fried vegetables and tofu with quinoa, bell peppers, and black beans, all prepared without oil.', img: 'https://img.freepik.com/free-photo/lentil-soup-with-mixed-ingredients-herbs-white-bowl-with-spoon_114579-3083.jpg?t=st=1733068564~exp=1733072164~hmac=74ecdf9c9122b34d9bbe7b34b52260aed14a98fad0a15feb13ae476d09fa0859&w=996' },
      { name: 'Lentil Soup with Mixed Herbs', price: 1500, description: 'A warming lentil soup with mixed herbs, perfect for pairing with stuffed bell peppers.', img: 'https://img.freepik.com/free-photo/lentil-soup-served-white-bowl-with-lemons-bread_140725-10591.jpg?t=st=1733068692~exp=1733072292~hmac=52a209fe5b9f27ba798518d9b50cd88910331e5f90bbcdc0b4b929d32ffc3325&w=996' },
    ],
    starters: [
      { name: 'Vegan Chocolate Cake', price: 600, description: 'Rich and moist vegan chocolate cake, topped with a smooth chocolate ganache.', img: 'https://img.freepik.com/free-photo/from-assorted-baked-with-baklava-baklava-sheki-flowers-smoked-fish_176474-2605.jpg?t=st=1733069501~exp=1733073101~hmac=81f7e415f2d0cc6e5887548083199e5cdea89492f70be0b8516b700d0c791a92&w=996' },
      { name: 'Vegan Lemon Cake', price: 600, description: 'Zesty and refreshing vegan lemon cake, topped with a tangy lemon glaze.', img: 'https://img.freepik.com/free-photo/plate-assorted-cookies-encircled-by-popcorn-candy-wooden-board-marble-background-high-quality-photo_114579-53244.jpg?t=st=1733069519~exp=1733073119~hmac=445bdce5db2523dabde8aa34e1d38380968bab5796a60351502923b5de7bde56&w=996' },
      { name: 'Vegan Carrot Cake', price: 600, description: 'Sweet and spicy vegan carrot cake with a creamy, dairy-free frosting.', img: 'https://img.freepik.com/free-photo/healthy-sandwich-green-apple-rounds-with-peanut-butter-red-currant-pecan-nuts-grey-concrete-top-view_114579-3867.jpg?t=st=1733069451~exp=1733073051~hmac=ca342a8a2ffea9dc0a8a536ebb16e5049fef2898a9d18b2238c0d0eec81d1f81&w=740' },
      { name: 'Vegan Chocolate Chip Cookies', price: 600, description: 'Soft and chewy vegan chocolate chip cookies with a crispy edge.', img: 'https://img.freepik.com/free-photo/pate-with-leaves-designed-vegetable-pate-inside-white-plate_140725-14855.jpg?t=st=1733069027~exp=1733072627~hmac=0bfb387b849d8b006f261813f9899dde08d9676f379d9ee900862da5c7334b23&w=360' },
    ],
    Soups: [
      {
        name: 'Avocado Bliss Soup',
        price: 120,
        description: 'A smooth and creamy avocado delight, this soup is rich in natural flavors and perfect for a refreshing start.',
        img: 'https://img.freepik.com/free-photo/flat-lay-homemade-soup-pasta_23-2148452815.jpg?t=st=1733114692~exp=1733118292~hmac=4813c649a42bd07f35b08bd31d7eece907f0e00b95e7b7cc820be8a6a3880ce2&w=1380',
      },
      {
        name: 'Garden Fresh Vegetable Soup',
        price: 90,
        description: 'Bursting with the essence of freshly picked vegetables, this soup brings a hearty and wholesome flavor to the table.',
        img: 'https://img.freepik.com/free-photo/top-view-delicious-vegetable-soup-inside-plate-green-background-food-vegetables-ingredients-soup-product-meal_140725-72446.jpg?t=st=1733114774~exp=1733118374~hmac=25ccba43173a093c9514785a5f65dcaa67e15f3994a0410f8d1625089930083f&w=996',
      },
      {
        name: 'Hearty Lentil Soup',
        price: 110,
        description: 'Savor the warmth of rich lentils, paired with aromatic spices and fresh herbs for a filling, soul-comforting meal.',
        img: 'https://img.freepik.com/free-photo/lenitl-soup-with-spices-rosemary_114579-4637.jpg?t=st=1733114807~exp=1733118407~hmac=b61a6fdfa2b334e0ef5d7a953b9a09bd61e0dbf8b3badc9161774786e1a4ebec&w=740',
      },
      {
        name: 'Chicken Broth Delight',
        price: 150,
        description: 'A classic chicken broth soup infused with fresh vegetables and delicate spices for a light yet flavorful experience.',
        img: 'https://img.freepik.com/free-photo/chicken-broth-vegetable-soup-disposable-cup-bowl-served-with-green-vegetables_114579-905.jpg?t=st=1733114948~exp=1733118548~hmac=566239b87db98820861072fb2853920833afbce0f9669569a39be591f00ed0f1&w=900',
      },
      {
        name: 'Mixed Herb Lentil Soup',
        price: 130,
        description: 'A perfect mix of lentils and earthy herbs served in a wholesome soup, delivering warmth and richness with every spoon.',
        img: 'https://img.freepik.com/free-photo/lentil-soup-with-mixed-ingredients-herbs-white-bowl-with-spoon_114579-3083.jpg?t=st=1733115369~exp=1733118969~hmac=63db7a0684ec738f2cc8cf14faba574700ac50b44df0ff42af62e6319148361f&w=996',
      },
      {
        name: 'Crunchy Herb Lentil Soup',
        price: 140,
        description: 'Delight in the crispy topping of crackers on this herb-infused lentil soup, perfect for a delicious and satisfying meal.',
        img: 'https://img.freepik.com/free-photo/lentil-soup-with-chopped-herbs-crackers_114579-3534.jpg?t=st=1733115431~exp=1733119031~hmac=69e37275532809a201ae758ad1e79bca270b39e43a455a6519457b428e576cd4&w=900',
      },  
    ]
  };

  // Handle adding item to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); // Add item to cart
  };

  return (
    <div>
        <Navbar />
        <Cart cartItems={cartItems} setCartItems={setCartItems} handleAddToCart={handleAddToCart} />

      <div className="container-fluid  bg-danger-subtle">
        <h2 className="text-center mb-4">Our Menu</h2>

        {/* Meal Type Selection */}
        <div className="d-flex justify-content-center mb-5">
          {['breakfast', 'lunch', 'dinner', 'starters', 'Soups'].map((section) => (
            <button
              key={section}
              className="btn btn-outline-danger mx-2"
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
                        className="btn btn-outline-dark"
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
      
    </div>
  );
};

export default Menu;