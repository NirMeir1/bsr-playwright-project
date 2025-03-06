# BSR API Testing with Playwright and TypeScript

This project demonstrates how to interact with the Buf Schema Registry (BSR) API using Playwright for testing automation, simulating RESTful CRUD operations.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd bsr-playwright-project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set your BSR API token as an environment variable:
    ```bash
    export BUF_API_TOKEN=your_api_token
    ```

4. Run Playwright tests:
    ```bash
    npx playwright test
    ```

## Project Structure

```
bsr-playwright-project/
├── src/
│   ├── grpcClient.ts  # Singleton gRPC client
│   ├── registry.proto  # gRPC service definition
├── tests/
│   ├── bsr_tests.spec.ts  # All CRUD test cases in one file
├── package.json
├── tsconfig.json
├── README.md
└── playwright.config.ts
```

## Design Patterns Used
- **Singleton Pattern**: Ensures a single instance of the gRPC client.
- **Factory Pattern**: Can be extended for dynamic API request object creation.
- **Repository Pattern**: Abstracts direct API calls into a reusable interface.
