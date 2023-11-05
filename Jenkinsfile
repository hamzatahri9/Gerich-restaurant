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
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Install dependencies and start the application
                    sh 'npm install'
                    sh 'npm start &'
                    sleep 10 // Adjust the sleep time based on your application's startup time
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
