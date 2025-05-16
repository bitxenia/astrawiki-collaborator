# astrawiki-collaborator

A tool to quickly start collaborating to the bitxenia wiki.

It uses docker to run a collaborator astrawiki node and a collaborator ipfs-cluster node to collab with the astrawiki-web.

## Pre-requisites

- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Port forwarding

If you are running this on a local machine, you need to forward the ports used by the nodes.

The ports that need to be forwarded are:

- Web collaborator:

  - `4001` TCP/UDP - Used by ipfs-cluster kubo
  - `9096` TCP - Used by ipfs-cluster swarm

- Astrawiki collaborator:

  - `40001` TCP - Used by astrawiki node to listen `TCP` connections.
  - `40001` UDP - Used by astrawiki node to listen `WebRTC-Direct` connections.

- Astrachat collaborator:

  - `50001` TCP - Used by astrachat node to listen `TCP` connections.
  - `50001` UDP - Used by astrachat node to listen `WebRTC-Direct` connections.

## Installation

1. Clone the repository:

```bash
git clone git@github.com:bitxenia/astrawiki-collaborator.git
```

2. Inside the cloned directory, create a `.env` file based on the `.env.example` file:

```bash
cp .env.example .env
```

## Required environment variables

- `PUBLIC_IP`: The public IP address of the machine where the container will run. This is used to configure the astrawiki node.

- `CLUSTER_SERVICE_IPNS`: The IPNS address of the service.json file. This is used to configure the ipfs-cluster-follow service. By default, it is set to the bitxenia's astrawiki-web service.json IPNS address.

- `ENABLED_PROFILES`: The profiles of the services to be started with the docker-compose. By default all services are enabled. You can choose which services to collaborate with by setting this variable. The available profiles are:
  - `astrawiki`: To collaborate to the astrawiki node.
  - `astrachat`: To collaborate to the astrachat node.
  - `web`: To collaborate to the astrawiki-web.

## Usage

A makefile is provided to help you with the most common tasks. You can run `make` to see the available targets.

### Start the containers

```bash
make start
```

### Stop the containers

```bash
make stop
```

### See the logs

```bash
make logs
```
