import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-10 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
        
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Celuphone</h2>
          <p className="mb-3">Recibe un 10% de descuento en tu primera compra</p>
          <p className="mb-3">Síguenos en redes sociales</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Soporte</h2>
          <p>Calle 11 Av 3 Nuevo Horizonte,</p>
          <p className="mb-2">Cúcuta, Colombia</p>
          <p className="mb-1">celuphone@gmail.com</p>
          <p className="mb-4">+57-305-9360814</p>
          <div className="flex border border-gray-500 rounded-md overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="bg-transparent px-3 py-2 text-sm text-gray-300 focus:outline-none w-full"
            />
            <button className="px-3 hover:bg-gray-700 transition-colors">
              ➤
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Cuenta</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Mi cuenta</a></li>
            <li><a href="#" className="hover:text-white">Inicio / Registro</a></li>
            <li><a href="#" className="hover:text-white">Carrito de compras</a></li>
            <li><a href="#" className="hover:text-white">Favoritos</a></li>
            <li><a href="#" className="hover:text-white">Productos</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Enlaces rápidos</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Políticas de privacidad</a></li>
            <li><a href="#" className="hover:text-white">Términos de uso</a></li>
            <li><a href="#" className="hover:text-white">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:text-white">Contáctanos</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm pt-6">
        © Copyright 2025. Todos los derechos reservados
      </div>
    </footer>
  );
}
