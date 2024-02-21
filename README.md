# CROSSFIT-WOD-API

Este ejemplo ilustra la forma de usar buenas practicas en la creación de una RestAPI que maneja los WOD de un Gimnasio Crosfitero.

Para empezar voy a dividir por branch cada progreso

1. **main**: Va a tener siempre la ultima version actualizada del servicio
2. **branch01**: Acá está el modelo de base, las carpetas vacias tienen un .gitkeep para que git las mantenga, por que caso contrario, no se subirian al repo. En esta branch solo tenemos un solo archivo llamado index.js que esta en la carperta /src. Que tiene la definición clasica de un servicio rest con express.
3. **branch02**: Aca antes de arrancar vamos versionar nuestro servicio, dentro de todas las formas que existe para esto, vamos a usar carpetas "v1", "v2" y asi sucesivamente. Para eso vamos a mover la carpera routes a "src/v1". Y dentro de routes creamos index.js donde creamos una ruta con el metodo Router(). Esta será la base para las demas rutas. Agregamos esta importación al index.js del "/src" poniendo una nueva url "/api/v1/"

## Instalación
Independientemente que uses cualquier branch vas a tener que hacer lo siguiente:
1. Clonar el proyecto.
2. Pararte en la rama que quieres ver o probar.
3. Ejecutar: `npm install` para instalar el node_module
4. Ejecutar: `npm run dev` para ejecutar el servicio.
