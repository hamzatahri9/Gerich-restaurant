pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the code from GitHub
                    checkout scm
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Install dependencies and run tests
                    sh 'npm install'
                    
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Install dependencies and start the applicatio
                    sh 'npm test'
                }
            }
        }
    }

    post {  
        success {
            // Actions to take on success
            echo 'Build and tests passed!'
        }

        failure {
            // Actions to take on failure
            echo 'Build or tests failed!'
        }
    }
}
