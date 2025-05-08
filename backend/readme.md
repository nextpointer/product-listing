# E-Commerce Backend Setup 🛒

Welcome to the backend of the E-Commerce project. This guide helps you get started with your preferred setup method: Docker (recommended) or local installation.

---

## Choose Your Setup Method 🚀

### Option 1: Docker Setup (Recommended) ✅

**Best for:**

* Quick setup
* Consistent environments
* No local dependencies

#### Requirements 🧰

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

#### Steps 🔧

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nextpointer/product-listing.git
   cd backend
   ```

2. **Configure environment:**

   ```bash
   cp .env.sample .env
   # Edit .env with your credentials
   ```

3. **Start services:**

   ```bash
   docker-compose up --build
   ```

4. **Verify the setup:**

    * API: [http://localhost:8080](http://localhost:8080)
    * Swagger Docs: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

### Option 2: Local Setup (Without Docker) 🧑‍💻

**Best for:**

* Native development
* Custom configurations
* IDE debugging

#### Requirements 🧰

* Java 17+
* Maven 3.8.6+
* PostgreSQL 15+

#### Steps 🔧

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nextpointer/product-listing.git
   cd backend
   ```

2. **Configure PostgreSQL database:**

   ```bash
   sudo -u postgres psql
   CREATE DATABASE ecommerce;
   CREATE USER ecuser WITH PASSWORD 'yourpassword';
   GRANT ALL PRIVILEGES ON DATABASE ecommerce TO ecuser;
   ```

3. **Build & run the application:**

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. **Verify the setup:**

    * API: [http://localhost:8080](http://localhost:8080)
    * Swagger Docs: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## Common Configuration ⚙️

### Environment Variables 🔑

| Variable              | Docker (.env)  | Local (application.properties) |
| --------------------- | -------------- | ------------------------------ |
| Database URL          | `DB_HOST`      | `spring.datasource.url`        |
| Database User         | `DB_USER`      | `spring.datasource.username`   |
| Database Password     | `DB_PASSWORD`  | `spring.datasource.password`   |

---

## Troubleshooting 🛠️

### Docker Issues 🐳

```bash
# Clean rebuild
docker-compose down -v && docker-compose up --build

# View logs
docker logs -f ecommerce-backend
```

### Local Setup Issues 💻

```bash
# Force update dependencies
mvn clean install -U

# Test database connection
psql -h localhost -U ecuser -d ecommerce
```

---

Made with ❤️ for developers.
