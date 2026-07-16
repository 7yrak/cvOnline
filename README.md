# CV Online · Sergio Fica

Portafolio profesional de Sergio Fica Troncoso, Líder Técnico / Tech Lead. La aplicación está construida con Next.js y preparada para ejecutarse en Linux mediante Docker Compose.

## Requisitos

- Git
- Docker Engine 24 o superior
- Docker Compose v2

Para desarrollo sin Docker se requiere Node.js 22.13 o superior.

## Instalación en Linux con Docker

```bash
git clone https://github.com/7yrak/cvOnline.git
cd cvOnline
cp .env.example .env
docker compose up -d --build
```

El sitio queda disponible por defecto en:

```text
http://IP_DEL_SERVIDOR:3080
```

Para usar otro puerto, modifica `CV_ONLINE_PORT` en `.env` antes de levantar el contenedor.

## Operación

Ver el estado:

```bash
docker compose ps
```

Ver los logs:

```bash
docker compose logs -f cv-online
```

Reiniciar:

```bash
docker compose restart cv-online
```

Detener:

```bash
docker compose down
```

## Actualizar una versión

```bash
git pull
docker compose up -d --build
docker image prune -f
```

## Proxy inverso Nginx

El archivo `deploy/nginx-cvonline.conf.example` contiene una configuración base para publicar el sitio mediante un dominio y proxy inverso. Copia el archivo a `/etc/nginx/sites-available/`, ajusta `server_name` y habilítalo según la configuración de tu servidor.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abrir `http://localhost:3000`.

## Verificación

```bash
npm run lint
npm run build
```

## Versionado

La versión actual está registrada en `VERSION` y `CHANGELOG.md`.
