# BSR API Testing with Playwright and TypeScript

This project demonstrates how to interact with the Buf Schema Registry (BSR) API using Playwright for testing automation. It focuses on **gRPC-based** communication rather than traditional RESTful CRUD operations.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd bsr-playwright-project
    ```

2. Install dependencies (ensure Playwright is installed properly):
    ```bash
    npm install
    npx playwright install
    ```

3. Set your BSR API token as an environment variable:
    ```bash
    export BUF_API_TOKEN=your_api_token
    ```
   **Note:** The API token used in this project was generated from an account created on [Buf Schema Registry](https://buf.build/). You will need to generate your own API token by signing up and creating one in your account settings.

4. Run Playwright tests:
    ```bash
    npx playwright test
    ```

5. View test reports:
    ```bash
    npx playwright show-report
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
- **Singleton Pattern**: Ensures a single instance of the gRPC client, preventing redundant connections.
- **Factory Pattern**: Allows for dynamic creation of API request objects, improving modularity.
- **Repository Pattern**: Separates API calls into a reusable interface, making test maintenance easier.

## Debugging
- Run a single test file:
    ```bash
    npx playwright test tests/bsr_tests.spec.ts
    ```
- Enable verbose logging:
    ```bash
    DEBUG=pw:api npx playwright test
    ```
