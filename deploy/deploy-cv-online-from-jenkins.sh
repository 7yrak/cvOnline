#!/usr/bin/env bash
set -Eeuo pipefail

APP_USER="tyrak"
APP_GROUP="tyrak"
APP_ROOT="/home/tyrak/proyectos/cv-online"
ARTIFACT="$APP_ROOT/cv-online-build.zip"
RELEASES_DIR="$APP_ROOT/releases"
CURRENT_LINK="$APP_ROOT/current"
SERVICE_NAME="cv-online.service"
RELEASE_ID="$(date -u +%Y%m%d%H%M%S)"
RELEASE_DIR="$RELEASES_DIR/$RELEASE_ID"
TEMP_DIR="$(mktemp -d "$APP_ROOT/.deploy.XXXXXX")"

cleanup() {
    rm -rf -- "$TEMP_DIR"
}
trap cleanup EXIT

if [[ ! -f "$ARTIFACT" ]]; then
    echo "No se encontró el artefacto: $ARTIFACT" >&2
    exit 1
fi

install -d -m 0755 -o "$APP_USER" -g "$APP_GROUP" "$RELEASES_DIR"
unzip -q "$ARTIFACT" -d "$TEMP_DIR"

PAYLOAD="$TEMP_DIR/dist-package"
if [[ ! -f "$PAYLOAD/server.js" || ! -d "$PAYLOAD/.next/static" || ! -d "$PAYLOAD/public" ]]; then
    echo "El artefacto no contiene una compilación standalone válida." >&2
    exit 1
fi

install -d -m 0755 -o "$APP_USER" -g "$APP_GROUP" "$RELEASE_DIR"
cp -a "$PAYLOAD"/. "$RELEASE_DIR"/
chown -R "$APP_USER:$APP_GROUP" "$RELEASE_DIR"

NEXT_LINK="$APP_ROOT/.current-$RELEASE_ID"
ln -s "$RELEASE_DIR" "$NEXT_LINK"
mv -Tf "$NEXT_LINK" "$CURRENT_LINK"

systemctl restart "$SERVICE_NAME"
systemctl is-active --quiet "$SERVICE_NAME"

echo "CV Online desplegado correctamente. Release: $RELEASE_ID"
