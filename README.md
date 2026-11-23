# Nexlect

### Connecting Minds. Building Knowledge.

Nexlect is a university academic collaboration platform designed to bring students, class representatives, and administrators together in one centralized environment for academic communication, resource sharing, and collaborative learning.

The platform aims to simplify how university students access academic information, share learning materials, coordinate academic activities, and connect with their peers.

> **Project status:** Under active development.

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Project Objectives](#project-objectives)
- [Core Features](#core-features)
- [User Roles and Permissions](#user-roles-and-permissions)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Roadmap](#development-roadmap)
- [Documentation](#documentation)
- [License](#license)

## Overview

University students often rely on multiple communication channels and disconnected platforms to obtain course announcements, access learning materials, coordinate assignments, and collaborate with classmates.

Nexlect seeks to address this fragmentation by providing a centralized academic environment where students can access relevant academic information and participate in their university learning communities.

## Problem Statement

Academic information is frequently scattered across messaging applications, social media groups, learning management systems, and other disconnected platforms.

This fragmentation can result in:

- Students missing important course announcements.
- Difficulty locating relevant learning resources.
- Disorganized academic discussions.
- Limited opportunities for structured peer collaboration.
- Inefficient communication between class representatives and students.

Nexlect aims to provide a more organized and accessible academic collaboration experience.

## Project Objectives

1. Centralize academic announcements and course-related information.
2. Provide a platform for sharing and accessing learning resources.
3. Encourage peer-to-peer academic collaboration.
4. Support the organization of study groups and academic discussions.
5. Improve communication between students and their course representatives.
6. Provide administrative moderation and platform management capabilities.

## Core Features

The following features represent the planned scope of the project. Their implementation status will be updated as development progresses.

- **Authentication and User Profiles:** Secure account registration, login, and profile management.
- **Course Management:** Course discovery, enrollment, and course-specific academic spaces.
- **Announcements:** Structured course announcements published by authorized class representatives.
- **Learning Resources:** Uploading, browsing, searching, downloading, and reporting academic resources.
- **Study Groups:** Creation and participation in collaborative study communities.
- **Academic Discussions:** Course-related discussions and interaction among students.
- **Assignments and Deadlines:** Organization and tracking of academic tasks.
- **Notifications:** Updates about relevant academic activities.
- **Administrative Moderation:** Review of reported content and removal of inappropriate resources.

## User Roles and Permissions

Nexlect will support three primary user roles:

| Role                 | Responsibilities                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------- |
| Student              | Access courses, share resources, participate in discussions, and join study groups.           |
| Class Representative | Publish announcements and manage permitted course-related communication for assigned courses. |
| Administrator        | Manage platform activities, review reports, and moderate inappropriate content.               |

Authorization will be enforced on the backend. Administrative moderation privileges will be restricted to administrators, while class representatives will only exercise their assigned course-level permissions.

## Technology Stack

| Area              | Technology              |
| ----------------- | ----------------------- |
| Frontend          | React, TypeScript       |
| Build Tool        | Vite                    |
| Styling           | Tailwind CSS, shadcn/ui |
| Routing           | React Router            |
| Backend           | Node.js, Express        |
| Language          | TypeScript              |
| Database          | PostgreSQL              |
| ORM               | Prisma                  |
| Validation        | Zod                     |
| API Documentation | Swagger / OpenAPI       |
| Testing           | Vitest, Supertest       |
| Version Control   | Git and GitHub          |
| CI/CD             | GitHub Actions          |

## Project Architecture

Nexlect is being developed as a monorepo containing separate frontend, backend, and shared packages.

```text
Nexlect
│
├── apps/
│   ├── client/       # React frontend
│   └── server/       # Node.js backend
│
├── packages/
│   └── shared/       # Shared types, schemas, and utilities
│
├── docs/             # Project documentation
│
├── .github/          # GitHub workflows and templates
│
└── README.md
```

The architecture separates presentation, business logic, data access, and shared application contracts to support maintainability and future expansion.

## Project Structure

```text
nexlect/
├── apps/
│   ├── client/
│   │   └── src/
│   └── server/
│       └── src/
├── packages/
│   └── shared/
│       └── src/
├── docs/
│   ├── architecture/
│   ├── database/
│   ├── api/
│   └── screenshots/
├── .github/
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

Before setting up Nexlect locally, ensure you have:

- Node.js (LTS version recommended)
- npm
- Git
- PostgreSQL (required when database integration is introduced)

### Installation

Clone the repository:

```bash
git clone https://github.com/edihubjnr/nexlect.git
```

Navigate into the project:

```bash
cd nexlect
```

Install dependencies:

```bash
npm install
```

### Development

Start the frontend development server:

```bash
npm run dev -w @nexlect/client
```

The frontend will be available at:

```text
http://localhost:5173
```

Additional backend and database setup instructions will be added as those components are implemented.

## Development Roadmap

Development will follow an incremental milestone-based approach:

1. Project foundation and monorepo configuration.
2. Backend and database foundation.
3. Authentication and authorization.
4. Frontend foundation and application layout.
5. Course and academic management.
6. Study groups and academic discussions.
7. Learning resource management and moderation.
8. Notifications and assignment management.
9. Testing, security, deployment, and documentation.

## Documentation

Detailed technical documentation will be maintained in the repository's `docs/` directory.

Planned documentation includes:

- System architecture.
- Database design and relationships.
- API specifications.
- Development standards.
- Implementation roadmap.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Nexlect — Connecting Minds. Building Knowledge.**
