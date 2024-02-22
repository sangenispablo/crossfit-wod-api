# CROSSFIT-WOD-API

Este ejemplo ilustra la forma de usar buenas practicas en la creación de una RestAPI que maneja los WOD de un Gimnasio Crosfitero.

Para empezar voy a dividir por branch cada progreso

1. **main**: Va a tener siempre la ultima version actualizada del servicio
2. **branch01**: Acá está el modelo de base, las carpetas vacias tienen un .gitkeep para que git las mantenga, por que caso contrario, no se subirian al repo. En esta branch solo tenemos un solo archivo llamado index.js que esta en la carperta /src. Que tiene la definición clasica de un servicio rest con express.
3. **branch02**: Aca antes de arrancar vamos versionar nuestro servicio, dentro de todas las formas que existe para esto, vamos a usar carpetas "v1", "v2" y asi sucesivamente. Para eso vamos a mover la carpera routes a "src/v1". Y dentro de routes creamos index.js donde creamos una ruta con el metodo Router(). Esta será la base para las demas rutas. Agregamos esta importación al index.js del "/src" poniendo una nueva url "/api/v1/". **Aclaración**: Como se puede ver solo movimos la carpeta routes a la carpeta "v1" esto es por que vamos a compartir los controladores y servicios, pero si el servicio crece mucho se podria mover perfectamente a v1 o v2 las demas carpetas.
4. **branch03**: Vamos a ir creando ya los controladores, los servicios y las rutas para nuestro ejemplo ya de forma puntual. Nota: se borran los .gitkeep y el index.js de routes. Nombramos en plural los recursos. En este caso "workouts". Mira como usamos los controladores en las rutas, desacoplamos el controlador de la ruta y todo lo relacionado a las request y response la centralizamos en el controller.
5. **branch04**: En este branch vamos a aceptar y responder con el mas popular formato de datos (JSON). Para ello vamos a crear los services que van a consumir los controllers. Como puedes ver los nombres de los metodos son iguales que los del controlador. Tambien puedes ver que creamos un archivo para persistir los datos en un archivo llamado db.json que se encuentra en la carpeta "database", tambien se agrego en esta carpeta un "Workout.js" que tiene los metodos que nos permiten recuperar y actualizar la info del db.json esta capa es la de acceso a los datos, en el futuro será donde se coloque la logica de acceso a la BD. Otra cosa que hacemos en este branch es aceptar las request con datos en formato JSON ya que tambien devolvemos JSON en las response tal cual lo vemos en el metodo get de "api/v1/workouts". Para aceptar JSON en las request tenemos que usar el middleware express.json() en el index.js principal. Tambien agregamos el archivo "utils.js" que persiste los que recibimos desde los request. Usamos metodos propios de node. Para generar algunos de las propiedades del objeto que forma un workout como el "id" vamos usar una libreria llamada "uuid". Nota: en esta branch agregamos, por lo tanto deberias volver a ejecutar `npm install`. El paquete uuid tiene la version 4, para que se pueda generar el id. Tambien creamos las fechas con formato para Argentina. Podria terminar todo pero voy a separarlo en otro branch. Tambien agrego un json con las peticiones que se necesitan en Postman.
6. **branch05**: En esta brach vamos completar los metodos del controller y luego seguimos con el service y los metodos Workout.js. Tambien vamos a actualizar la colección de Postman.

## Instalación
Independientemente que uses cualquier branch vas a tener que hacer lo siguiente:
1. Clonar el proyecto.
2. Pararte en la rama que quieres ver o probar.
3. Ejecutar: `npm install` para instalar el node_module
4. Ejecutar: `npm run dev` para ejecutar el servicio.
