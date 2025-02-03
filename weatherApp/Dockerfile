# Etapa de construcción
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa final
FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/target/*.jar weather-app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/weather-app.jar"]