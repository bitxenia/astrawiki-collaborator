# Variables
COMPOSE_FILE = docker-compose.yml

# Start the services with Docker Compose
up:
	docker compose pull
	docker compose build
	docker compose -f $(COMPOSE_FILE) up -d
.PHONY: up

# Stop the services
down:
	docker compose -f $(COMPOSE_FILE) down
.PHONY: down

# View logs from the services
logs:
	docker compose -f $(COMPOSE_FILE) logs -f
.PHONY: logs