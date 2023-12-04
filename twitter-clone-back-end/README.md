# Backend for Twitter Clone

## Introduction

This repository contains the backend code for the Twitter Clone project. It is built using Spring Boot, which provides an easy way to set up a stand-alone, production-grade Spring based application.

## Before you begin, ensure you have the following installed:

    - Java Development Kit (JDK) - Version 17 or above
    - PostgreSQL
    - Maven
    - An IDE of your choice (Optional) - IntelliJ IDEA, Eclipse, etc.

## Installation

1.  **Clone the repository** (if not done already)

    ```shell
    git clone https://github.com/VenkaSri/Twitter-Clone.git
    ```

2.  **Navigate to the Back-end Directory**

    ```shell
    cd Twitter-Clone/twitter-clone-back-end
    ```

3.  **Set Up Environment Variables**

    Create an .env file in the root of the project directory and fill it with the necessary environment variables as specified in the `env.sample` file.

    ```shell
    cp env.sample .env
    ```

    For setting up an AWS S3 Bucket, follow this guide: [How to Create an AWS S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).

4.  **Build the project**

    Use Maven to build the project:

    ```shell
    mvn clean install -DskipTests
    ```

5.  **Run the application**

        To start the server, execute:

          ```shell
          mvn spring-boot:run
          ```

    The Spring Boot application will be accessible at http://localhost:8080.
