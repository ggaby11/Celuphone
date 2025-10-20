import { FaHeart, FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden group transition p-3">
      {/* Descuento */}
      <div className="absolute top-2 left-2 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
        -{product.discount}%
      </div>

      {/* Icono de Like */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors">
        <FaHeart size={18} />
      </button>

      {/* Imagen */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain p-4"
      />

      {/* Botón de añadir al carrito (solo al hacer hover) */}
      <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add To Cart
      </button>

      {/* Información del producto */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        {/* Precio */}
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">${product.price}</span>
          <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
        </div>

        {/* Estrellas y reseñas */}
        <div className="flex items-center mt-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < product.rating ? "" : "text-gray-300"} />
          ))}
          <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
