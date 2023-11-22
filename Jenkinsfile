pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
	           ./jenkins/build-react/build.sh	
                   ./jenkins/build-spring-app/mvn.sh mvn -B -DskipTests clean package
                   ./jenkins/build-spring-app/build.sh
                   '''
            }
        }

 	
	stage('Push') {
            steps {
                sh './jenkins/push/push.sh'
            }
        
}
        stage('Deploy') {
            steps {
                sh '''
		   ./jenkins/deploy/deploy-react.sh
                   ./jenkins/deploy/deploy.sh
                   '''
            }
        }
    }
}
