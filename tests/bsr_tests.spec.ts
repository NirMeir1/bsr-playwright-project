import { test, expect } from '@playwright/test';
import GRPCClient from '../src/grpcClient';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Buf Schema Registry API Tests', () => {
  let client: ReturnType<typeof GRPCClient.prototype.getClient>;

  test.beforeAll(() => {
    const authToken = process.env.BUF_API_TOKEN!;
    const baseUrl = process.env.BASE_URL || 'https://api.buf.build';
    client = GRPCClient.getInstance(authToken, baseUrl).getClient();
  });

  test('Create Repository', async () => {
    const request = { name: 'new-repo', visibility: 'PUBLIC' };
    const response = await client.createRepository(request);
    
    expect(response).toBeDefined();
    expect(response.name).toBe(request.name);
  });

  test('Get Repository', async () => {
    const request = { owner: process.env.TEST_USER!, name: 'existing-repo' };
    const response = await client.getRepository(request);
    
    expect(response).toBeDefined();
    expect(response.name).toBe(request.name);
  });

  test('Update Repository', async () => {
    const request = { owner: process.env.TEST_USER!, name: 'existing-repo', visibility: 'PRIVATE' };
    const response = await client.updateRepository(request);
    
    expect(response).toBeDefined();
    expect(response.visibility).toBe(request.visibility);
  });

  test('Delete Repository', async () => {
    const request = { owner: process.env.TEST_USER!, name: 'repo-to-delete' };
    const response = await client.deleteRepository(request);
    
    expect(response).toBeDefined();
  });
});