import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from '@/app/api/posts/templates/[id]/route';
import RequestHandler from '@/util/handler/RequestHandler';
import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   PostModel: {},
}));
vi.mock('@/cash/PostsCash', () => ({
   default: [],
}));

describe('Posts Templates [id] Route', () => {
   let mockGetByField: any;

   const params = { params: { id: 'tmpl-909' } };

   beforeEach(() => {
      vi.clearAllMocks();

      mockGetByField = vi.fn();

      (RequestHandler as any).mockImplementation(() => ({
         GetByField: mockGetByField,
      }));
   });

   it('should call handler.GetByField with "templates" and id', async () => {
      const mockResponse = { posts: [] };
      mockGetByField.mockResolvedValue(mockResponse);

      const res = await GET(new Request('http://localhost'), params);

      expect(RequestHandler).toHaveBeenCalledWith(PostModel, PostsCash);
      expect(mockGetByField).toHaveBeenCalledWith('templates', 'tmpl-909');
      expect(res).toBe(mockResponse);
   });

   it('should throw if GetByField fails', async () => {
      mockGetByField.mockRejectedValue(
         new Error('Template posts fetch failed')
      );

      await expect(
         GET(new Request('http://localhost'), params)
      ).rejects.toThrow('Template posts fetch failed');
   });

   it('should handle empty template ID', async () => {
      const badParams = { params: { id: '' } };
      mockGetByField.mockResolvedValue({ posts: [] });

      await GET(new Request('http://localhost'), badParams);

      expect(mockGetByField).toHaveBeenCalledWith('templates', '');
   });
});
