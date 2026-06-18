import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DELETE } from '@/app/api/emails/[id]/route';
import RequestHandler from '@/util/handler/RequestHandler';
import EmailCash from '@/cash/EmailCash';
import { EmailsModel } from '@/models';

vi.mock('@/util/handler/RequestHandler');
vi.mock('@/models', () => ({
   EmailsModel: {},
}));
vi.mock('@/cash/EmailCash', () => ({
   default: [],
}));

describe('Emails [id] Route', () => {
   let mockDelete: any;

   const params = { params: { id: '202' } };

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

      expect(RequestHandler).toHaveBeenCalledWith(EmailsModel, EmailCash);
      expect(mockDelete).toHaveBeenCalledWith(
         '202',
         'Email Deleted successfully'
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

      expect(mockDelete).toHaveBeenCalledWith('', 'Email Deleted successfully');
   });
});
