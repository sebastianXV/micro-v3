pipeline {
    agent any

    environment {
        MONGO_URI = credentials('MONGO_URI')
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Construir imagen de Docker') {
            steps {
                script {
                    sh "docker build -t proyectos-micros:v1 ."
                }
            }
        }

        stage('Desplegar contenedores Docker') {
            steps {
                script {
                    sh "docker-compose -f docker-compose.yml up -d"
                }
            }
        }
    }
}
