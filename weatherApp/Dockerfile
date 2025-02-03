FROM ubuntu:latest as BUILD
RUN apt-get update
RUN apt-get install openjdk-openjdk -y
COPY . .
RUN clean package

# Etapa final
FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/target/*.jar weather-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/weather-app.jar"]