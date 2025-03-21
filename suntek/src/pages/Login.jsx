import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, Mail, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import suntechLogo from "../assets/logo.jpeg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Limpiar campos al cambiar de formulario
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log(isLogin ? "Iniciando sesión" : "Registrando cuenta", {
      email,
      password,
      ...(isLogin ? {} : { name }),
    });
  };

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />

      <div className="container py-5 my-3">
        <div className="row justify-content-center">
          <div className="col-md-5">
            {/* Card con sombra para el formulario */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              {/* Cabecera del formulario */}
              <div className="card-header text-center p-4 bg-primary text-white">
                <div className="d-flex justify-content-center mb-3">
                  <div className="rounded-circle  p-3">
                    <img
                      src={suntechLogo}
                      alt="Suntech Logo"
                      className="rounded shadow border border-2 border-white"
                      style={{ width: "150px", height: "50px" }}
                    />
                  </div>
                </div>
                <h3 className="fw-bold mb-1">
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                </h3>
                <p className="text-white-50 small mb-0">
                  {isLogin
                    ? "Accede a tu cuenta para comprar y revisar tus pedidos"
                    : "Regístrate para obtener ofertas exclusivas y seguimiento de pedidos"}
                </p>
              </div>

              <div className="card-body p-4">
                {/* Tabs para alternar entre login y registro */}
                <div className="d-flex rounded overflow-hidden mb-4">
                  <button
                    className={`flex-grow-1 py-2 text-center border-0 transition fw-medium ${
                      isLogin
                        ? "bg-primary text-white"
                        : "bg-light text-secondary"
                    }`}
                    onClick={() => setIsLogin(true)}
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    className={`flex-grow-1 py-2 text-center border-0 transition fw-medium ${
                      !isLogin
                        ? "bg-primary text-white"
                        : "bg-light text-secondary"
                    }`}
                    onClick={() => setIsLogin(false)}
                  >
                    Registrarse
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Campo de nombre (solo para registro) */}
                  {!isLogin && (
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-medium text-dark">
                        Nombre Completo
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <User size={18} className="text-secondary" />
                        </span>
                        <input
                          type="text"
                          className="form-control py-2"
                          id="name"
                          placeholder="Ingresa tu nombre completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Campo de email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium text-dark">
                      Correo Electrónico
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <Mail size={18} className="text-secondary" />
                      </span>
                      <input
                        type="email"
                        className="form-control py-2"
                        id="email"
                        placeholder="Ingresa tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Campo de contraseña */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label htmlFor="password" className="form-label fw-medium text-dark">
                        Contraseña
                      </label>
                      {isLogin && (
                        <a href="#" className="text-primary text-decoration-none small">
                          ¿Olvidaste tu contraseña?
                        </a>
                      )}
                    </div>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <Lock size={18} className="text-secondary" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control py-2"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        className="input-group-text bg-light border-start-0"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="text-secondary" />
                        ) : (
                          <Eye size={18} className="text-secondary" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Checkbox "Recuérdame" (solo para login) */}
                  {isLogin && (
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label text-secondary small" htmlFor="rememberMe">
                        Recordar mis datos en este dispositivo
                      </label>
                    </div>
                  )}

                  {/* Botón de submit */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 mb-3 fw-medium d-flex align-items-center justify-content-center"
                  >
                    {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                    <ArrowRight className="ms-2" size={18} />
                  </button>

                  {/* Separador con texto */}
                  <div className="text-center position-relative mb-4">
                    <hr className="text-secondary" />
                    <span className="position-absolute top-50 start-50 translate-middle px-3 bg-white text-secondary">
                      o continuar con
                    </span>
                  </div>

                  {/* Botones de redes sociales */}
                  <div className="d-flex gap-2 mb-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary flex-grow-1 py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary flex-grow-1 py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary flex-grow-1 py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Footer del formulario */}
                  <div className="text-center">
                    <p className="mb-0 text-secondary small">
                      {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
                      <a
                        href="#"
                        className="text-primary text-decoration-none fw-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleForm();
                        }}
                      >
                        {isLogin ? "Regístrate aquí" : "Inicia sesión"}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Información adicional */}
            <div className="mt-4 text-center">
              <p className="small text-secondary mb-0">
                Al iniciar sesión, aceptas nuestros{" "}
                <a href="#" className="text-primary">
                  Términos y Condiciones
                </a>{" "}
                y{" "}
                <a href="#" className="text-primary">
                  Política de Privacidad
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner promocional inferior */}
      <div className="bg-primary position-relative overflow-hidden mt-5">
        <div className="container py-4 text-center text-white position-relative">
          <h4 className="fw-bold mb-2">¿Necesitas ayuda?</h4>
          <p className="mb-3">Nuestro equipo de soporte está disponible 24/7 para resolver tus dudas</p>
          <button className="btn btn-light text-primary fw-medium px-4 py-2">
            Contactar soporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;