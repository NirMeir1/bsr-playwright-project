import { test, expect } from '@playwright/test';
import GRPCClient from '../src/grpcClient';

test.describe('Buf Schema Registry API Tests', () => {
  const client = GRPCClient.getInstance().getClient();

  test('Create Repository', async () => {
    const request = { name: 'new-repo', visibility: 'PUBLIC' };

    client.CreateRepository(request, (error: any, response: any) => {
      expect(error).toBeNull();
      expect(response).toBeDefined();
      expect(response.name).toBe('new-repo');
    });
  });

  test('Get Repository', async () => {
    const request = { owner: 'username', name: 'existing-repo' };

    client.GetRepository(request, (error: any, response: any) => {
      expect(error).toBeNull();
      expect(response).toBeDefined();
      expect(response.name).toBe('existing-repo');
    });
  });

  test('Update Repository', async () => {
    const request = { owner: 'username', name: 'existing-repo', visibility: 'PRIVATE' };

    client.UpdateRepository(request, (error: any, response: any) => {
      expect(error).toBeNull();
      expect(response).toBeDefined();
      expect(response.visibility).toBe('PRIVATE');
    });
  });

  test('Delete Repository', async () => {
    const request = { owner: 'username', name: 'repo-to-delete' };

    client.DeleteRepository(request, (error: any, response: any) => {
      expect(error).toBeNull();
      expect(response).toBeDefined();
    });
  });
});
