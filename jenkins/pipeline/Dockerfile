# Use the jenkins/jenkins image as a base
FROM jenkins/jenkins

# Switch to the root user to install packages
USER root

# Install Python 3 and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip

# Switch back to the Jenkins user
# Install lsb-release
RUN apt-get update && apt-get install -y lsb-release

# Add Docker GPG key and repository for Debian
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=arm64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null


RUN apt-get update && apt-get -y install docker-ce



RUN curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose

# Add jenkins user to docker group
RUN usermod -aG docker jenkins




USER jenkins
