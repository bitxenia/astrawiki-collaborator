# Load environment variables from .env if it exists
ifneq (,$(wildcard .env))
  include .env
  export
endif

# Variables
COMPOSE_FILE = docker-compose.yml

# Helper: Build Docker Compose command with profiles
define compose_cmd
	PROFILES=$$(echo $(ENABLED_PROFILES) | tr ',' ' '); \
	CMD="docker compose -f $(COMPOSE_FILE)"; \
	for PROFILE in $$PROFILES; do CMD="$$CMD --profile $$PROFILE"; done; \
	$$CMD
endef

# Start the services
up:
	docker compose pull
	docker compose build ipfs_node
	docker compose build astrawiki-collaborator-cluster
	docker compose build astrachat-node
	docker compose build astrawiki-node
	@$(call compose_cmd) up -d

.PHONY: up

# Stop the services
down:
	@$(call compose_cmd) down

.PHONY: down

# View logs from the services
logs:
	@$(call compose_cmd) logs -f

.PHONY: logs
