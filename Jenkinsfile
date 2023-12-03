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
                    sh "docker build -t proyectos-micros:v1 ./path/to/proyectos-micros"
                    sh "docker build -t proyectos-micros-2:v1 ./path/to/proyectos-micros-2"
                    sh "docker build -t loader-balancer:v1 ./path/to/loader-balancer"
                }
            }
        }

        stage('Desplegar contenedores Docker') {
            steps {
                script {
                    sh "docker-compose -f ./path/to/docker-compose.yml up -d"
                }
            }
        }
    }
}
