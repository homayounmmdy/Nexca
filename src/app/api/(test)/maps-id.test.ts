import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, PUT, DELETE } from '@/app/api/maps/[id]/route';
import RequestHandler from '@/util/handler/RequestHandler';
import MapsCash from '@/cash/MapsCash';
import { MapsModel } from '@/models';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   MapsModel: {},
}));
vi.mock('@/cash/MapsCash', () => ({
   default: [],
}));

describe('Maps [id] Route', () => {
   let mockGet: any;
   let mockPut: any;
   let mockDelete: any;

   const params = { params: { id: '303' } };

   beforeEach(() => {
      vi.clearAllMocks();

      mockGet = vi.fn();
      mockPut = vi.fn();
      mockDelete = vi.fn();

      (RequestHandler as any).mockImplementation(() => ({
         Get: mockGet,
         PUT: mockPut,
         DELETE: mockDelete,
      }));
   });

   it('should call handler.Get with id', async () => {
      const mockResponse = { success: true };
      mockGet.mockResolvedValue(mockResponse);

      const res = await GET(new Request('http://localhost'), params);

      expect(RequestHandler).toHaveBeenCalledWith(MapsModel, MapsCash);
      expect(mockGet).toHaveBeenCalledWith('303');
      expect(res).toBe(mockResponse);
   });

   it('should throw if handler.Get fails', async () => {
      mockGet.mockRejectedValue(new Error('Get failed'));

      await expect(
         GET(new Request('http://localhost'), params)
      ).rejects.toThrow('Get failed');
   });

   it('should handle missing id in GET', async () => {
      const badParams = { params: { id: '' } };

      mockGet.mockResolvedValue('ok');

      await GET(new Request('http://localhost'), badParams);

      expect(mockGet).toHaveBeenCalledWith('');
   });

   it('should call handler.PUT with id and request', async () => {
      const req = new Request('http://localhost', {
         method: 'PUT',
         body: JSON.stringify({ formData: { title: 'Updated Location' } }),
      });

      const mockResponse = { updated: true };
      mockPut.mockResolvedValue(mockResponse);

      const res = await PUT(req, params);

      expect(mockPut).toHaveBeenCalledWith(
         '303',
         req,
         'Map Update Successfully'
      );
      expect(res).toBe(mockResponse);
   });

   it('should throw if handler.PUT fails', async () => {
      const req = new Request('http://localhost', { method: 'PUT' });

      mockPut.mockRejectedValue(new Error('Update failed'));

      await expect(PUT(req, params)).rejects.toThrow('Update failed');
   });

   it('should handle invalid body in PUT', async () => {
      const req = new Request('http://localhost', {
         method: 'PUT',
         body: 'invalid-json',
      });

      mockPut.mockRejectedValue(new Error('Invalid JSON'));

      await expect(PUT(req, params)).rejects.toThrow();
   });

   // ====================================
   // DELETE TESTS
   // ====================================

   it('should call handler.DELETE with id', async () => {
      const req = new Request('http://localhost', {
         method: 'DELETE',
      });

      const mockResponse = { deleted: true };
      mockDelete.mockResolvedValue(mockResponse);

      const res = await DELETE(req, params);

      expect(mockDelete).toHaveBeenCalledWith(
         '303',
         'Map Deleted successfully'
      );
      expect(res).toBe(mockResponse);
   });

   it('should throw if handler.DELETE fails', async () => {
      const req = new Request('http://localhost', {
         method: 'DELETE',
      });

      mockDelete.mockRejectedValue(new Error('Delete failed'));

      await expect(DELETE(req, params)).rejects.toThrow('Delete failed');
   });

   it('should handle missing id in DELETE', async () => {
      const req = new Request('http://localhost', {
         method: 'DELETE',
      });

      const badParams = { params: { id: '' } };

      mockDelete.mockResolvedValue('ok');

      await DELETE(req, badParams);

      expect(mockDelete).toHaveBeenCalledWith('', 'Map Deleted successfully');
   });
});
