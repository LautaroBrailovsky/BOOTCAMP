
-- =========================================================
-- SQL CHEATSHEET: PostgreSQL
-- Referencia de consulta. No es necesario ejecutar todo el
-- archivo de una vez: algunos ejemplos son alternativas.
-- Base de datos de práctica: academia
-- =========================================================

-- 0. CONSULTAS SENCILLAS
SELECT 'Hola, PostgreSQL' AS mensaje;
SELECT 2 + 3 AS resultado;
SELECT CURRENT_DATE;
SELECT CURRENT_TIMESTAMP;

-- =========================================================
-- 1. CREAR Y BORRAR TABLAS
-- =========================================================

-- INTEGER autogenerado (PostgreSQL)
CREATE TABLE ejemplo (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Añadir una columna
ALTER TABLE ejemplo ADD COLUMN email VARCHAR(150);

-- Cambiar el tipo de una columna (revisar compatibilidad de datos)
-- ALTER TABLE ejemplo ALTER COLUMN nombre TYPE VARCHAR(200);

-- Eliminar una columna
-- ALTER TABLE ejemplo DROP COLUMN email;

-- Eliminar una tabla: operación destructiva
-- DROP TABLE ejemplo;

-- =========================================================
-- 2. INTEGER AUTOGENERADO Y UUID
-- =========================================================

-- En esta práctica usamos INTEGER IDENTITY por sencillez:
-- id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY

-- UUID es otro tipo de identificador.
-- Este ejemplo define el tipo, pero no genera automáticamente el UUID:
CREATE TABLE ejemplo_uuid (
    id UUID PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Para insertar en ejemplo_uuid, proporciona un UUID válido
-- o configura una estrategia de generación adecuada al proyecto.
-- La generación puede realizarse en la aplicación o en PostgreSQL.

-- =========================================================
-- 3. TIPOS DE DATOS HABITUALES EN POSTGRESQL
-- =========================================================
-- Texto:
-- TEXT                 texto de longitud variable
-- VARCHAR(100)         texto con longitud máxima
-- CHAR(2)              texto de longitud fija
--
-- Números:
-- SMALLINT             entero pequeño
-- INTEGER / INT        entero
-- BIGINT               entero grande
-- NUMERIC(10,2)        decimal exacto (por ejemplo, importes)
-- REAL / DOUBLE PRECISION números aproximados
--
-- Otros:
-- BOOLEAN              TRUE / FALSE
-- DATE                 fecha
-- TIME                 hora
-- TIMESTAMP            fecha y hora
-- TIMESTAMPTZ          fecha y hora con zona horaria
-- UUID                 identificador UUID
-- JSON / JSONB         datos JSON
--
-- Consejo: para dinero normalmente se prefiere NUMERIC(10,2)
-- frente a REAL/DOUBLE PRECISION, que usan aproximaciones.

-- =========================================================
-- 4. RESTRICCIONES (CONSTRAINTS)
-- =========================================================
-- PRIMARY KEY: identifica una fila; no se repite ni admite NULL.
-- FOREIGN KEY / REFERENCES: mantiene una relación válida.
-- NOT NULL: valor obligatorio.
-- UNIQUE: evita duplicados en la columna o combinación indicada.
-- CHECK: exige que se cumpla una condición.

-- =========================================================
-- 5. MODELO DE EJEMPLO: ALUMNOS Y DIRECCIONES
-- =========================================================
-- Si vas a recrear las tablas desde cero, elimina primero
-- la tabla dependiente (direcciones) y después alumnos.
-- Ejecuta estas líneas solo si quieres borrar las tablas
-- y sus datos de práctica:
-- DROP TABLE IF EXISTS direcciones;
-- DROP TABLE IF EXISTS alumnos;

CREATE TABLE IF NOT EXISTS alumnos (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    edad INTEGER CHECK (edad > 0),
    fecha_nacimiento DATE
);

CREATE TABLE IF NOT EXISTS direcciones (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    alumno_id INTEGER NOT NULL REFERENCES alumnos(id),
    calle VARCHAR(150) NOT NULL,
    ciudad VARCHAR(100) NOT NULL
);

-- =========================================================
-- 6. INSERT
-- =========================================================

INSERT INTO alumnos (nombre, email, edad, fecha_nacimiento)
VALUES ('Ana', 'ana@example.com', 22, '2004-03-12');

-- Insertar varias filas
INSERT INTO alumnos (nombre, email, edad, fecha_nacimiento)
VALUES
    ('Luis', 'luis@example.com', 25, '2001-07-08'),
    ('Marta', 'marta@example.com', 19, '2007-01-25');

-- Ejemplo de dirección: alumno_id debe existir en alumnos
-- INSERT INTO direcciones (alumno_id, calle, ciudad)
-- VALUES (1, 'Calle Mayor 10', 'Valencia');

-- =========================================================
-- 7. SELECT: ELEGIR COLUMNAS Y FILTRAR
-- =========================================================

-- Todas las columnas
SELECT * FROM alumnos;

-- Columnas concretas
SELECT nombre, email FROM alumnos;

-- Condición
SELECT * FROM alumnos WHERE edad >= 21;

-- AND / OR
SELECT * FROM alumnos WHERE edad >= 18 AND edad < 30;
SELECT * FROM alumnos WHERE nombre = 'Ana' OR nombre = 'Luis';

-- Distinto
SELECT * FROM alumnos WHERE edad <> 22;

-- IN
SELECT * FROM alumnos WHERE nombre IN ('Ana', 'Luis');

-- BETWEEN incluye ambos extremos
SELECT * FROM alumnos WHERE edad BETWEEN 18 AND 25;

-- LIKE: % representa cualquier secuencia de caracteres
SELECT * FROM alumnos WHERE nombre LIKE 'A%';
SELECT * FROM alumnos WHERE email LIKE '%@example.com';

-- IS NULL / IS NOT NULL
SELECT * FROM alumnos WHERE fecha_nacimiento IS NULL;
SELECT * FROM alumnos WHERE fecha_nacimiento IS NOT NULL;

-- Evita usar = NULL; utiliza IS NULL.

-- DISTINCT: valores sin repetir
SELECT DISTINCT ciudad FROM direcciones;

-- Ordenación
SELECT nombre, edad FROM alumnos ORDER BY edad ASC;
SELECT nombre, edad FROM alumnos ORDER BY edad DESC;

-- Límite de resultados
SELECT * FROM alumnos LIMIT 5;

-- Ordenación y límite combinados
SELECT nombre, edad
FROM alumnos
ORDER BY edad DESC
LIMIT 2;

-- Alias de columna
SELECT nombre AS nombre_alumno, edad AS edad_alumno
FROM alumnos;

-- =========================================================
-- 8. FUNCIONES DE AGREGACIÓN Y AGRUPACIÓN
-- =========================================================

SELECT COUNT(*) AS total_alumnos FROM alumnos;
SELECT AVG(edad) AS edad_media FROM alumnos;
SELECT MIN(edad) AS edad_minima FROM alumnos;
SELECT MAX(edad) AS edad_maxima FROM alumnos;
SELECT SUM(edad) AS suma_edades FROM alumnos;

-- Agrupar y contar
SELECT ciudad, COUNT(*) AS total_direcciones
FROM direcciones
GROUP BY ciudad;

-- HAVING filtra grupos después de agrupar
SELECT ciudad, COUNT(*) AS total_direcciones
FROM direcciones
GROUP BY ciudad
HAVING COUNT(*) > 1;

-- =========================================================
-- 9. JOIN
-- =========================================================

-- INNER JOIN: solo filas que tienen coincidencia
SELECT a.nombre, d.calle, d.ciudad
FROM alumnos AS a
INNER JOIN direcciones AS d
    ON a.id = d.alumno_id;

-- LEFT JOIN: conserva todas las filas de alumnos
SELECT a.nombre, d.calle, d.ciudad
FROM alumnos AS a
LEFT JOIN direcciones AS d
    ON a.id = d.alumno_id;

-- Alumnos que todavía no tienen dirección
SELECT a.id, a.nombre
FROM alumnos AS a
LEFT JOIN direcciones AS d
    ON a.id = d.alumno_id
WHERE d.id IS NULL;

-- Filtrar los resultados de un JOIN
SELECT a.nombre, d.calle, d.ciudad
FROM alumnos AS a
INNER JOIN direcciones AS d
    ON a.id = d.alumno_id
WHERE d.ciudad = 'Valencia';

-- RIGHT JOIN también existe; a menudo puede reescribirse
-- intercambiando el orden de las tablas y usando LEFT JOIN.

-- =========================================================
-- 10. UPDATE Y DELETE: ¡CUIDADO!
-- =========================================================

-- Primero comprueba las filas que coinciden:
SELECT * FROM alumnos WHERE email = 'ana@example.com';

-- Cambiar una fila
UPDATE alumnos
SET edad = 23
WHERE email = 'ana@example.com';

-- Borrar una fila concreta
DELETE FROM alumnos
WHERE email = 'ana@example.com';

-- ¡No ejecutes estas formas sin entenderlas!
-- UPDATE alumnos SET edad = 20; -- cambia todas las filas
-- DELETE FROM alumnos;          -- borra todas las filas

-- Una clave foránea puede impedir borrar un alumno que tenga
-- direcciones. Primero gestiona las filas relacionadas.

-- =========================================================
-- 11. SUBCONSULTA
-- =========================================================

-- Alumnos que tienen una dirección en Valencia
SELECT nombre
FROM alumnos
WHERE id IN (
    SELECT alumno_id
    FROM direcciones
    WHERE ciudad = 'Valencia'
);

-- =========================================================
-- 12. UNION
-- =========================================================

-- UNION combina resultados compatibles y elimina duplicados.
-- UNION ALL conserva duplicados.
-- Ejemplo ilustrativo:
-- SELECT ciudad AS lugar FROM direcciones
-- UNION
-- SELECT 'Sin especificar' AS lugar;

-- =========================================================
-- 13. ÍNDICES
-- =========================================================

-- Los índices pueden ayudar a buscar datos más rápido,
-- pero también ocupan espacio y pueden hacer más costantes
-- algunas escrituras. No se deben crear sin motivo.
-- CREATE INDEX idx_direcciones_ciudad ON direcciones(ciudad);

-- =========================================================
-- 14. TRANSACCIONES
-- =========================================================

-- Una transacción permite agrupar operaciones.
-- Practica estos comandos con cuidado y en datos de prueba.
-- BEGIN;
-- UPDATE alumnos SET edad = 24 WHERE email = 'ana@example.com';
-- SELECT * FROM alumnos WHERE email = 'ana@example.com';
-- ROLLBACK; -- deshace los cambios no confirmados
--
-- Si quieres confirmar una transacción, utiliza COMMIT en vez
-- de ROLLBACK. No ejecutes ambos esperando el mismo efecto.

-- =========================================================
-- 15. COMANDOS DE PSQL (NO SON SQL)
-- =========================================================
-- Se escriben dentro de la terminal psql, no en pgAdmin Query Tool:
-- \l          listar bases de datos
-- \dt         listar tablas
-- \d alumnos  describir una tabla
-- \conninfo   información de conexión
-- \i archivo.sql ejecutar un archivo accesible desde psql
-- \q          salir de psql

-- Nota: CREATE DATABASE se ejecuta en una conexión a otro
-- database existente; no se puede ejecutar dentro de una
-- transacción. En pgAdmin, clic derecho en Databases >
-- Create > Database. En psql, conecta a una base existente
-- y ejecuta CREATE DATABASE nombre; después conecta a ella.