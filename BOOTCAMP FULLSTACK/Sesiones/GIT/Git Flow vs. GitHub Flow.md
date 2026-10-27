# Git Flow vs. GitHub Flow

## 1. Git Flow

Git Flow organiza el trabajo con varias ramas con funciones distintas.

- `main`: versiones publicadas en producción.
- `develop`: integra el trabajo para la próxima versión.
- `feature/*`: nuevas funcionalidades; normalmente nacen de `develop`.
- `hotfix/*`: arreglos urgentes; nacen de `main`.

> Git Flow también contempla ramas `release/*` para preparar una versión. No todos los equipos las utilizan: hay equipos que preparan y publican la release directamente desde `main`.

### Esquema simplificado

```text
                 feature/login
                /
main ──────────●──────────────────●──── versión publicada
               \                  ↑
                develop ──────────┘
                   ↑
              nuevas funciones

main ──●── hotfix/error ──●── merge de vuelta a main
```

**¿Cómo se publica una release?**

En el modelo con rama `release/*`, se crea desde `develop`, se prepara y se integra en `main` para publicar. Si el equipo no usa esa rama, puede cerrar y publicar la versión directamente desde `main`.

**¿Cómo se hace un hotfix?**

Se crea `hotfix/*` desde `main`, que representa producción. Se corrige el error, se valida y se publica una nueva versión. Después, se integra también la corrección en `develop` para que no se pierda en el siguiente desarrollo.

## 2. GitHub Flow

GitHub Flow utiliza un flujo más sencillo: una rama principal (`main`) y ramas cortas para cada cambio.

- `main`: rama principal; debe mantenerse lista para desplegar.
- `feature/*` o `fix/*`: ramas temporales para desarrollar un cambio.
- Pull request (PR): revisión del cambio antes de integrarlo en `main`.

### Esquema simplificado

```text
main ─────●────────────●────────────●────
           \          / \          /
            feature/a   fix/error
```

**¿Cómo se publica una release?**

Se integra el cambio en `main` mediante un PR. Cuando se decide publicar, se despliega esa versión y, si se desea identificarla, se crea un tag como `v1.2.0`.

**¿Cómo se hace un hotfix?**

- Si `main` coincide con producción, se crea `fix/*` desde `main`.
- Si `main` ya contiene cambios que aún no se han publicado, se puede crear `hotfix/*` desde el tag de la última versión desplegada.
- Se corrige, se prueba y se publica una nueva versión. Después, se integra la corrección en `main` mediante un merge.

## 3. Diferencia clave

| Git Flow | GitHub Flow |
|---|---|
| Varias ramas con funciones definidas. | Una rama principal y ramas temporales. |
| Separa el desarrollo (`develop`) de producción (`main`). | Los cambios se integran en `main` mediante PR. |
| Puede usar ramas `release/*`. | Las versiones pueden identificarse con tags. |
| El hotfix suele partir de `main`. | El hotfix parte de `main` o del tag de producción si `main` tiene cambios aún no publicados. |

## Ideas clave

- **Rama:** línea de trabajo donde se realizan cambios.
- **Tag:** etiqueta que identifica un commit concreto, por ejemplo, una versión publicada.
- **Release:** versión que se prepara o publica; no es lo mismo que una rama.
- **Producción:** la versión que están utilizando los usuarios.
- **No hay un único flujo obligatorio:** los equipos adaptan estos modelos a su forma de trabajar.

En una entrevista, conviene saber explicar ambos modelos y describir cuál utilizaste, cómo publicabais versiones y cómo resolvíais un hotfix.