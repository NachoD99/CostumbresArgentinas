# Costumbres Argentinas 🧉🇦🇷

Sitio web de e-commerce enfocado en productos tradicionales argentinos como mates, bombillas, termos y más. Hecho con Node.js, Express y EJS.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- EJS (plantillas)
- CSS modularizado (layout, componentes, secciones)
- Nodemailer (para contacto por correo)
- Font Awesome (íconos)
- JavaScript Vanilla

## 📂 Estructura del proyecto


## 📧 Formulario de contacto

El formulario de contacto envía correos usando Nodemailer y Gmail (App Password). Las credenciales están almacenadas de forma segura en `.env`.

## COMANDOS UTILES

npm install        # Instalar dependencias
node server.js     # Iniciar servidor


Diseñado para adaptarse a múltiples dispositivos (mobile, tablet y desktop) incluyendo:

Carrusel con imágenes adaptadas por resolución (<picture>)

Catálogo con cards responsivos

Sección de contacto adaptada a pantallas pequeñas

✍ Autor
Nacho – Desarrollador y diseñador de este proyecto inspirado en la cultura y diseño argentino.

## 🔐 Variables de entorno necesarias

Creá un archivo `.env` en la raíz:

```env
EMAIL_USER=tuemail@gmail.com
EMAIL_PASS=tu_app_password

https://myaccount.google.com/apppasswords → Ruta para crear app password