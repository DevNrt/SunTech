import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  Heart,
  ChevronDown,
} from "lucide-react";
import suntechLogo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  // Detectar scroll para cambiar apariencia
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar apertura del dropdown
  const handleDropdown = (category) => {
    if (dropdownOpen === category) {
      setDropdownOpen("");
    } else {
      setDropdownOpen(category);
    }
  };

  return (
    <div className="position-relative">
      <nav
        className={`navbar navbar-expand-md navbar-dark fixed-top transition ${
          isScrolled ? "bg-primary" : "bg-primary bg-gradient"
        }`}
      >
        <div className="container-fluid px-md-4">
          {/* Barra superior con info de contacto/promociones - REDUCIDA 
          <div className="d-none d-md-flex justify-content-between align-items-center w-100 bg-primary-dark px-2" style={{ height: "22px", fontSize: "0.7rem" }}>
            <div className="d-flex gap-2">
              <span className="d-flex align-items-center hover-text-light cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-1"
                  width="8"
                  height="8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (123) 456-7890
              </span>
              <span className="d-flex align-items-center hover-text-light cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-1"
                  width="8"
                  height="8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@suntech.com
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="d-flex align-items-center text-warning fw-medium free-shipping">
                🚚 +$99 envío gratis
              </span>
              <div className="d-flex gap-2 border-start border-primary-light ps-2">
                <a
                  href="#"
                  className="text-white hover-text-light text-decoration-none"
                >
                  ES
                </a>
                <a
                  href="#"
                  className="text-white hover-text-light text-decoration-none"
                >
                  EN
                </a>
              </div>
            </div>
          </div>*/}

          {/* Navbar principal */}
          <div
            className={`d-flex justify-content-between align-items-center w-100 ${
              isScrolled ? "py-1" : "py-2"
            }`}
          >
            {/* Logo y Nombre - Parte modificada para ser más grande */}
            <Link to="/" className="d-flex align-items-center">
              <div
                className={`rounded-circle logo-container ${
                  isScrolled ? "bg-white bg-opacity-10" : ""
                }`}
              >
                <img
                  src={suntechLogo}
                  alt="Suntech Logo"
                  className={`transition ${
                    isScrolled ? "logo-small" : "logo-large"
                  } rounded shadow border border-4 border-white`}
                  style={{
                    width: isScrolled ? "150px" : "200px",
                    height: isScrolled ? "45px" : "65px",
                  }}
                />
              </div>
            </Link>

            {/* Buscador en versión desktop */}
            <div
              className="d-none d-md-flex flex-grow-1 mx-4"
              style={{ maxWidth: "350px" }}
            >
              <div className="position-relative w-100">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="form-control form-control-sm rounded-pill py-1 px-3 border-2"
                />
                <button className="btn position-absolute end-0 top-50 translate-middle-y text-secondary hover-primary p-1">
                  <Search width="16" height="16" />
                </button>
              </div>
            </div>

            {/* Botón Menú para móviles */}
            <button
              className="navbar-toggler d-md-none btn btn-primary p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X width="20" height="20" />
              ) : (
                <Menu width="20" height="20" />
              )}
            </button>

            {/* Controles (Favoritos, Carrito y Login) */}
            <div className="d-none d-md-flex align-items-center gap-2">
              <button className="btn btn-icon p-1 position-relative">
                <Heart width="20" height="20" />
                <span
                  className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger border border-light"
                  style={{ fontSize: "0.6rem" }}
                >
                  2
                </span>
                <span className="visually-hidden">Favoritos</span>
              </button>

              <button className="btn btn-icon p-1 position-relative">
                <ShoppingCart width="20" height="20" />
                <span
                  className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger border border-light"
                  style={{ fontSize: "0.6rem" }}
                >
                  3
                </span>
                <span className="visually-hidden">Carrito</span>
              </button>

              <Link
                to="/login"
                className="btn btn-light text-primary px-2 py-1 rounded-pill d-flex align-items-center gap-1 position-relative"
              >
                <User width="18" height="18" />
                <span className="fw-medium small">Iniciar Sesión</span>
                <span
                  className="position-absolute top-0 end-0 translate-middle bg-success rounded-circle border border-2 border-white status-indicator d-none d-md-block"
                  style={{ width: "10px", height: "10px" }}
                ></span>
              </Link>
            </div>
          </div>

          {/* Menú de Navegación */}
          <div
            className={`navbar-collapse ${
              menuOpen ? "show" : "collapse"
            } border-top border-primary-light w-100`}
          >
            <ul className="navbar-nav justify-content-center w-100 small">
              <li className="nav-item position-relative">
                <a
                  href="/"
                  className="nav-link d-flex align-items-center px-2 py-1 fw-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="me-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Inicio
                </a>
              </li>
              <li className="nav-item dropdown position-relative">
                <div
                  className="nav-link d-flex align-items-center px-2 py-1 fw-medium cursor-pointer"
                  onClick={() => handleDropdown("productos")}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen === "productos"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="me-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Productos
                  <ChevronDown width="14" height="14" className="ms-1" />
                </div>

                {/* Dropdown para Productos */}
                <div
                  className={`dropdown-menu bg-white text-dark shadow ${
                    dropdownOpen === "productos" ? "show" : ""
                  }`}
                >
                  <a
                    href="/smartphones"
                    className="dropdown-item py-1 border-start border-3 border-transparent hover-border-primary"
                  >
                    Smartphones
                  </a>
                  <a
                    href="/laptops"
                    className="dropdown-item py-1 border-start border-3 border-transparent hover-border-primary"
                  >
                    Laptops
                  </a>
                  <a
                    href="/tablets"
                    className="dropdown-item py-1 border-start border-3 border-transparent hover-border-primary"
                  >
                    Tablets
                  </a>
                  <a
                    href="/accesorios"
                    className="dropdown-item py-1 border-start border-3 border-transparent hover-border-primary"
                  >
                    Accesorios
                  </a>
                </div>
              </li>
              <li className="nav-item position-relative">
                <a
                  href="/ofertas"
                  className="nav-link d-flex align-items-center px-2 py-1 fw-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="me-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                  <span className="d-flex align-items-center">
                    Ofertas
                    <span className="ms-1 badge bg-warning text-primary rounded-pill fw-bold small">
                      HOT
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a
                  href="/categorias"
                  className="nav-link d-flex align-items-center px-2 py-1 fw-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="me-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  Categorías
                </a>
              </li>
              <li className="nav-item position-relative">
                <a
                  href="/nosotros"
                  className="nav-link d-flex align-items-center px-2 py-1 fw-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="me-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Nosotros
                </a>
              </li>
              <li className="nav-item position-relative">
                <a
                  href="/contacto"
                  className="nav-link d-flex align-items-center px-2 py-1 fw-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="me-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu icons */}
        {menuOpen && (
          <div className="d-md-none d-flex justify-content-around py-2 border-top border-primary-light bg-primary w-100">
            <button className="btn btn-link text-white d-flex flex-column align-items-center small text-decoration-none">
              <Heart width="20" height="20" className="mb-1" />
              <span className="small">Favoritos</span>
            </button>
            <button className="btn btn-link text-white d-flex flex-column align-items-center small text-decoration-none position-relative">
              <ShoppingCart width="20" height="20" className="mb-1" />
              <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger small">
                3
              </span>
              <span className="small">Carrito</span>
            </button>
            <button className="btn btn-link text-white d-flex flex-column align-items-center small text-decoration-none">
              <User width="20" height="20" className="mb-1" />
              <span className="small">Cuenta</span>
            </button>
            <button className="btn btn-link text-white d-flex flex-column align-items-center small text-decoration-none">
              <Search width="20" height="20" className="mb-1" />
              <span className="small">Buscar</span>
            </button>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind the fixed navbar */}
      <div style={{ height: "60px" }} className="d-md-block"></div>
      <div style={{ height: "20px" }} className="d-none d-md-block"></div>
    </div>
  );
};

export default Navbar;
