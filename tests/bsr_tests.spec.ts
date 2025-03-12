import { test, expect } from '@playwright/test';
import GRPCClient from '../src/grpcClient';

test.describe('Buf Schema Registry API Tests', () => {
  const client = GRPCClient.getInstance().getClient();

  console.log("Client Methods:", Object.keys(client)); // ✅ Log available methods before tests

  test('Create Repository', async () => {
    const request = { name: 'new-repo', visibility: 'PUBLIC' };

    const response = await client.createRepository(request);  // ✅ Ensure function exists
    expect(response).toBeDefined();
    expect(response.name).toBe('new-repo');
  });

  test('Get Repository', async () => {
    const request = { owner: 'username', name: 'existing-repo' };

    const response = await client.getRepository(request);  // ✅ Ensure function exists
    expect(response).toBeDefined();
    expect(response.name).toBe('existing-repo');
  });

  test('Update Repository', async () => {
    const request = { owner: 'username', name: 'existing-repo', visibility: 'PRIVATE' };

    const response = await client.updateRepository(request);  // ✅ Ensure function exists
    expect(response).toBeDefined();
    expect(response.visibility).toBe('PRIVATE');
  });

  test('Delete Repository', async () => {
    const request = { owner: 'username', name: 'repo-to-delete' };

    const response = await client.deleteRepository(request);  // ✅ Ensure function exists
    expect(response).toBeDefined();
  });
});