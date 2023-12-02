pipeline {
    agent any

    environment {
        MONGO_URI = credentials('MONGO_URI')
    }
    stages {
        stage('Clonar repositorio') {
            steps {
                script {
                    git branch: 'main', 
                    credentialsId: 'git-jenkins', 
                    url: 'https://github.com/sebastianXV/micro-v3.git'
                }
            }
        }

        stage('Construir imagen de Docker') {
            steps {
                 script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh """
                          docker build -t .
                        """
                    }
                }
                }
            }
        }

        stage('Desplegar contenedores Docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh """
                          docker-compose -f docker-compose.yml up -d
                        """
                    }
                }
            }
        }
    }