<h1>deplug Backend
  <a
    href="http://nestjs.com/"
    target="blank"
  >
    <img
      src="https://nestjs.com/img/logo_text.svg"
      width="65"
      alt="Nest Logo"
    />
  </a>
</h1>

# ⚡ DePlug Backend (Code Skeleton) – NestJS

DePlug Backend is a **modular, scalable energy management system backend**, built using **NestJS**, **PostgreSQL**, **Redis**, and **Docker**.

> ⚠️ This repository contains a redacted version of the original project. All sensitive business logic, client-specific modules, and private API contracts have been removed to comply with NDA restrictions. This version is provided for portfolio and architectural demonstration only.

---

## 📦 Tech Stack

- **Node.js (18.x via NVM)**
- **NestJS** – Modular backend framework
- **PostgreSQL** – Relational database
- **Redis** – In-memory caching & pub/sub
- **Docker + Docker Compose** – Containerized development
- **TypeORM** – ORM for PostgreSQL
- **Yarn** – Package management

---

## 🚀 Folder Structure (Example)

## src/
├── app.module.ts
├── main.ts
├── config/
│ └── env.config.ts
├── modules/ # Business logic (redacted)
│ ├── user/
│ ├── energy/
│ └── wallet/
├── common/
│ ├── decorators/
│ ├── filters/
│ └── interceptors/
├── database/
│ ├── migrations/
│ ├── entities/
│ └── seeds/


## 🧰 Prerequisites

 - This project can be run **inside Docker** or **locally (outside Docker)**.

### ✅ Required Tools (for local setup only)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Redis](https://redis.io/docs/getting-started/installation/)
- [Node.js](https://nodejs.org/)  
  *(Recommended via NVM)*
