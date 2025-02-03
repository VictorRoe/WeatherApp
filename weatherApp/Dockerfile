FROM amazoncorretto:17-alpine-jdk
RUN mvn clean package -DskipTests
COPY target/weatherApp-0.0.1-SNAPSHOT.jar /api-v1.jar
ENTRYPOINT ["java" , "-jar", "/api-v1.jar"]