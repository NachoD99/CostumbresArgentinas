const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Lista de productos
const productos = {
  mates: [
    {
      id: 1,
      nombre: "Mate Imperial",
      descripcion: "ACERO INOXIDABLE, SIN BPA, DOBLE PARED AISLADA AL VACÍO, APTA PARA LAVAVAJILLAS. CAPACIDAD 200ML",
      categoria: "mates",
      variantes: [
        { color: "Negro", hex: "#0B141D", estado: "nuevo", imagen: "/images/productos/imperial/1.png" },
        { color: "Marrón", hex: "#3E313A", estado: "nuevo", imagen: "/images/productos/imperial/2.png" },
        { color: "Gris", hex: "#4E4C51", estado: "nuevo", imagen: "/images/productos/imperial/3.png" },
        { color: "Rosa", hex: "#93786F", estado: "nuevo", imagen: "/images/productos/imperial/4.png" },
      ]
    },
    {
      id: 2,
      nombre: "Mate Torpedo",
      descripcion: "ACERO INOXIDABLE, SIN BPA, DOBLE PARED AISLADA AL VACÍO, APTA PARA LAVAVAJILLAS. CAPACIDAD 200ML",
      categoria: "mates",
      variantes: [
        { color: "Marrón", hex: "#3E313A", estado: "nuevo", imagen: "/images/productos/torpedo/1.png" },
        { color: "Rosa", hex: "#93786F", estado: " ", imagen: "/images/productos/torpedo/2.png" },
        { color: "Gris", hex: "#4E4C51", estado: "oferta", imagen: "/images/productos/torpedo/3.png" },
        { color: "Verde", hex: "#2B4961", estado: "agotado", imagen: "/images/productos/torpedo/4.png" },
      ]
    },
    {
      id: 3,
      nombre: "Acero Inoxidable Egg-Shape",
      descripcion: "Mate de cuero con virola de alpaca.",
      categoria: "mates",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "nuevo", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "nuevo", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "oferta", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    {
      id: 4,
      nombre: "Acero Inoxidable 2",
      descripcion: "Mate de cuero con virola de alpaca.",
      categoria: "mates",
      variantes: [
        { color: "Negro", hex: "#13171A", estado: "nuevo", imagen: "/images/productos/acero-mate/1.png" },
        { color: "Verde", hex: "#175044", estado: "nuevo", imagen: "/images/productos/acero-mate/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "nuevo", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/acero-mate/3.png" },
      ]
    }
  ],
  termos: [
    {
      id: 5,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    {
      id: 6,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },{
      id: 7,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    {
      id: 8,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
      ]
    }
  ],
  accesorios: [
    {
      id: 9,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    {
      id: 10,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    
    {
      id: 11,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    
    {
      id: 12,
      nombre: "Termo Stanley",
      descripcion: "Termo de acero inoxidable.",
      categoria: "termos",
      variantes: [
        { color: "Rosa", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
        { color: "Azul", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        { color: "Personalizado", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
  ]
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const productosDestacados = [];

Object.values(productos).forEach(lista => {
  lista.forEach(p => {
    const tieneVarianteDestacada = p.variantes.some(v => v.destacado);
    if (tieneVarianteDestacada) {
      productosDestacados.push(p);
    }
  });
});


// Página principal
app.get('/', (req, res) => {
  res.render('index', { productos, 
    novedades: productosDestacados });
});

// Página de detalle
app.get('/producto/:id', (req, res) => {
  const { categoria } = req.query;
  const id = parseInt(req.params.id);

  if (!categoria || !productos[categoria]) {
    return res.status(404).send('Categoría no encontrada');
  }

  const producto = productos[categoria].find(p => p.id === id);

  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }

  res.render('producto', { producto });
});

app.get('/faq', (req, res) => {
  res.render('faq');
});

app.get('/aboutUs', (req, res) => {
  res.render('aboutUs');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



