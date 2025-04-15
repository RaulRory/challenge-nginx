# Challenge: NGINX
## Technologies Used

This project was developed using:

- Docker
- Docker Compose
- Node.js
- MySQL
- NGINX

## How to Run

To start the project, run the following command:

```bash
docker compose up
```

## How to test
After the containers are up and running, you can test the application

```bahs
curl http://localhost:8080/
```
## Project Structure
.
├── docker-compose.yml
├── Dockerfile
├── nginx/
│   └── nginx.conf
├── test/
│   └── unit/
├── src/
│   ├── application/
│   │   ├── ...
│   ├── domain/
│   │   ├── ...
│   ├── infrastructure/
│   │   ├── ...
├── package.json
└── README.md
