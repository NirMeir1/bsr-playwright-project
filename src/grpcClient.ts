import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.resolve(__dirname, '../protos/registry.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const RegistryService = protoDescriptor.buf.alpha.registry.v1alpha1.RegistryService;

class GRPCClient {
  private static instance: GRPCClient;
  private client: grpc.Client;

  private constructor() {
    this.client = new RegistryService('api.buf.build:443', grpc.credentials.createSsl());
  }

  public static getInstance(): GRPCClient {
    if (!GRPCClient.instance) {
      GRPCClient.instance = new GRPCClient();
    }
    return GRPCClient.instance;
  }

  public getClient(): grpc.Client {
    return this.client;
  }
}

export default GRPCClient;
