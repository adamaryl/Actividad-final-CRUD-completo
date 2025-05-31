CRUD Zapateria

Aplicación web full stack para gestionar zapatos en una tienda zapatería, la cual Permite crear, leer, actualizar y eliminar productos con campos como modelo, precio y descripción.
En este proyecto utilicé la base de datos SQLite ya que es una base de datos ligera, basada en archivos, que no necesita un servidor para funcionar, se guarda en un solo 
archivo database.sqlite y como es ideal para proyectos pequeños o educativos en este caso como esta aplicación web de zapatería.

Frontend (React)
Componente: App.jsx Es el componente principal, el cual se encarga de cargar la lista de zapatos desde la API, asimismo coordinar la creación, edición y eliminación

Componente: ZapatoForm.jsx Con esto se crea el formulario para agregar o editar zapatos mostrando los campos: Modelo, Precio, Descripción

Tiene botones: Agregar/Actualizar y Cancelar

Componente: ZapatoList.jsx Nos uestra una tabla con los zapatos sus columnas son: ID, Modelo, Precio, Descripción, Acciones

Los botones en cada fila nos permite: Editar y Eliminar

Componentes (React)
src/components/ZapatoForm.jsx
Aquí se encuentra con un formulario reutilizable para agregar o editar zapatos.

Sus campos son: modelo (texto), precio (número) y descripción (texto), además tiene un botón "Agregar" o "Actualizar" dependiendo si se está editando, también muestra un botón 
"Cancelar" si se está editando

src/components/ZapatoList.jsx
Tabla que nos muestra todos los zapatos registrados.
Muestra columnas: ID, Modelo, Precio, Descripción y Acciones. Cada fila tiene botones de "Editar" y "Eliminar".

package.json (frontend)
Etse lo utilicé para definir las dependencias para React, axios: Para hacer peticiones HTTP al backend y react, react-dom, react-scripts.
 
