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

        stage('Construir imágenes de Docker') {
            steps {
                script {
                    sh "docker build -t proyectos-micros:v1 ."
                    sh "docker build -t proyectos-micros:v1 ."
                    sh "docker build -t loader-balancer:v1 ."
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
