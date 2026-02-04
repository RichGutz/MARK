# Guía de Despliegue en Hostinger (Git Integration)

Esta guía detalla cómo conectar tu repositorio **Petral.MARK** con Hostinger para que tu Dashboard esté accesible en la web y se actualice automáticamente cada vez que hagamos cambios ("Push").

## Prerrequisitos
1.  Tener el código actualizado en tu repositorio remoto (GitHub, GitLab o Bitbucket).
2.  Acceso a tu panel de control de Hostinger (hPanel).

## Paso 1: Subir Cambios a la Nube (Remote)
Antes de que Hostinger pueda ver los cambios, debemos asegurarnos de que `Petral.MARK` esté sincronizado con tu repositorio en la nube.

**Comando (desde tu PC):**
```bash
cd C:\Users\rguti\Petral.MARK
git add .
git commit -m "Deploy: Dashboard Web v1.0"
git push origin master
```
*(Si usas otra rama como `main`, cambia `master` por `main`)*.

---

## Paso 2: Configuración en Hostinger

1.  **Entra al hPanel**: Loguéate en [hostinger.com](https://hostinger.com).
2.  **Ve a "Sitios Web"**: Selecciona el dominio donde quieres alojar el dashboard (ej. `petral-mark.com` o un subdominio).
3.  **Busca "Git"**: En el menú lateral o buscador, escribe "Git" y entra a la sección **"Despliegue GIT"** (Advanced > GIT).

---

## Paso 3: Conectar el Repositorio

En la sección "Create a New Repository":

1.  **Repository URL**: Pega la URL de tu repositorio (ej. `https://github.com/rguti/Petral.MARK.git`).
2.  **Branch**: Escribe `master` (o la rama que uses).
3.  **Directory**: Deja esto **VAcíO** si quieres que se instale en la raíz del dominio (`public_html`).
    *   *Ojo: Si tu código web está dentro de la carpeta `Dashboard_Puertos`, tendrás que configurar la ruta de publicación después.*

4.  **Botón "Create"**: Hostinger intentará clonar el repo.
    *   *Si es un repo privado*, Hostinger te dará una "SSH Key". Debes copiar esa clave e ir a tu GitHub/GitLab -> Settings -> Deploy Keys -> Add Key.

---

## Paso 4: Ajustar la Carpeta Web

Como tu proyecto tiene carpetas internas (`Infomemo`, `Dashboard_Puertos`), no queremos que la gente vea todo eso. Queremos que al entrar a la web, vean directamente el Dashboard.

**Opción A: `.htaccess` (Recomendada)**
Crearemos un archivo `.htaccess` en la raíz de `public_html` para redirigir el tráfico a la carpeta del dashboard.

**Opción B: Despliegue en Subcarpeta**
En el paso 3, en "Directory", podrías haber puesto `dashboard`. Así tu web sería `tudominio.com/dashboard`.

---

## Paso 5: Actualizaciones Futuras (CD)

Cada vez que hagamos un cambio en el código:
1.  Yo (Gemini) hago los cambios en tu PC.
2.  Ejecutamos `git push`.
3.  Entras a Hostinger -> Git -> **"Auto Deployment"** (activar) o pulsas el botón **"Deploy"** manualmente.
4.  ¡Listo! La web se actualiza sola.
