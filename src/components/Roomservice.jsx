import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Roomservice.css";

const menuItems = [
  {
    title: "Continental Breakfast",
    description: "Eggs, toast, fruit juice, and coffee.",
    price: "$12",
    image: "./food1.jpg"
  },
  {
    title: "Club Sandwich",
    description: "Triple-layer sandwich with chicken, cheese, and veggies.",
    price: "$10",
    image: "./food2.jpg"
  },
  {
    title: "Pasta Alfredo",
    description: "Creamy white sauce pasta with mushrooms and parmesan.",
    price: "$14",
    image: "./food3.jpg"
  },
  {
    title: "Grilled Chicken",
    description: "Marinated grilled chicken served with sautéed vegetables.",
    price: "$16",
    image: "./food4.jpg"
  },
  {
    title: "Biryani (Veg/Chicken)",
    description: "Authentic Indian spiced rice with raita.",
    price: "$13",
    image: "./food5.jpg"
  },

   {
    title: "Shrimp ",
    description: "Eggs, toast, fruit juice, and coffee.",
    price: "$12",
    image: "./food6.jpg"
  },
  {
    title: "Chicken strips",
    description: "Triple-layer sandwich with chicken, cheese, and veggies.",
    price: "$10",
    image: "./food7.jpg"
  },
  {
    title: "Chicken Wrap",
    description: "Creamy white sauce pasta with mushrooms and parmesan.",
    price: "$14",
    image: "./food8.jpg"
  },
  {
    title: "Chicken Burger",
    description: "Marinated grilled chicken served with sautéed vegetables.",
    price: "$16",
    image: "./food9.jpg"
  },
  {
    title: "Pizza",
    description: "Authentic Indian spiced rice with raita.",
    price: "$13",
    image: "./food10.jpg"
  }

];

const Roomservice = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="room-service-container">
      <motion.div
        className="room-service-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Room Service Menu</h1>
        <p>Order from your TV — comfort delivered to your room</p>
      </motion.div>

      <motion.div
        className="room-service-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            className="room-service-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.title} className="food-img" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="order-button"
              onClick={() => setSelectedItem(item)}
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Order Confirmed</h2>
              <p>You have ordered:</p>
              <strong>{selectedItem.title}</strong>
              <p>Total: {selectedItem.price}</p>
              <motion.button
                className="close-button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedItem(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Roomservice;
