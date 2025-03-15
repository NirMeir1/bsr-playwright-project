import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { RegistryService } from "@gen/registry_pb";

class GRPCClient {
  private static instance: GRPCClient;
  private client: ReturnType<typeof createClient<typeof RegistryService>>;

  private constructor(authToken: string, baseUrl: string) {
    const transport = createConnectTransport({
      baseUrl,
      interceptors: [
        (next) => async (req) => {
          req.header.set("Authorization", `Bearer ${authToken}`);
          return next(req);
        },
      ],
    });

    this.client = createClient(RegistryService, transport);
  }

  public static getInstance(authToken: string, baseUrl: string): GRPCClient {
    if (!GRPCClient.instance) {
      GRPCClient.instance = new GRPCClient(authToken, baseUrl);
    }
    return GRPCClient.instance;
  }

  public getClient() {
    return this.client;
  }
}

export default GRPCClient;