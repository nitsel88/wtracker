pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                cmd 'npm install'
                cmd 'ng start'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}