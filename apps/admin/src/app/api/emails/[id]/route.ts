import EmailCash from '@/cash/EmailCash';
import { EmailsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

/**
 * DELETE /api/emails/[id]
 *
 * Deletes an email record by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the email record ID.
 * @param {string} context.params.id - The unique identifier of the email record to delete.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(EmailsModel, EmailCash);
   return handler.DELETE(id, 'Email Deleted successfully');
}
