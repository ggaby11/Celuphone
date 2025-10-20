import React from 'react'
import CardHome from "../components/card-home"
import product1 from '../assets/Consola-juego.png'
import product2 from '../assets/Monitor-gamer.png'
import product3 from '../assets/CPU-cooler.png'
import product4 from '../assets/laptop-gaming.png'
import product5 from '../assets/Consola-juego-2.png'
import ProductCard from "../components/productcard"

function Home () {
    const productos = [
        {
            id: 1,
            name: "Auriculares Bluetooth",
            price: 120000,
            oldPrice: 160000,
            discount: 40,
            rating: 4,
            reviews: 88,
            image: product1,
        },
        {
            id: 2,
            name: "Smartwatch Deportivo",
            price: 250000,
            oldPrice: 350000,
            discount: 35,
            rating: 4,
            reviews: 75,
            image: product2,
        },
        {   id: 3, 
            name: "Tablet 10 pulgadas",
            price: 960000,
            oldPrice: 1160000,
            discount: 35,
            rating: 4,
            reviews: 75,
            image: product3
        },
        {
            id: 4,
            name: "Consola Gaming Pro",
            price: 1850000,
            oldPrice: 2300000,
            discount: 20,
            rating: 5,
            reviews: 152,
            image: product4,
        },
        {
            id: 5,
            name: "Laptop Gamer X",
            price: 4200000,
            oldPrice: 5200000,
            discount: 25,
            rating: 4,
            reviews: 97,
            image: product5,
        },

    ];

    return(
        <div className='flex flex-col mt-10'>
            <section className='flex flex-col gap-8'>
                <h1 className="flex justify-center text-5xl text-center font-bold ml-10 mr-10"> Nos apasiona la tecnología y creemos que un buen servicio comienza con la confianza</h1>
                <CardHome></CardHome>
            </section>

            <section className="flex flex-col gap-6 p-4">
                <div className='flex justify-start items-center gap-3'>
                    <div className='bg-[var(--color-principal-500)] h-10 w-5 border border-white rounded-r-sm'></div>
                    <h3 className='text-sm text-[var(--color-principal-500)] font-bold'>Ofertas que terminan hoy</h3>
                </div>
                <h2 className='text-3xl font-semibold'>En promoción</h2>
                
                <div className='flex flex-col'>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
                        {productos.map((p, i) => (
                            <ProductCard key={i} product={p} />
                        ))}
                    </div>
                    <button className="boton-gradiente h-15 w-full rounded transform text-white text-xl font-semibold hover:boton-gradiente-hover">Ver todos los productos</button>
                </div>
  
            </section>
        </div>
    )
}

export default Home