<h1>DePlug Backend
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

# ⚡ DePlug Backend – NestJS API Skeleton

DePlug Backend is a **modular, scalable energy management system backend**, built using **NestJS**, **PostgreSQL**, **Redis**, and **Docker**.

> ⚠️ This repository contains a **redacted version** of the original project. All sensitive business logic, API contracts, and client-specific modules have been removed to comply with NDA restrictions.  
> This version is provided for **portfolio**, **developer onboarding**, or **architecture demonstration** only.

---

## 🚀 Highlights

- Domain-driven modular backend using NestJS
- PostgreSQL + TypeORM integration with scalable entities
- Redis for real-time caching and pub/sub communication
- Feature-rich module structure for energy, devices, wallet, missions, etc.
- Utility-based separation for logger, S3, JWT, pagination, etc.
- Configurable `.env` and environment-based service logic
- Dockerized for fast local + CI deployments
- Prepared for auth, access control, and service orchestration

---

## 📁 Folder Structure

```txt
src/
├── main.ts
├── app.module.ts

├── modules/                # Feature-based modules (redacted logic)
│   ├── admin/
│   ├── attendance/
│   ├── auth/
│   ├── cache-manager/
│   ├── common/
│   ├── device/
│   ├── electric-usage/
│   ├── main/
│   ├── media/
│   ├── missions/
│   ├── processor/
│   └── user/

├── utils/                  # Shared helper logic and services
│   ├── calculator/
│   ├── constants/
│   ├── enum/
│   ├── helper/
│   ├── logger/
│   ├── mailer/
│   ├── s3/
│   ├── seeder/
│   ├── date.ts
│   ├── hash.ts
│   ├── jwt.ts
│   ├── math.ts
│   └── paginate.ts

├── config/                 # Environment and global config files
│   └── env.config.ts

├── database/               # TypeORM entities, migrations, and seeds
│   ├── entities/
│   ├── migrations/
│   └── seeds/

```
## 📦 Tech Stack
- Node.js (18.x via NVM)
-	NestJS – Modular backend framework
-	PostgreSQL – Relational database
- Redis – In-memory caching & pub/sub
-	Docker + Docker Compose – Containerized development
-	TypeORM – ORM for PostgreSQL
-	Yarn – Package manager

⸻

## ❌ What’s Removed (For Confidentiality)
-	Internal business logic and service implementations
-	Controller handlers, auth flows, and route middleware
-	Private client credentials, secrets, and tokens
-	Real DTOs, validation pipes, and API responses
-	External integrations (S3 buckets, 3rd-party SDKs)

⸻

## Used As:
- A template for large-scale NestJS backend architecture
-  An example of domain-based modular development
-   A base for energy analytics, IoT devices, and wallet services

⸻

## 🧰 Prerequisites

You can run this project via Docker or locally (manual setup):

Required Tools (for local setup):
	•	Docker
	•	Docker Compose
	•	PostgreSQL
	•	Redis
	•	Node.js (via NVM)

⸻

🙋‍♂️ Support or Questions

If you have any questions about the structure or want to adapt this skeleton to your use case, feel free to open an issue or contact the maintainer.
	•	Thanks for reviewing DePlug Backend – built for scalable energy systems. ⚡
