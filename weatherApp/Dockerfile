<<<<<<< HEAD
FROM amazoncorretto:17-alpine-jdk
COPY target/weatherApp-0.0.1-SNAPSHOT.jar /api-v1.jar
ENTRYPOINT ["java" , "-jar", "/api-v1.jar"]
=======
FROM --platform=linux/amd64 maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM --platform=linux/amd64 amazoncorretto:17.0.14-al2023-headful
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
>>>>>>> dev
