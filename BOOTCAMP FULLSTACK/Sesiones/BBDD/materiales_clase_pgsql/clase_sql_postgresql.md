# SQL básico con PostgreSQL

**Duración orientativa:** 4–6 horas, según el ritmo del grupo.  
**Nivel:** iniciación.  
**Objetivo:** crear tablas relacionadas, introducir datos, consultar información y modificarla usando SQL, tanto desde la terminal como desde pgAdmin 4.

> En esta clase trabajaremos con PostgreSQL. SQL es un lenguaje común a varios motores de bases de datos, pero algunos detalles cambian entre PostgreSQL, MySQL y otros sistemas.

## Qué vamos a construir

Una pequeña base de datos de una academia:

- `alumnos`: guarda los datos de cada alumno.
- `direcciones`: guarda las direcciones de los alumnos.
- Un alumno puede tener varias direcciones.
- Cada dirección pertenece a un único alumno.

No es un modelo de producción: lo utilizaremos para aprender SQL y las relaciones entre tablas.

---

## 1. SQL y bases de datos relacionales

Una **base de datos** almacena información organizada. En una base de datos relacional, la información se organiza en **tablas**.

- **Tabla:** conjunto de datos sobre algo, por ejemplo, alumnos.
- **Columna:** una característica, por ejemplo, nombre o email.
- **Fila:** un registro concreto, por ejemplo, los datos de Ana.
- **SQL:** lenguaje que usamos para crear estructuras, consultar y cambiar datos.
- **Motor de base de datos:** programa que almacena y gestiona los datos. En esta clase será PostgreSQL.

Ejemplo de tabla `alumnos`:

| id | nombre | email | edad |
|---:|---|---|---:|
| 1 | Ana | ana@example.com | 22 |
| 2 | Luis | luis@example.com | 25 |

### SQL no es un único programa

PostgreSQL, MySQL y MariaDB son motores distintos que permiten trabajar con SQL. Gran parte de las consultas básicas se parecen, pero existen diferencias de sintaxis, tipos de datos y herramientas.

En esta clase usaremos sintaxis de **PostgreSQL**. Quien quiera probar MySQL deberá consultar su documentación y adaptar los ejemplos; por ejemplo, la generación automática de identificadores suele escribirse de otra manera.

### Mini ejercicio 1

Sin escribir código, responde:

1. En una tabla `alumnos`, ¿qué sería una columna?
2. ¿Qué representa una fila?
3. ¿SQL es lo mismo que PostgreSQL?

---

## 2. Preparar PostgreSQL con Docker Compose

Docker ya está instalado en los ordenadores. Usaremos Docker para ejecutar PostgreSQL sin instalar el servidor directamente en cada equipo.

### Paso 1. Crear una carpeta

Crea una carpeta llamada `practica-sql`. Dentro, crea un archivo llamado `compose.yaml` con este contenido:

```yaml
services:
  postgres:
    image: postgres:17
    container_name: postgres-sql
    environment:
      POSTGRES_DB: academia
      POSTGRES_USER: alumno
      POSTGRES_PASSWORD: alumno_dev_123
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

Estas credenciales son solo para la práctica. **No las uses en una aplicación real.**

Qué significa lo importante:

- `image`: imagen de PostgreSQL que Docker descargará si hace falta.
- `container_name`: nombre que tendrá el contenedor.
- `POSTGRES_DB`: base de datos inicial.
- `POSTGRES_USER` y `POSTGRES_PASSWORD`: usuario y contraseña.
- `ports`: permite acceder al servidor desde el ordenador.
- `volumes`: conserva los datos aunque se elimine el contenedor.

### Paso 2. Arrancar el contenedor

Abre una terminal en la carpeta `practica-sql` y ejecuta:

```bash
docker compose up -d
```

Comprueba que está funcionando:

```bash
docker ps
```

Deberías ver un contenedor llamado `postgres-sql`.

Para ver los mensajes de inicio:

```bash
docker logs postgres-sql
```

### Si aparece un error con el puerto 5432

Puede que otro programa esté utilizando ese puerto. En `compose.yaml`, cambia:

```yaml
ports:
  - "5433:5432"
```

Vuelve a arrancar el servicio. En ese caso, desde el ordenador te conectarás al puerto **5433**; dentro del contenedor PostgreSQL sigue utilizando el 5432.

### Ejercicio 2

1. Arranca PostgreSQL.
2. Ejecuta `docker ps`.
3. Identifica el nombre del contenedor.
4. ¿Qué puerto se publica en tu ordenador?
5. Ejecuta `docker logs postgres-sql` y busca un mensaje que indique que PostgreSQL está preparado.

---

## 3. Trabajar desde la terminal con `psql`

`psql` es una herramienta de terminal para conectarse a PostgreSQL y ejecutar consultas SQL.

Con el contenedor de esta práctica, ejecuta:

```bash
docker exec -it postgres-sql psql -U alumno -d academia
```

Qué significa:

- `docker exec`: ejecuta un comando dentro de un contenedor activo.
- `-it`: permite interactuar con el programa desde la terminal.
- `psql`: abre la herramienta de PostgreSQL.
- `-U alumno`: usa el usuario `alumno`.
- `-d academia`: se conecta a la base de datos `academia`.

Cuando conecte, verás un indicador parecido a:

```text
academia=>
```

Prueba:

```sql
SELECT 'Hola, PostgreSQL';
SELECT 2 + 3;
SELECT CURRENT_DATE;
```

Las consultas SQL suelen terminar con punto y coma (`;`).

### Comandos propios de `psql`

Estos comandos empiezan por una barra invertida. No son SQL; funcionan dentro de `psql`.

```text
\l          listar bases de datos
\dt         listar tablas
\d alumnos  ver la estructura de la tabla alumnos
\conninfo   ver información de la conexión
\q          salir de psql
```

Si todavía no existe la tabla `alumnos`, `\dt` no mostrará esa tabla. Es normal.

Para salir de `psql`, escribe `\q`.

### Ejercicio 3

Desde la terminal:

1. Conéctate a `academia`.
2. Ejecuta `SELECT 10 * 5;`.
3. Consulta la fecha actual.
4. Lista las bases de datos con `\l`.
5. Sal de `psql` y vuelve a entrar.

---

## 4. Conectar pgAdmin 4 con el PostgreSQL de Docker

**pgAdmin 4 es una herramienta gráfica para administrar PostgreSQL.** No es el servidor de base de datos: se conecta al servidor PostgreSQL que tenemos en Docker.

En esta configuración instalamos pgAdmin 4 en el ordenador y PostgreSQL se ejecuta en el contenedor.

### Paso 1. Abrir pgAdmin 4

Abre la aplicación pgAdmin 4. Dependiendo de la instalación, puede abrirse una ventana de aplicación o una página en el navegador.

Si solicita una contraseña maestra, créala y guárdala: protege las contraseñas de conexión que pgAdmin almacena. No es la contraseña del usuario `alumno` de PostgreSQL.

### Paso 2. Registrar el servidor

En el panel de navegación de la izquierda:

1. Haz clic derecho sobre **Servers**.
2. Selecciona **Register → Server…**.
3. En la pestaña **General**, escribe un nombre reconocible, por ejemplo `PostgreSQL Docker`.
4. Abre la pestaña **Connection** y rellena:

| Campo | Valor |
|---|---|
| Host name/address | `localhost` |
| Port | `5432` |
| Maintenance database | `academia` |
| Username | `alumno` |
| Password | `alumno_dev_123` |

5. Puedes activar **Save password?** si es un ordenador de prácticas personal.
6. Pulsa **Save**.

Si cambiaste el puerto del equipo a `5433`, usa `5433` en pgAdmin.

### Paso 3. Encontrar la base de datos

En el panel izquierdo, despliega:

`Servers → PostgreSQL Docker → Databases → academia`

Dentro encontrarás apartados como **Schemas**, **Tables** y otros objetos. Si no ves una tabla que acabas de crear, haz clic derecho en **Tables** y selecciona **Refresh**.

### Paso 4. Abrir el editor SQL (Query Tool)

1. Selecciona la base de datos `academia` en el panel izquierdo.
2. Haz clic derecho sobre `academia`.
3. Elige **Query Tool**. Según la versión, también puede aparecer como un botón en la barra de herramientas.
4. Escribe:

```sql
SELECT 'Hola desde pgAdmin' AS mensaje;
SELECT 2 + 3 AS resultado;
```

5. Pulsa el botón **Execute/Refresh** (icono de rayo en muchas versiones; el aspecto puede variar).
6. Busca el resultado en el panel inferior, normalmente en la pestaña **Data Output**.

### Abrir y ejecutar un archivo `.sql`

Un archivo `.sql` es un archivo de texto que contiene instrucciones SQL. No es una base de datos ni un formato especial binario.

En **Query Tool**:

1. Pulsa el icono **Open File** (carpeta) o usa la opción de abrir archivo del editor.
2. Selecciona un archivo `.sql`.
3. Revisa el contenido antes de ejecutarlo.
4. Pulsa **Execute/Refresh**.
5. Lee los mensajes y los resultados de la parte inferior.

**Importante:** el archivo se ejecuta contra la base de datos seleccionada. Comprueba que estás en `academia`.

### Ejercicio 4

1. Conecta pgAdmin con el servidor Docker.
2. Ejecuta `SELECT 'Estoy conectado' AS estado;`.
3. Ejecuta `SELECT CURRENT_DATE;`.
4. Localiza `Databases` y la base de datos `academia`.
5. Explica con tus palabras la diferencia entre pgAdmin y PostgreSQL.

---

## 5. Crear tablas: `CREATE TABLE`

Vamos a crear las tablas `alumnos` y `direcciones`.

Antes, unas palabras clave:

- `CREATE TABLE`: crea una tabla.
- `PRIMARY KEY`: identifica de forma única cada fila.
- `NOT NULL`: el valor es obligatorio.
- `UNIQUE`: no permite valores repetidos en esa columna.
- `REFERENCES`: establece una relación con otra tabla.

Ejecuta en `psql` o en el **Query Tool** de pgAdmin:

```sql
CREATE TABLE alumnos (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    edad INTEGER CHECK (edad > 0)
);
```

### ¿Qué significa el identificador autogenerado?

```sql
id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY
```

- `INTEGER`: número entero.
- `GENERATED ALWAYS AS IDENTITY`: PostgreSQL genera el valor automáticamente.
- `PRIMARY KEY`: ese valor identifica una fila y no se puede repetir.

No tenemos que indicar el `id` al insertar un alumno.

### ¿Es lo mismo que UUID?

No. Un **UUID** es un identificador de un formato distinto, por ejemplo:

```text
550e8400-e29b-41d4-a716-446655440000
```

PostgreSQL tiene un tipo `UUID` para almacenar ese valor. En muchas aplicaciones, el UUID se genera en el backend o mediante una configuración de la base de datos. No existe una única estrategia que sirva para todos los proyectos.

En esta práctica usaremos `INTEGER` autogenerado porque es fácil de leer y nos permite centrarnos en SQL. En otros proyectos se pueden utilizar UUID, por ejemplo para identificadores que se generan fuera de la base de datos o que necesitan crearse en distintos sistemas.

### Crear la tabla `direcciones`

```sql
CREATE TABLE direcciones (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    alumno_id INTEGER NOT NULL REFERENCES alumnos(id),
    calle VARCHAR(150) NOT NULL,
    ciudad VARCHAR(100) NOT NULL
);
```

La columna `alumno_id` es una **clave foránea**: guarda el `id` de un alumno existente.

La relación es de **uno a muchos (1:N)**: un alumno puede tener varias direcciones, pero cada dirección pertenece a un solo alumno.

### Ver las tablas

En `psql`:

```text
\dt
\d alumnos
\d direcciones
```

En pgAdmin:

`Databases → academia → Schemas → public → Tables`

Si las tablas no aparecen, haz clic derecho en **Tables → Refresh**.

### Ejercicio 5

1. Crea las dos tablas.
2. Añade a `alumnos` una columna `fecha_nacimiento` de tipo `DATE` con `ALTER TABLE`.
3. Comprueba la estructura de `alumnos`.
4. ¿Qué columna relaciona las dos tablas?
5. ¿Por qué `alumno_id` no es el identificador principal de `direcciones`?

Pista para añadir la columna:

```sql
ALTER TABLE alumnos
ADD COLUMN fecha_nacimiento DATE;
```

---

## 6. Insertar datos: `INSERT`

Añadimos algunos alumnos. No escribimos el campo `id`: PostgreSQL lo genera.

```sql
INSERT INTO alumnos (nombre, email, edad, fecha_nacimiento)
VALUES
    ('Ana', 'ana@example.com', 22, '2004-03-12'),
    ('Luis', 'luis@example.com', 25, '2001-07-08'),
    ('Marta', 'marta@example.com', 19, '2007-01-25'),
    ('Hugo', 'hugo@example.com', 30, '1996-11-02');
```

Las columnas indicadas entre paréntesis deben corresponder a los valores de cada fila. Las cadenas de texto y las fechas se escriben entre comillas simples.

Ahora insertamos direcciones:

```sql
INSERT INTO direcciones (alumno_id, calle, ciudad)
VALUES
    (1, 'Calle Mayor 10', 'Valencia'),
    (1, 'Avenida del Puerto 20', 'Valencia'),
    (2, 'Calle Sol 5', 'Sagunto'),
    (3, 'Calle Luna 8', 'Valencia');
```

Este ejemplo presupone que los identificadores asignados a los alumnos son 1, 2, 3 y 4. Si ya habías insertado registros o los identificadores son distintos, consulta primero los `id` reales y adapta los valores.

Consulta los datos:

```sql
SELECT * FROM alumnos;
SELECT * FROM direcciones;
```

### ¿Qué pasa si una dirección referencia a un alumno que no existe?

Prueba con un `alumno_id` inexistente:

```sql
INSERT INTO direcciones (alumno_id, calle, ciudad)
VALUES (9999, 'Calle Inventada 1', 'Valencia');
```

PostgreSQL rechazará la operación porque la clave foránea exige que el alumno exista. Es una protección para mantener los datos relacionados correctamente.

### Ejercicio 6

1. Inserta un alumno nuevo.
2. Inserta una dirección para ese alumno.
3. Intenta insertar otra dirección con un `alumno_id` que no exista.
4. Inserta una segunda dirección para un alumno que ya tenga una.
5. ¿Qué restricción evita que se repita un email?

---

## 7. Consultar datos: `SELECT`

La consulta más sencilla:

```sql
SELECT * FROM alumnos;
```

`*` significa «todas las columnas». En consultas reales suele ser mejor indicar solo las columnas que necesitamos:

```sql
SELECT nombre, email
FROM alumnos;
```

### Filtrar con `WHERE`

```sql
SELECT nombre, edad
FROM alumnos
WHERE edad >= 22;
```

Operadores habituales:

| Operador | Significado |
|---|---|
| `=` | igual |
| `<>` | distinto |
| `>` / `<` | mayor / menor |
| `>=` / `<=` | mayor o igual / menor o igual |
| `AND` | deben cumplirse ambas condiciones |
| `OR` | basta con que se cumpla una |
| `IN (...)` | el valor está en una lista |
| `BETWEEN ... AND ...` | dentro de un intervalo |
| `LIKE` | búsqueda con patrones |
| `IS NULL` | el valor es nulo |

Ejemplos:

```sql
SELECT * FROM alumnos
WHERE edad >= 25;

SELECT * FROM direcciones
WHERE ciudad = 'Valencia';
```

La segunda consulta dará error porque `ciudad` no está en `alumnos`. La ciudad está en `direcciones`. Lo resolveremos con `JOIN` más adelante.

```sql
SELECT nombre, edad FROM alumnos
WHERE edad >= 20 AND edad < 30;

SELECT nombre FROM alumnos
WHERE nombre LIKE 'A%';
```

En `LIKE`, `%` representa cualquier secuencia de caracteres. `'A%'` encuentra nombres que empiezan por A.

### Ordenar y limitar

```sql
SELECT nombre, edad
FROM alumnos
ORDER BY edad DESC;

SELECT nombre, edad
FROM alumnos
ORDER BY edad ASC
LIMIT 2;
```

`ASC` ordena de menor a mayor; `DESC`, de mayor a menor. `LIMIT` limita el número de filas devueltas.

### Ejercicio 7

Escribe consultas para:

1. Mostrar solo los nombres y emails.
2. Encontrar alumnos mayores de 21 años.
3. Encontrar alumnos cuyo nombre empieza por `M`.
4. Ordenar los alumnos de mayor a menor edad.
5. Mostrar los dos alumnos más jóvenes.
6. Encontrar alumnos con edad entre 20 y 29 años.

---

## 8. Consultas útiles: `DISTINCT` y agregaciones

`DISTINCT` elimina duplicados del resultado:

```sql
SELECT DISTINCT ciudad
FROM direcciones;
```

Funciones de agregación:

```sql
SELECT COUNT(*) AS total_alumnos
FROM alumnos;

SELECT AVG(edad) AS edad_media
FROM alumnos;

SELECT MIN(edad) AS edad_minima, MAX(edad) AS edad_maxima
FROM alumnos;
```

`COUNT` cuenta, `AVG` calcula una media, `MIN` obtiene el menor valor y `MAX` el mayor.

### Agrupar con `GROUP BY`

```sql
SELECT ciudad, COUNT(*) AS total_direcciones
FROM direcciones
GROUP BY ciudad;
```

Agrupa las filas que comparten ciudad y cuenta cuántas direcciones hay en cada grupo.

### Ejercicio 8

1. Cuenta el número de alumnos.
2. Calcula la edad media.
3. Muestra las ciudades sin repetir.
4. Cuenta cuántas direcciones hay en cada ciudad.

---

## 9. Consultar datos relacionados: `INNER JOIN`

Las direcciones están en una tabla diferente. Para ver el nombre del alumno junto a su dirección, combinamos las tablas.

```sql
SELECT
    alumnos.nombre,
    direcciones.calle,
    direcciones.ciudad
FROM alumnos
INNER JOIN direcciones
    ON alumnos.id = direcciones.alumno_id;
```

- `FROM alumnos`: empezamos por la tabla de alumnos.
- `INNER JOIN direcciones`: combinamos con las direcciones.
- `ON ...`: indica qué columnas relacionan las filas.

`INNER JOIN` devuelve las coincidencias entre las dos tablas. Un alumno sin dirección no aparece en este resultado.

### Usar alias

Podemos asignar nombres cortos a las tablas:

```sql
SELECT
    a.nombre,
    d.calle,
    d.ciudad
FROM alumnos AS a
INNER JOIN direcciones AS d
    ON a.id = d.alumno_id;
```

`a` representa `alumnos` y `d` representa `direcciones`.

### ¿Y si queremos incluir alumnos sin dirección?

Con `LEFT JOIN`:

```sql
SELECT
    a.nombre,
    d.calle,
    d.ciudad
FROM alumnos AS a
LEFT JOIN direcciones AS d
    ON a.id = d.alumno_id;
```

`LEFT JOIN` conserva todas las filas de la tabla de la izquierda (`alumnos`). Si no hay dirección, las columnas de `direcciones` aparecerán como `NULL`.

### Ejercicio 9

1. Muestra el nombre del alumno, la calle y la ciudad.
2. Repite la consulta utilizando alias `a` y `d`.
3. Prueba `LEFT JOIN` y observa qué ocurre con los alumnos sin dirección.
4. Muestra solo las direcciones de Valencia.
5. ¿Por qué un alumno con dos direcciones aparece dos veces en el resultado?

---

## 10. Modificar y eliminar datos

### `UPDATE`: cambiar datos

Primero consulta la fila que quieres modificar:

```sql
SELECT * FROM alumnos
WHERE email = 'ana@example.com';
```

Después, actualiza:

```sql
UPDATE alumnos
SET edad = 23
WHERE email = 'ana@example.com';
```

**Cuidado:** si omites `WHERE`, se actualizarán todas las filas de la tabla.

### `DELETE`: borrar filas

```sql
DELETE FROM alumnos
WHERE email = 'hugo@example.com';
```

**Cuidado con las relaciones:** no podrás borrar un alumno que todavía tenga direcciones relacionadas, porque la clave foránea protege esos datos. Primero tendrías que borrar las direcciones correspondientes o diseñar la relación con otra política de borrado.

Para eliminar una dirección concreta:

```sql
DELETE FROM direcciones
WHERE id = 4;
```

No confundas:

- `DELETE FROM tabla WHERE ...`: borra filas.
- `DROP TABLE tabla`: elimina la tabla y su estructura.

### Ejercicio 10

1. Cambia la edad de un alumno.
2. Comprueba que el cambio se ha aplicado.
3. Intenta borrar un alumno que tenga direcciones y observa el error.
4. Borra primero una de sus direcciones y vuelve a intentarlo.
5. Explica por qué es peligroso ejecutar un `DELETE` sin `WHERE`.

---

## 11. Archivos `.sql` y trabajo habitual

Un archivo `.sql` es un archivo de texto con instrucciones SQL. Puede contener creación de tablas, inserciones y consultas.

Por ejemplo, puedes guardar las consultas de una práctica en `consultas.sql`:

```sql
-- Mostrar todos los alumnos
SELECT * FROM alumnos;

-- Mostrar los alumnos mayores de 21
SELECT nombre, edad
FROM alumnos
WHERE edad > 21;
```

En pgAdmin:

1. Abre la base de datos `academia`.
2. Abre **Query Tool**.
3. Usa **Open File** para cargar `consultas.sql`.
4. Comprueba qué base de datos está seleccionada.
5. Ejecuta las instrucciones.
6. Revisa los mensajes y los resultados.

En `psql`, puedes ejecutar un archivo con:

```text
\i /ruta/al/archivo/consultas.sql
```

La ruta debe ser accesible desde el entorno donde se está ejecutando `psql`. En nuestra conexión mediante `docker exec`, `psql` se ejecuta dentro del contenedor; por eso, para principiantes resulta más sencillo usar pgAdmin o copiar el archivo al contenedor antes de utilizar `\i`.

### Ejercicio 11

Crea un archivo `consultas.sql` con estas tres consultas:

1. Todos los alumnos ordenados por nombre.
2. Los alumnos mayores de 20 años.
3. Nombre del alumno y ciudad, utilizando `INNER JOIN`.

Ábrelo y ejecútalo desde pgAdmin.

---

## 12. Introducción a la inyección SQL

Hasta ahora hemos escrito consultas directamente en PostgreSQL. En una aplicación real, una persona puede introducir datos en un formulario y el backend utiliza esos datos para consultar la base de datos.

La **inyección SQL** es una vulnerabilidad que puede aparecer cuando una aplicación construye una consulta concatenando directamente texto introducido por el usuario. En ese caso, una entrada podría cambiar el significado de la consulta.

### Ejemplo sencillo

Imagina que una aplicación de backend construye una consulta de búsqueda de alumnos concatenando el nombre recibido:

```javascript
const nombre = entradaDelFormulario;

const sql =
    "SELECT * FROM alumnos WHERE nombre = '" + nombre + "'";
```

El problema no es el `SELECT` por sí mismo. El problema es mezclar directamente el texto introducido por una persona con el código SQL.

Si una aplicación hace esto con entradas no confiables, alguien podría introducir contenido diseñado para alterar la consulta. En una aplicación real, el impacto puede incluir acceder a información que no debería estar disponible o modificar datos, dependiendo de los permisos y de las consultas construidas.

### ¿Cómo se evita?

En el backend se deben utilizar **consultas parametrizadas** en lugar de concatenar datos del usuario dentro del SQL.

Por ejemplo, con Node.js y el paquete `pg` para PostgreSQL:

```javascript
const resultado = await pool.query(
    "SELECT * FROM alumnos WHERE nombre = $1",
    [nombre]
);
```

`$1` es un marcador de posición. El valor de `nombre` se envía por separado, en vez de incorporarse al texto de la consulta.

En esta clase solo necesitamos entender la idea: **los datos que introduce una persona deben tratarse como datos, no como parte del código SQL**. Más adelante, cuando trabajemos con Node.js y el backend, practicaremos cómo parametrizar consultas.

### Ejercicio 12

1. Explica con tus palabras qué es una inyección SQL.
2. ¿Qué riesgo tiene construir una consulta concatenando texto introducido en un formulario?
3. ¿En qué parte de una aplicación web aplicarías consultas parametrizadas: en el HTML, en el backend o en ambos?
4. Busca en la documentación del paquete `pg` cómo se pasan parámetros a `pool.query()`.

Documentación para consultar: [node-postgres: Queries](https://node-postgres.com/features/queries).

> En esta sesión no vamos a practicar ataques contra sistemas. El objetivo es reconocer el riesgo y conocer la medida de prevención que utilizaremos en el backend.

---

## 13. Reto final

Sin copiar una solución completa, escribe consultas para:

1. Mostrar los nombres de todos los alumnos.
2. Mostrar alumnos de 20 años o más, ordenados por edad.
3. Contar cuántas direcciones hay en cada ciudad.
4. Mostrar nombre, calle y ciudad de cada dirección.
5. Mostrar todos los alumnos, aunque no tengan dirección.
6. Cambiar el email de un alumno.
7. Borrar una dirección concreta.

Antes de ejecutar `UPDATE` o `DELETE`, haz primero un `SELECT` con el mismo filtro para comprobar qué fila o filas afectará.

---

## 14. Comandos útiles de Docker

```bash
docker ps
docker logs postgres-sql
docker stop postgres-sql
docker start postgres-sql
docker compose down
```

- `docker stop`: detiene el contenedor.
- `docker start`: vuelve a arrancarlo.
- `docker compose down`: elimina el contenedor y la red creada por Compose, pero conserva el volumen con los datos.
- `docker compose down -v`: también elimina el volumen y, por tanto, los datos persistidos. **No lo ejecutes si quieres conservar la base de datos.**

Si necesitas reiniciar el entorno desde cero, hazlo solo después de confirmar que puedes perder todos los datos.

---

## 15. Documentación para consultar

- [Documentación oficial de PostgreSQL](https://www.postgresql.org/docs/)
- [Tutorial oficial de PostgreSQL](https://www.postgresql.org/docs/current/tutorial.html)
- [Documentación de pgAdmin 4](https://www.pgadmin.org/docs/)
- [Imagen oficial de PostgreSQL para Docker](https://hub.docker.com/_/postgres)
- [SQL en W3Schools](https://www.w3schools.com/sql/)

No hace falta memorizar toda la sintaxis. El objetivo es aprender a leer una consulta, probarla, interpretar el resultado y consultar la documentación cuando algo no se recuerda.