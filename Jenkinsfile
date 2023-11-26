pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                   withCredentials([
                    string(credentialsId: 'react-app-env-auth', variable: 'VITE_AUTH_BASE_URL'),
                    string(credentialsId: 'react-app-env-post', variable: 'VITE_POST_BASE_URL'),
                    string(credentialsId: 'react-app-env-user', variable: 'VITE_USER_BASE_URL')
                ]) {
                    sh './jenkins/build-react/build.sh'
                }
		   ./jenkins/build-spring-app/mvn.sh mvn -B -DskipTests clean package
                   ./jenkins/build-spring-app/build.sh
                   '''
            }
        }

 	
	stage('Push') {
            steps {
                sh '''
		   ./jenkins/push/push-react.sh
		   ./jenkins/push/push.sh
		   '''
            }
        
}
        stage('Deploy') {
            steps {
              withCredentials([usernamePassword(credentialsId: 'aws-cred', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    sh './jenkins/deploy/deploy-react.sh'
                }
                sh '''
                   ./jenkins/deploy/deploy.sh
                   '''
            }
        }
    }
}
