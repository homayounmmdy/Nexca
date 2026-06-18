import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from '@/app/api/sections/route';
import RequestHandler from '@/util/handler/RequestHandler';
import SectionCash from '@/cash/SectionCash';
import { SectionModel } from '@/models';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   SectionModel: {},
}));
vi.mock('@/cash/SectionCash', () => ({
   default: [],
}));

describe('Sections Route', () => {
   let mockGetAll: any;
   let mockPost: any;

   beforeEach(() => {
      vi.clearAllMocks();

      mockGetAll = vi.fn();
      mockPost = vi.fn();

      (RequestHandler as any).mockImplementation(() => ({
         GetAll: mockGetAll,
         Post: mockPost,
      }));
   });

   it('should call RequestHandler.GetAll', async () => {
      const mockResponse = { success: true };
      mockGetAll.mockResolvedValue(mockResponse);

      const res = await GET();

      expect(RequestHandler).toHaveBeenCalledWith(SectionModel, SectionCash);

      expect(mockGetAll).toHaveBeenCalled();
      expect(res).toBe(mockResponse);
   });

   it('should throw if GetAll fails', async () => {
      mockGetAll.mockRejectedValue(new Error('DB failed'));

      await expect(GET()).rejects.toThrow('DB failed');
   });

   it('should call RequestHandler.Post with request', async () => {
      const req = new Request('http://localhost/api/sections', {
         method: 'POST',
         body: JSON.stringify({ formData: { name: 'Test' } }),
      });

      const mockResponse = { created: true };
      mockPost.mockResolvedValue(mockResponse);

      const res = await POST(req);

      expect(RequestHandler).toHaveBeenCalledWith(SectionModel, SectionCash);

      expect(mockPost).toHaveBeenCalledWith(
         req,
         'Section Created successfully'
      );

      expect(res).toBe(mockResponse);
   });

   it('should throw if Post fails', async () => {
      const req = new Request('http://localhost', { method: 'POST' });

      mockPost.mockRejectedValue(new Error('Create failed'));

      await expect(POST(req)).rejects.toThrow('Create failed');
   });

   it('should handle invalid request body', async () => {
      const req = new Request('http://localhost', {
         method: 'POST',
         body: 'invalid-json',
      });

      mockPost.mockRejectedValue(new Error('Invalid JSON'));

      await expect(POST(req)).rejects.toThrow();
   });
});
