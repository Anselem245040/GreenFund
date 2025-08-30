import { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { Sidebar } from "../common/Sidebar";
import axios from "axios";
import "./insurance.css";

export const Insurance = ({ name }) => {
  const [products, setProducts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={`insurance ${isMenuOpen ? "blur" : ""}`}>
      <Sidebar name={name} isMenuOpen={isMenuOpen} onClose={menuClose} />
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className='insurance-products'>
        {products.map((product) => (
          <div
            key={product.id}
            className={`insurance-card ${isMenuOpen ? "blur" : ""}`}
          >
            <div className='insurance-card-img'>
              <img src={product.image} alt={product.image} />
            </div>
            <div className='insurance-card-details'>
              <div className='insurance-header'>
                <h3>{product.name}</h3>
                <span className='insurance-price'>{product.price}</span>
              </div>
              <span className='insurance-rate'>{product.rate}</span>
              <p className='insurance-description'>{product.description}</p>
              <button className='add-btn'>Add Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
