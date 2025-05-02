require('dotenv').config();
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
      descripcion: "Acero inoxidable libre de BPA, con doble pared aislada al vacio. Apto para lavavajillas. Recubrimiento plastico de alta calidad. Bombilla de Regalo",
      categoria: "mates",
      variantes: [
        { color: "Marrón", precio: "15", hex: "#3E313A", estado: "nuevo", imagen: "/images/productos/imperial/1.png" },
        { color: "Gris", precio: "15", hex: "#4E4C51", estado: "nuevo", imagen: "/images/productos/imperial/3.png" },
        { color: "Rosa", precio: "15", hex: "#93786F", estado: "nuevo", imagen: "/images/productos/imperial/2.png" },
        { color: "Negro", precio: "15", hex: "#0B141D", estado: "nuevo", imagen: "/images/productos/imperial/4.png" },
      ]
    },
    {
      id: 2,
      nombre: "Mate Torpedo",
      descripcion: "Acero inoxidable libre de BPA, con doble pared aislada al vacio. Apto para lavavajillas. Recubrimiento plastico de alta calidad. Bombilla de Regalo",
      categoria: "mates",
      variantes: [
        { color: "Gris", precio: "15", hex: "#4E4C51", estado: "oferta", imagen: "/images/productos/torpedo/1.png" },
        { color: "Rosa", precio: "15", hex: "#93786F", estado: " ", imagen: "/images/productos/torpedo/2.png" },
        { color: "Marrón", precio: "15", hex: "#3E313A", estado: "nuevo", imagen: "/images/productos/torpedo/3.png" },
        { color: "Verde", precio: "15", hex: "#2B4961", estado: "agotado", imagen: "/images/productos/torpedo/4.png" },
      ]
    },
    // {
    //   id: 3,
    //   nombre: "Mate Acero Inoxidable Egg-Shape",
    //   descripcion: "Taza de bebida de doble pared personalizada al por mayor botella con forma de huevo al vacio de acero inoxidable. Libre de BPA y libre de toxinas quimicas o metalicas, y hecho de acero inoxidable de alta calidad como tapa, salud, moda, proteccion del medio ambiente. Bombilla de regalo.",
    //   categoria: "mates",
    //   variantes: [
    //     { color: "Rosa", precio: "15", hex: "#C89E91", estado: "nuevo", imagen: "/images/productos/egg-shape/1.png" },
    //     { color: "Azul", precio: "15", hex: "#01317F", estado: "nuevo", imagen: "/images/productos/egg-shape/2.png" },
    //     { color: "Personalizado", precio: "20", hex: "#82C9E5", estado: "oferta", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/egg-shape/3.png" },
    //   ]
    // },
    // {
    //   id: 4,
    //   nombre: "Mate Acero Inoxidable",
    //   descripcion: "100% libre de BPA y libre de toxinas quimicas o metalicas, y hecho de acero inoxidable 304 de alta calidad como tapa, salud, moda, proteccion del medio ambiente. Bombilla de regalo.",
    //   categoria: "mates",
    //   variantes: [
    //     { color: "Negro", precio: "15", hex: "#13171A", estado: "nuevo", imagen: "/images/productos/acero-mate/1.png" },
    //     { color: "Verde", precio: "15", hex: "#175044", estado: "nuevo", imagen: "/images/productos/acero-mate/2.png" },
    //     { color: "Personalizado", precio: "20", hex: "#82C9E5", estado: "nuevo", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/acero-mate/3.png" },
    //   ]
    // }
  ],
  // termos: [
  //   {
  //     id: 5,
  //     nombre: "Termo Stanley",
  //     descripcion: "Termo de acero inoxidable.",
  //     categoria: "termos",
  //     variantes: [
  //       { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
  //       { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
  //       { color: "Personalizado", precio: "30", hex: "#82C9E5", estado: "agotado", destacado: false, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/egg-shape/3.png" },
  //     ]
  //   },
  //   {
  //     id: 6,
  //     nombre: "Termo Stanley",
  //     descripcion: "Termo de acero inoxidable.",
  //     categoria: "termos",
  //     variantes: [
  //       { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
  //       { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
  //       { color: "Personalizado", precio: "30", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
  //     ]
  //   },
  //   {
  //     id: 7,
  //     nombre: "Termo Stanley",
  //     descripcion: "Termo de acero inoxidable.",
  //     categoria: "termos",
  //     variantes: [
  //       { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
  //       { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
  //       { color: "Personalizado", precio: "15", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
  //     ]
  //   },
  //   {
  //     id: 8,
  //     nombre: "Termo Stanley",
  //     descripcion: "Termo de acero inoxidable.",
  //     categoria: "termos",
  //     variantes: [
  //       { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
  //       { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
  //       { color: "Personalizado", precio: "15", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
  //     ]
  //   }
  // ],
  accesorios: [
    {
      id: 9,
      nombre: "Bombilla",
      descripcion: "Bombilla de acero inoxidable con cabezal removible para mejor limpieza.",
      categoria: "termos",
      variantes: [
        { color: "Acero", precio: "5", hex: "#C8C6C2", estado: " ", imagen: "/images/productos/bombilla/1.png" },
        // { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
        // { color: "Personalizado", precio: "15", hex: "#82C9E5", estado: "agotado", destacado: true, destacadoDescripcion: "DISEÑO EXCLUSIVO ARGENTINA", imagen: "/images/productos/egg-shape/3.png" },
      ]
    },
    // {
    //   id: 10,
    //   nombre: "Termo Stanley",
    //   descripcion: "Termo de acero inoxidable.",
    //   categoria: "termos",
    //   variantes: [
    //     { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
    //     { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
    //     { color: "Personalizado", precio: "15", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
    //   ]
    // },
    
    // {
    //   id: 11,
    //   nombre: "Termo Stanley",
    //   descripcion: "Termo de acero inoxidable.",
    //   categoria: "termos",
    //   variantes: [
    //     { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
    //     { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
    //     { color: "Personalizado", precio: "15", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
    //   ]
    // },
    
    // {
    //   id: 12,
    //   nombre: "Termo Stanley",
    //   descripcion: "Termo de acero inoxidable.",
    //   categoria: "termos",
    //   variantes: [
    //     { color: "Rosa", precio: "15", hex: "#C89E91", estado: "agotado", imagen: "/images/productos/egg-shape/1.png" },
    //     { color: "Azul", precio: "15", hex: "#01317F", estado: "agotado", imagen: "/images/productos/egg-shape/2.png" },
    //     { color: "Personalizado", precio: "15", hex: "#82C9E5", estado: "agotado", imagen: "/images/productos/egg-shape/3.png" },
    //   ]
    // },
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


// Middleware para procesar formularios
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.use(express.urlencoded({ extended: true }));

app.post('/enviar', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).send('Por favor completá todos los campos.');
  }

  const mailOptions = {
    from: `"${nombre}" <${email}>`,
    to: 'tudestino@gmail.com', // correo que recibe
    subject: 'Nuevo mensaje desde Costumbres Argentinas',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje:\n${mensaje}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br>${mensaje}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send('Hubo un error al enviar tu mensaje.');
    }
    else return res.status(200).send('Mensaje enviado correctamente.');
  });
});
