API de gestión de usuarios

Esta API proporciona funcionalidades para administrar usuarios en una aplicación Spring Boot.

Características:

Listar todos los usuarios
Listar usuarios por página
Obtener un usuario por ID
Crear un nuevo usuario
Actualizar un usuario existente
Eliminar un usuario
Tecnologías utilizadas:

Bota de primavera
APP
Seguridad de primavera
JWT
Documentación API

La API está documentada mediante OpenAPI (Swagger). Puedes acceder a la documentación en:

http://localhost:<port>/swagger-ui/index.html(reemplace <port>con el puerto en el que se ejecuta su aplicación)
Autenticación:

La API utiliza JWT para la autenticación. Para acceder a recursos protegidos, debe incluir un token JWT en el encabezado de autorización de sus solicitudes. El formato del encabezado de autorización es:

Authorization: Bearer <token>
Puntos finales:

GET /users : enumera todos los usuarios.
GET /users/page/{page} : enumera los usuarios por página. es el número de página (basado en 0). {page}
GET /users/{id} : obtiene un usuario por ID. es el ID del usuario. {id}
POST /usuarios : crea un nuevo usuario.
PUT /users/{id} : actualiza un usuario existente. es el ID del usuario. {id}
DELETE /users/{id} : elimina un usuario. es el ID del usuario. {id}
Cuerpo de la solicitud:

El cuerpo de la solicitud para crear y actualizar usuarios es un objeto JSON con las siguientes propiedades:

nombre de usuario: el nombre de usuario del usuario (obligatorio, cadena, longitud mínima 4, longitud máxima 8)
correo electrónico: La dirección de correo electrónico del usuario (obligatorio, cadena, único)
contraseña: la contraseña del usuario (obligatoria, cadena)
admin: si el usuario es administrador (opcional, booleano)
Cuerpo de respuesta:

El cuerpo de respuesta de la mayoría de los puntos finales de API es un objeto JSON con las siguientes propiedades:

id: El ID del usuario (si corresponde)
nombre de usuario: el nombre de usuario del usuario
correo electrónico: la dirección de correo electrónico del usuario
admin: si el usuario es administrador
Manejo de errores:

La API devuelve respuestas de error con un código de estado y un objeto JSON con las siguientes propiedades:

mensaje: El mensaje de error
Ejemplo de uso:

1. Obtener todos los usuarios:

GET http://localhost:8080/users
Respuesta:

JSON
[
  {
    "id": 1,
    "username": "user1",
    "email": "user1@example.com",
    "admin": false
  },
  {
    "id": 2,
    "username": "user2",
    "email": "user2@example.com",
    "admin": true
  }
]
Usa el código con precaución.
content_copy
2. Cree un nuevo usuario:

POST http://localhost:8080/users
Content-Type: application/json

{
  "username": "user3",
  "email": "user3@example.com",
  "password": "password123"
}
Respuesta:

JSON
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "message": "Hello user3 you have logged in successfully!!",
  "username": "user3"
}
Usa el código con precaución.
content_copy
3. Actualizar un usuario:

PUT http://localhost:8080/users/1
Content-Type: application/json
Authorization: Bearer <token>

{
  "username": "user1_updated",
  "email": "user1_updated@example.com"
}
4. Eliminar un usuario:

DELETE http://localhost:8080/users/2
Authorization: Bearer <token>

Frontend

Descripción del Proyecto

Una aplicación React integral para la autenticación, gestión y visualización de perfiles de usuarios. Este proyecto incluye funciones como registro de usuarios, inicio de sesión, edición de perfiles y administración de listas de usuarios con autorización basada en roles (administrador/usuario). La aplicación utiliza un fondo de video en las páginas de inicio de sesión y de lista de usuarios para mejorar el atractivo visual.

Tecnologías utilizadas

Interfaz:
React: biblioteca de JavaScript para crear interfaces de usuario
React Router DOM: biblioteca de enrutamiento para aplicaciones React
Axios: Cliente HTTP basado en promesas para realizar solicitudes API
Redux Toolkit: biblioteca Redux para la gestión de estados con configuración simplificada
SweetAlert2: biblioteca JavaScript para crear cuadros de diálogo emergentes
Opcional:
Bootstrap: marco CSS para diseño responsivo (opcional para estilo)
Estructura de carpetas

src/
  - api/ (folder containing API calls)
    - usersApi.js
  - auth/ (folder containing authentication logic)
    - hooks/ (folder containing custom hooks)
      - useAuth.js
    - pages/ (folder containing auth pages)
      - LoginPage.js
      - RegisterPage.js
    - slices/ (folder containing redux slices)
      - authSlice.js
  - components/ (folder containing reusable components)
    - layout/ (folder containing layout components)
      - Navbar.js
    - UserForm.js
    - UserModalForm.js
    - UserRow.js
    - UsersList.js
    - Paginator.js
  - hooks/ (folder containing global custom hooks)
    - useUsers.js
  - pages/ (folder containing application pages)
    - UsersPage.js
  - App.js
  - index.js
  - ... (other files)
Instalación

Clonar el repositorio: 
Clona el repositorio del proyecto en tu máquina local usando Git.

Instalar dependencias: 
abre una ventana de terminal y navega hasta el directorio del proyecto. Luego, ejecuta el siguiente comando para instalar las dependencias requeridas:

Intento
npm install
Usa el código con precaución.
content_copy
Esto instalará todas las dependencias necesarias para el proyecto, incluidos React, React Router DOM, Axios, Redux Toolkit y SweetAlert2.

Uso

Inicie el servidor de desarrollo: 
para iniciar el servidor de desarrollo y ejecutar la aplicación localmente, ejecute el siguiente comando en la terminal:

Intento
npm start
Usa el código con precaución.
content_copy
Esto iniciará un servidor de desarrollo y abrirá la aplicación en su navegador web predeterminado. El puerto predeterminado para el desarrollo suele ser localhost:3000.

Acceda a la aplicación: 
una vez que el servidor de desarrollo se esté ejecutando, puede acceder a la aplicación en su navegador web navegando a la siguiente URL:

http://localhost:3000
Esto mostrará la página de inicio de sesión, donde puede iniciar sesión en una cuenta existente o registrar una nueva.

Puntos finales API

Los puntos finales de API para la autenticación y administración de usuarios no se proporcionan en este ejemplo de código. Deberá implementarlos de acuerdo con su API de backend. Asegúrese de que su API de backend proporcione puntos finales para las siguientes operaciones:

Registro de usuario: crear una nueva cuenta de usuario
Inicio de sesión de usuario: autenticar a un usuario existente y recuperar un token de acceso
Recuperación de perfil de usuario: obtenga la información del perfil de un usuario autenticado
Actualización del perfil de usuario: actualice la información del perfil de un usuario autenticado
Recuperación de lista de usuarios: recuperar una lista de usuarios (para usuarios administradores)
Eliminación de usuario: eliminar un usuario (para usuarios administradores)
Configuración de Redux

Este proyecto utiliza Redux Toolkit para la gestión de estados. El store.jsarchivo configura el almacén Redux con reductores para la autenticación y los datos de usuario. Los reductores manejan las acciones enviadas desde los componentes y actualizan el estado de la aplicación en consecuencia.

Notas
