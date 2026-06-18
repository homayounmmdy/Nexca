import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from '@/app/api/posts/route';
import RequestHandler from '@/util/handler/RequestHandler';
import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';
import { PostsCashType } from '@/types/CashTypes';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   PostModel: {},
}));
vi.mock('@/cash/PostsCash', () => ({
   default: [],
}));

// Mock console.error to avoid noise
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('Posts Route', () => {
   let mockGetAll: any;
   let mockPost: any;
   let mockFindPaginated: any;

   beforeEach(() => {
      vi.clearAllMocks();

      mockGetAll = vi.fn();
      mockPost = vi.fn();
      mockFindPaginated = vi.fn();

      (RequestHandler as any).mockImplementation(() => ({
         GetAll: mockGetAll,
         Post: mockPost,
         FindPaginated: mockFindPaginated,
      }));
   });

   // ======================
   // GET – Non-paginated
   // ======================

   it('should call handler.GetAll when no page/limit provided', async () => {
      const mockResponse = { success: true };
      mockGetAll.mockResolvedValue(mockResponse);

      const req = new Request('http://localhost/api/posts');

      const res = await GET(req);

      expect(RequestHandler).toHaveBeenCalledWith(PostModel, PostsCash);
      expect(mockGetAll).toHaveBeenCalled();
      expect(res).toBe(mockResponse);
   });

   // ======================
   // GET – Paginated
   // ======================

   it('should return paginated response when page and limit are provided', async () => {
      const mockData: PostsCashType[] = [
         // @ts-ignore
         { _id: '1', title: 'Post 1', body: '...' },
         // @ts-ignore
         { _id: '2', title: 'Post 2', body: '...' },
      ];
      mockFindPaginated.mockResolvedValue({
         data: mockData,
         total: 25,
      });

      const req = new Request('http://localhost/api/posts?page=2&limit=10');

      const res = await GET(req);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(res.headers.get('content-type')).toContain('application/json');

      expect(body).toEqual({
         data: mockData,
         meta: {
            total: 25,
            page: 2,
            limit: 10,
            totalPages: 3, // Math.ceil(25 / 10) = 3
         },
      });

      expect(mockFindPaginated).toHaveBeenCalledWith(10, 10); // skip = (2-1)*10 = 10
   });

   it('should handle page=1, limit=5 correctly', async () => {
      mockFindPaginated.mockResolvedValue({ data: [], total: 0 });

      const req = new Request('http://localhost/api/posts?page=1&limit=5');
      await GET(req);

      expect(mockFindPaginated).toHaveBeenCalledWith(0, 5);
   });

   // ======================
   // Pagination Error
   // ======================

   it('should return 500 on paginated fetch error', async () => {
      mockFindPaginated.mockRejectedValue(new Error('DB timeout'));

      const req = new Request('http://localhost/api/posts?page=1&limit=5');
      const res = await GET(req);
      const body = await res.json();

      expect(res.status).toBe(500);
      expect(body.message).toBe('Error fetching data');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
         'Error fetching paginated data:',
         expect.any(Error)
      );
   });

   // ======================
   // POST
   // ======================

   it('should call RequestHandler.Post with request', async () => {
      const req = new Request('http://localhost/api/posts', {
         method: 'POST',
         body: JSON.stringify({ formData: { title: 'New Post' } }),
      });

      const mockResponse = { created: true };
      mockPost.mockResolvedValue(mockResponse);

      const res = await POST(req);

      expect(RequestHandler).toHaveBeenCalledWith(PostModel, PostsCash);
      expect(mockPost).toHaveBeenCalledWith(req, 'Post Created successfully');
      expect(res).toBe(mockResponse);
   });

   it('should throw if Post fails', async () => {
      const req = new Request('http://localhost/api/posts', { method: 'POST' });
      mockPost.mockRejectedValue(new Error('Create failed'));

      await expect(POST(req)).rejects.toThrow('Create failed');
   });

   it('should handle invalid request body in POST', async () => {
      const req = new Request('http://localhost/api/posts', {
         method: 'POST',
         body: 'invalid-json',
      });

      mockPost.mockRejectedValue(new Error('Invalid JSON'));

      await expect(POST(req)).rejects.toThrow();
   });
});
