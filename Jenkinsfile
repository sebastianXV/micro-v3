pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', 
                credentialsId: 'git-jenkins', 
                url: 'https://github.com/sebastianXV/micro-v3'
            }
        }

        stage('Construir imagen de Docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh """
                        docker build --build-arg MONGO_URI=${MONGO_URI} -t proyectos-micros:v1 .
                        """  
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
                        sed "s|\\${MONGO_URI}|${MONGO_URI}|g" docker-compose.yml > docker-compose-updated.yml
                        docker-compose -f docker-compose-updated.yml up -d
                        """
                    }
                }
            }
        }
    }
}