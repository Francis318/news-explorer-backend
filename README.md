# News Explorer - Backend API

Esta es la API RESTful para la aplicación **News Explorer**. Proporciona la lógica del servidor, la gestión de la base de datos y la autenticación segura de los usuarios, permitiendo el registro, inicio de sesión y la gestión de artículos de noticias guardados.

## 🚀 Características Principales

- **Autenticación de Usuarios:** Funcionalidad completa de registro y login (Register/Login) mediante JWT (JSON Web Tokens).
- **Gestión de Base de Datos:** Conexión y gestión eficiente de datos con la base de datos `newsexplorerdb`.
- **Operaciones CRUD:** Rutas protegidas para guardar y eliminar artículos de noticias específicos por usuario.
- **Despliegue Seguro:** Configuración de dominio y alojamiento utilizando DuckDNS.

## 🛠️ Tecnologías Utilizadas

- **Entorno de ejecución:** Node.js
- **Framework:** Express.js
- **Base de Datos:** MongoDB / Mongoose (Ajustar si usaste SQL)
- **Seguridad:** bcryptjs (para encriptación de contraseñas), jsonwebtoken
- **Despliegue y Dominio:** DuckDNS

## ⚙️ Instalación y Configuración Local

1.  **Clona el repositorio:**

````bash
    git clone [https://github.com/tu-usuario/news-explorer-backend.git](https://github.com/tu-usuario/news-explorer-backend.git)
    ```
2.  **Instala las dependencias:**
```bash
    cd news-explorer-backend
    npm install
    ```
3.  **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales:
```env
    PORT=3000
    DB_URI=tu_cadena_de_conexion_a_newsexplorerdb
    JWT_SECRET=tu_secreto_super_seguro
    ```
4.  **Inicia el servidor:**
```bash
    npm run dev
    ```

## 📡 Endpoints Principales (API Reference)

### Autenticación
*   `POST /signup` - Registra a un nuevo usuario.
*   `POST /signin` - Inicia sesión y devuelve un token JWT.

### Usuarios
*   `GET /users/me` - Devuelve la información del usuario actual (Ruta protegida).

### Artículos
*   `GET /articles` - Devuelve todos los artículos guardados por el usuario (Ruta protegida).
*   `POST /articles` - Guarda un nuevo artículo (Ruta protegida).
*   `DELETE /articles/:articleId` - Elimina un artículo guardado (Ruta protegida).

## 🌐 Enlaces del Proyecto

*   **Frontend Repository:** https://github.com/Francis318/news-explorer-frontend#
*   **Backend Repository:** https://github.com/Francis318/news-explorer-backend
*   **Aplicación en Vivo:** https://appnewsexplorer.duckdns.org/

---
*Desarrollado por [Francisco Enrique Reyes Alaniz] - Full Stack Web Developer*
````
