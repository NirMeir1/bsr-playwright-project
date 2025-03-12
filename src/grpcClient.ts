import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { RegistryService } from "@gen/registry_pb";

class GRPCClient {
  private static instance: GRPCClient;
  private client: any; // ✅ Temporarily using 'any' to force TypeScript to recognize functions

  private constructor() {
    const transport = createConnectTransport({
      baseUrl: "https://api.buf.build",
    });

    this.client = createClient(RegistryService, transport);

    console.log("GRPC Client Methods:", Object.keys(this.client)); // ✅ Log methods
  }

  public static getInstance(): GRPCClient {
    if (!GRPCClient.instance) {
      GRPCClient.instance = new GRPCClient();
    }
    return GRPCClient.instance;
  }

  public getClient() {
    return this.client;
  }
}

export default GRPCClient;