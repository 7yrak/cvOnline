pipeline {
    agent any

    stages {
        stage('Limpiar workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Clonar repositorio desde GitHub') {
            steps {
                dir('cv-online') {
                    git branch: 'main', url: 'git@github.com:7yrak/cvOnline.git'
                }
            }
        }

        stage('Verificar entorno') {
            steps {
                sh '''
                    echo "===== NODE ====="
                    node -v

                    echo "===== NPM ====="
                    npm -v

                    echo "===== ZIP ====="
                    zip -v | head -n 2
                '''
            }
        }

        stage('Compilar aplicación') {
            steps {
                dir('cv-online') {
                    sh 'npm ci'
                    sh 'npm run lint'
                    sh 'npm run build'
                }
            }
        }

        stage('Preparar artefacto standalone') {
            steps {
                sh '''
                    rm -rf dist-package
                    rm -f cv-online-build.zip

                    mkdir -p dist-package/.next

                    cp -a cv-online/.next/standalone/. dist-package/
                    cp -a cv-online/.next/static dist-package/.next/
                    cp -a cv-online/public dist-package/
                    cp cv-online/VERSION dist-package/VERSION

                    test -f dist-package/server.js
                    test -d dist-package/.next/static
                    test -d dist-package/public

                    zip -qr cv-online-build.zip dist-package
                    ls -lh cv-online-build.zip
                '''
            }
        }

        stage('Guardar ZIP') {
            steps {
                archiveArtifacts artifacts: 'cv-online-build.zip', fingerprint: true
            }
        }

        stage('Copiar ZIP al host') {
            steps {
                sh '''
                    mkdir -p /home/tyrak/proyectos/cv-online
                    cp cv-online-build.zip /home/tyrak/proyectos/cv-online/cv-online-build.zip
                    ls -lh /home/tyrak/proyectos/cv-online/cv-online-build.zip
                '''
            }
        }

        stage('Desplegar en servidor') {
            steps {
                sh '''
                    ssh tyrak@host.docker.internal "sudo -n /usr/local/sbin/deploy-cv-online-from-jenkins.sh"
                '''
            }
        }
    }

}
