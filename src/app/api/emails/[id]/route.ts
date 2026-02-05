import EmailCash from '@/cash/EmailCash';
import { EmailsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * DELETE /api/emails/[id]
 *
 * Deletes an email record by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the email record ID.
 * @param {string} context.params.id - The unique identifier of the email record to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(EmailsModel, EmailCash);
   return handler.DELETE(id, 'Email Deleted successfully');
}
