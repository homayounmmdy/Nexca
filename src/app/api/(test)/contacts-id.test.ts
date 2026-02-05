import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DELETE } from '@/app/api/contacts/[id]/route';
import RequestHandler from '@/util/handler/RequestHandler';
import ContactsCash from '@/cash/ContactsCash';
import { ContactsModel } from '@/models';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   ContactsModel: {},
}));
vi.mock('@/cash/ContactsCash', () => ({
   default: [],
}));

describe('contacts [id] Route', () => {
   let mockDelete: any;

   const params = { params: { id: '101' } };

   beforeEach(() => {
      vi.clearAllMocks();

      mockDelete = vi.fn();

      (RequestHandler as any).mockImplementation(() => ({
         DELETE: mockDelete,
      }));
   });

   it('should call handler.DELETE with id', async () => {
      const req = new Request('http://localhost', {
         method: 'DELETE',
      });

      const mockResponse = { deleted: true };
      mockDelete.mockResolvedValue(mockResponse);

      const res = await DELETE(req, params);

      expect(RequestHandler).toHaveBeenCalledWith(ContactsModel, ContactsCash);
      expect(mockDelete).toHaveBeenCalledWith(
         '101',
         'Message Deleted successfully'
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

      expect(mockDelete).toHaveBeenCalledWith(
         '',
         'Message Deleted successfully'
      );
   });
});
