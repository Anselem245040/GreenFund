import { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { Sidebar } from "../common/Sidebar";
import "./products.css";
import { fetchProducts } from "../api/productsApi";

export const Products = ({ name }) => {
  const [products, setProducts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("all");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuClose = () => {
    setIsMenuOpen(false);
  };

  const searchItemAndSortItem = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "all") return a.name.localeCompare(b.name);
      if (sortType === "price") return a.price.localeCompare(b.price);
      return 0;
    });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className={`product ${isMenuOpen ? "blur" : ""}`}>
      <Sidebar name={name} isMenuOpen={isMenuOpen} onClose={menuClose} />
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className='product-container'>
        {/* Filters & Search */}
        <div className='product-controls'>
          {/* Search Input */}
          <div className='search-wrapper'>
            <i className='ri-search-line'></i>
            <input
              type='text'
              placeholder='Search products...'
              className='search-input'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Dropdowns */}
          <div className='filters-group'>
            {/* Show All Products */}
            <div className='filter-dropdown'>
              <label>Products</label>
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value='all'>All Products</option>
                <option value='insurance'>Insurance</option>
                <option value='mortgage'>Mortgage</option>
                <option value='loan'>Loan</option>
              </select>
            </div>

            {/* Sort by Price */}
            <div className='filter-dropdown'>
              <label>Price</label>
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value='all'>All Prices</option>
                <option value='low'>Low prices</option>
                <option value='high'>High prices</option>
              </select>
            </div>

            {/* Sort by Type */}
            <div className='filter-dropdown'>
              <label>Type</label>
              <select>
                <option value='all'>All Types</option>
                <option value='basic'>Basic Coverage</option>
                <option value='premium'>Premium Coverage</option>
                <option value='elite'>Elite Coverage</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className='products-grid'>
          {searchItemAndSortItem.length > 0 ? (
            searchItemAndSortItem.map((product) => (
              <div key={product.id} className='product-card'>
                <div className='product-image-wrapper'>
                  <img src={product.image} alt={product.name} />
                  <div className='product-badge'>{product.rate}</div>
                </div>

                <div className='product-content'>
                  <h3 className='product-name'>{product.name}</h3>
                  <p className='product-description'>{product.description}</p>

                  <div className='product-footer'>
                    <span className='product-price'>${product.price}</span>
                    <button className='add-to-cart-btn'>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='empty-state'>
              <p>No products available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
