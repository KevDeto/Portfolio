import mostaza from "../assets/img/mostaza.png"
import affinityteach from "../assets/img/affinityteach.png"

export const projects = [
    {
        id: 1,
        titulo: "AffinityTeach",
        descripcion: "Plataforma de reseñas que conecta estudiante con docentes de forma simple y rapida. Permite consultar valoraciones y encontrar profesores según las necesidades de aprendizaje.",
        imagen: affinityteach,
        tecnologias: ["react", "tailwindcss", "java", "spring", "oauth2", "docker", "maven", "firebase", "git"],
        linkDemo: "https://affinity-teach.vercel.app/",
        linkRepo: "https://github.com/KevDeto/AffinityTeach-Backend",
        destacado: true,
        categoria: "web"
    },
    {
        id: 2,
        titulo: "Mostaza",
        descripcion: "Proyecto final de curso. Simula un e-commerce de la famosa cadena de comidas Mostaza, cuenta con un carrito de compras, CRUD de productos y filtro de busqueda.",
        imagen: mostaza,
        tecnologias: ["react", "bootstrap", "git", "netlify"],
        linkDemo: "https://mostazaproject.netlify.app/",
        linkRepo: "https://github.com/KevDeto/proyecto-final-reactjs",
        destacado: true,
        categoria: "web"
    }
]