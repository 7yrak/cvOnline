# CV Online · Sergio Fica

Portafolio profesional de Sergio Fica Troncoso, Líder Técnico / Tech Lead. La aplicación está construida con Next.js y preparada para ejecutarse en Linux mediante Docker Compose.

La versión también incluye un pipeline Jenkins que genera un artefacto standalone, lo copia al host y despliega la aplicación como servicio `systemd`.

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

## Despliegue mediante Jenkins

El trabajo usa **Pipeline script**, igual que `finanzas-personales-build`. Copia el contenido de `Jenkinsfile` en el campo Script de Jenkins y mantén activado **Use Groovy Sandbox**. El archivo en Git sirve como respaldo; cuando cambie, actualiza también el Script del trabajo.

El pipeline:

1. Limpia el workspace.
2. Clona `git@github.com:7yrak/cvOnline.git`.
3. Verifica Node.js, npm y zip.
4. Ejecuta `npm ci`, lint y build.
5. Empaqueta el resultado standalone en `cv-online-build.zip`.
6. Archiva el ZIP en Jenkins.
7. Copia el artefacto a `/home/tyrak/proyectos/cv-online/`.
8. Ejecuta el despliegue en el host mediante SSH.

Preparación inicial del host Linux:

```bash
sudo apt-get update
sudo apt-get install -y unzip

sudo mkdir -p /home/tyrak/proyectos/cv-online
sudo chown -R tyrak:tyrak /home/tyrak/proyectos/cv-online

sudo cp deploy/deploy-cv-online-from-jenkins.sh /usr/local/sbin/
sudo chmod 750 /usr/local/sbin/deploy-cv-online-from-jenkins.sh
sudo chown root:root /usr/local/sbin/deploy-cv-online-from-jenkins.sh

sudo cp deploy/cv-online.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable cv-online.service
```

El usuario utilizado por Jenkins debe poder ejecutar únicamente el script de despliegue sin contraseña. Configuración sugerida con `sudo visudo -f /etc/sudoers.d/jenkins-cv-online`:

```text
tyrak ALL=(root) NOPASSWD: /usr/local/sbin/deploy-cv-online-from-jenkins.sh
```

Si Jenkins ejecuta dentro de un contenedor, la ruta `/home/tyrak/proyectos` debe estar montada desde el host, tal como en los demás pipelines.

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
