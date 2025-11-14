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
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

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
      if (sortType === "low") return a.price - b.price;
      if (sortType === "high") return b.price - a.price;
      return 0;
    });

  const openModal = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalProduct(null);
  };

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
              <div
                onClick={() => openModal(product)}
                key={product.id}
                className='product-card'
              >
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

        {showModal && modalProduct && (
          <div className='modal-overlay' onClick={closeModal}>
            <div
              className='modal-container'
              onClick={(e) => e.stopPropagation()}
              role='dialog'
              aria-modal='true'
            >
              <button
                className='modal-close'
                onClick={closeModal}
                aria-label='Close'
              >
                <i className='ri-close-line'></i>
              </button>

              <div className='modal-content'>
                <div className='modal-image'>
                  <img src={modalProduct.image} alt={modalProduct.name} />
                  <div className='modal-badge'>{modalProduct.rate}</div>
                </div>

                <div className='modal-body'>
                  <h3 className='modal-title'>{modalProduct.name}</h3>
                  <p className='modal-desc'>{modalProduct.description}</p>

                  <div className='modal-footer'>
                    <span className='modal-price'>${modalProduct.price}</span>
                    <button className='add-to-cart-btn'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
