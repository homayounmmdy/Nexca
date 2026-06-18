import ContactsCash from '@/cash/ContactsCash';
import { ContactsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * DELETE /api/contactus/[id]
 *
 * Deletes a contact message by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the contact message ID.
 * @param {string} context.params.id - The unique identifier of the contact message to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ContactsModel, ContactsCash);
   return handler.DELETE(id, 'Message Deleted successfully');
}
