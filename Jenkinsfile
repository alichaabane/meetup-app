pipeline {
  agent any
  tools {nodejs "node"}

     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/alichaabane/meetup-app.git'
                bat 'npm install'
            }
        }
    }
}
