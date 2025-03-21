import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Search, Filter, SlidersHorizontal, ChevronDown, Star, Tag } from "lucide-react";


const products = [
  { id: 1, name: "Smartphone X", price: "$699", image: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_1280.jpg", rating: 4.5, discount: 10 },
  { id: 2, name: "Wireless Headphones", price: "$149", image: "https://cdn.pixabay.com/photo/2020/06/09/14/57/headphones-5278696_1280.png", rating: 4.8, discount: 5 },
  { id: 3, name: "Gaming Mouse", price: "$99", image: "https://cdn.pixabay.com/photo/2020/07/18/17/51/mouse-5417888_1280.jpg", rating: 4.2, discount: 0 },
  { id: 4, name: "Mechanical Keyboard", price: "$129", image: "https://cdn.pixabay.com/photo/2016/08/29/15/48/keyboard-1628544_1280.jpg", rating: 4.7, discount: 15 },
  { id: 5, name: "Smartwatch", price: "$199", image: "https://cdn.pixabay.com/photo/2017/06/01/00/53/apple-2362149_1280.jpg", rating: 4.4, discount: 0 },
  { id: 6, name: "Tablet Pro", price: "$499", image: "https://cdn.pixabay.com/photo/2014/11/12/15/48/apple-528461_1280.jpg", rating: 4.6, discount: 8 },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Categorías para filtrado
  const categories = ["Todos", "Smartphones", "Accesorios", "Audio", "Computación", "Gaming"];

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      
      {/* Banner promocional superior */}
      <div className="bg-primary bg-gradient position-relative overflow-hidden">
        <div className="container py-4 text-center text-white position-relative" style={{ zIndex: 10 }}>
          <h3 className="fw-bold">¡OFERTA ESPECIAL!</h3>
          <p className="mt-1">Hasta 30% de descuento en productos seleccionados</p>
        </div>
       
        
      </div>
      
      <div className="container py-4">
        {/* Breadcrumb con mejor estilo */}
        <div className="d-flex align-items-center small text-secondary mb-4 bg-white p-2 rounded shadow-sm">
          <a href="/" className="text-decoration-none text-secondary hover-primary">Inicio</a>
          <span className="mx-2">›</span>
          <span className="text-primary fw-medium">Catálogo de Productos</span>
        </div>
        
        {/* Título de la página con estilo mejorado */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 pb-3 border-bottom">
          <div>
            <h2 className="display-6 fw-bold text-dark mb-1">Catálogo de Productos</h2>
            <p className="text-secondary">Descubre nuestra selección de productos tecnológicos</p>
          </div>
          <div className="mt-3 mt-md-0 px-3 py-2 bg-light rounded-pill text-primary fw-medium d-flex align-items-center">
            <Tag className="me-2" size={16} />
            {filteredProducts.length} productos encontrados
          </div>
        </div>
        
        <div className="row g-4">
          {/* Filtros laterales con estilo mejorado */}
          <div className="d-none d-md-block col-md-3 col-lg-3">
            <div className="bg-white shadow rounded p-3 sticky-top" style={{ top: '7rem' }}>
              <h3 className="fw-bold mb-3 text-dark d-flex align-items-center">
                <Filter className="me-2" size={20} />
                Filtros
              </h3>
              
              {/* Categorías */}
              <div className="mb-4">
                <h4 className="fw-medium text-dark mb-3 pb-2 border-bottom">Categorías</h4>
                <ul className="list-unstyled">
                  {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                      <button 
                        className={`btn btn-sm w-100 text-start py-2 px-3 rounded ${
                          activeCategory === category 
                            ? "bg-primary bg-opacity-25 text-primary fw-medium" 
                            : "text-secondary hover-bg-light"
                        }`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Rango de precios con estilo mejorado */}
              <div className="mb-4">
                <h4 className="fw-medium text-dark mb-3 pb-2 border-bottom">Precio</h4>
                <div className="px-2">
                  <div className="mb-4 position-relative">
                    <div className="progress" style={{ height: '0.5rem' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '60%', marginLeft: '20%' }}></div>
                    </div>
                    <div className="position-absolute start-50 top-50 translate-middle" style={{ left: '20%', width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: 'white', border: '2px solid #0d6efd', cursor: 'pointer' }}></div>
                    <div className="position-absolute start-50 top-50 translate-middle" style={{ left: '80%', width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: 'white', border: '2px solid #0d6efd', cursor: 'pointer' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="px-3 py-1 bg-light rounded text-secondary small">$0</div>
                    <div className="px-3 py-1 bg-light rounded text-secondary small">$1000</div>
                  </div>
                </div>
              </div>
              
              {/* Filtro de valoración */}
              <div className="mb-4">
                <h4 className="fw-medium text-dark mb-3 pb-2 border-bottom">Valoración</h4>
                <ul className="list-unstyled">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <li key={rating} className="mb-2">
                      <div className="form-check d-flex align-items-center">
                        <input type="checkbox" className="form-check-input me-2" id={`rating-${rating}`} />
                        <label className="form-check-label d-flex align-items-center" htmlFor={`rating-${rating}`}>
                          <div className="text-warning me-2">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} size={16} className="fill-warning" />
                            ))}
                            {[...Array(5-rating)].map((_, i) => (
                              <Star key={i} size={16} className="text-muted" />
                            ))}
                          </div>
                          <span className="text-secondary small">o más</span>
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Botón aplicar filtros */}
              <button className="btn btn-primary w-100 py-2 fw-medium shadow">
                Aplicar filtros
              </button>
            </div>
          </div>
          
          {/* Área principal de productos */}
          <div className="col-md-9 col-lg-9">
            {/* Barra de control con estilo mejorado */}
            <div className="bg-white shadow rounded p-3 mb-4">
              <div className="row g-3 align-items-center">
                {/* Buscador */}
                <div className="col-12 col-md position-relative">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="form-control form-control-lg ps-5"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="position-absolute start-0 top-50 translate-middle-y ms-3 text-secondary" size={20} />
                </div>
                
                {/* Botón de filtros (móvil) */}
                <div className="col-12 col-md-auto d-md-none">
                  <button 
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center w-100"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal size={20} className="me-2" />
                    <span>Filtros</span>
                  </button>
                </div>
                
                {/* Ordenar por */}
                <div className="col-md-auto d-none d-md-block position-relative">
                  <select className="form-select">
                    <option>Más relevantes</option>
                    <option>Precio: de menor a mayor</option>
                    <option>Precio: de mayor a menor</option>
                    <option>Mejor valorados</option>
                    <option>Más recientes</option>
                  </select>
                </div>
              </div>
              
              {/* Filtros móviles mejorados */}
              {showFilters && (
                <div className="d-md-none mt-3 pt-3 border-top">
                  {/* Categorías */}
                  <div className="mb-3">
                    <h4 className="fw-medium text-dark mb-2">Categorías</h4>
                    <div className="d-flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <button 
                          key={index}
                          className={`btn btn-sm rounded-pill ${
                            activeCategory === category 
                              ? "btn-primary bg-opacity-25 text-primary fw-medium" 
                              : "btn-light text-secondary"
                          }`}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Rango de precios */}
                  <div className="mb-3">
                    <h4 className="fw-medium text-dark mb-2">Rango de precio</h4>
                    <div className="d-flex align-items-center">
                      <input
                        type="number"
                        placeholder="Min"
                        className="form-control form-control-sm me-2"
                      />
                      <span>a</span>
                      <input
                        type="number"
                        placeholder="Max"
                        className="form-control form-control-sm ms-2"
                      />
                    </div>
                  </div>
                  
                  {/* Ordenar por */}
                  <div className="mb-3">
                    <h4 className="fw-medium text-dark mb-2">Ordenar por</h4>
                    <select className="form-select">
                      <option>Más relevantes</option>
                      <option>Precio: de menor a mayor</option>
                      <option>Precio: de mayor a menor</option>
                      <option>Mejor valorados</option>
                      <option>Más recientes</option>
                    </select>
                  </div>
                  
                  <button className="btn btn-primary w-100 py-2 fw-medium">
                    Aplicar filtros
                  </button>
                </div>
              )}
            </div>
            
            {/* Etiquetas de filtro activas */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              {activeCategory !== "Todos" && (
                <div className="badge bg-primary bg-opacity-25 text-primary px-3 py-2 rounded-pill fw-medium d-flex align-items-center">
                  {activeCategory}
                  <button className="btn-close btn-close-sm ms-2" style={{ fontSize: '0.65rem' }}></button>
                </div>
              )}
              {/* Puedes agregar más etiquetas de filtro aquí */}
            </div>
            
            {/* Grid de productos */}
            <div className="row row-cols-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3 g-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="col" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <div className="bg-light p-4 rounded-circle d-inline-flex mb-3">
                    <Search size={64} className="text-secondary" />
                  </div>
                  <p className="fs-4 fw-medium text-dark">No se encontraron productos</p>
                  <p className="text-secondary mx-auto" style={{maxWidth: '400px'}}>Lo sentimos, no encontramos resultados para "{searchTerm}". Intenta con otro término de búsqueda o explora nuestras categorías.</p>
                  <button 
                    className="btn btn-primary px-4 py-2 mt-3 fw-medium"
                    onClick={() => setSearchTerm("")}
                  >
                    Ver todos los productos
                  </button>
                </div>
              )}
            </div>
            
            {/* Paginación */}
            {filteredProducts.length > 0 && (
              <div className="d-flex justify-content-center mt-5">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">Anterior</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">8</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">Siguiente</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Banner promocional mejorado */}
      <div className="bg-primary position-relative overflow-hidden mt-5">
        <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h2 className="display-5 fw-bold mb-3">¡Suscríbete y obtén un 10% de descuento!</h2>
              <p className="fs-5 mb-4 opacity-75">Recibe nuestras mejores ofertas y novedades tecnológicas directamente en tu correo electrónico.</p>
              <div className="row justify-content-center g-3">
                <div className="col-md-8">
                  <div className="input-group mb-3">
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      placeholder="Tu correo electrónico" 
                      aria-label="Tu correo electrónico"
                    />
                    <button className="btn btn-light text-primary fw-medium px-4" type="button">Suscribirme</button>
                  </div>
                </div>
              </div>
              <p className="small mt-3 opacity-75">* Nos comprometemos a no compartir tu información con terceros.</p>
            </div>
          </div>
        </div>
        
        
      </div>
      
      {/* Footer de categorías populares */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <h3 className="h4 fw-semibold mb-4 text-center">Categorías Populares</h3>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
            {["Smartphones", "Laptops", "Accesorios", "Audio", "Smartwatches", "Gaming"].map((cat, index) => (
              <div className="col" key={index}>
                <a href="#" className="d-block text-center text-decoration-none text-white bg-secondary bg-opacity-25 p-3 rounded h-100 hover-bg-secondary hover-bg-opacity-50">
                  {cat}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;