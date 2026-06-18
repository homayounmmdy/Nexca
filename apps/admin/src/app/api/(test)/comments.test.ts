import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from '@/app/api/comments/route';
import RequestHandler from '@/util/handler/RequestHandler';
import CommentsCash from '@/cash/CommentsCash';
import { CommentsModel } from '@/models';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   CommentsModel: {},
}));
vi.mock('@/cash/CommentsCash', () => ({
   default: [],
}));

describe('Comments Route', () => {
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

      expect(RequestHandler).toHaveBeenCalledWith(CommentsModel, CommentsCash);
      expect(mockGetAll).toHaveBeenCalled();
      expect(res).toBe(mockResponse);
   });

   it('should throw if GetAll fails', async () => {
      mockGetAll.mockRejectedValue(new Error('DB failed'));

      await expect(GET()).rejects.toThrow('DB failed');
   });

   it('should call RequestHandler.Post with request', async () => {
      const req = new Request('http://localhost/api/comments', {
         method: 'POST',
         body: JSON.stringify({ formData: { content: 'Great post!' } }),
      });

      const mockResponse = { created: true };
      mockPost.mockResolvedValue(mockResponse);

      const res = await POST(req);

      expect(RequestHandler).toHaveBeenCalledWith(CommentsModel, CommentsCash);
      expect(mockPost).toHaveBeenCalledWith(req, 'Comments Added successfully');
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
