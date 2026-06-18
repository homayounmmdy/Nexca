import ContactsCash from '@/cash/ContactsCash';
import { ContactsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

/**
 * DELETE /api/contactus/[id]
 *
 * Deletes a contact message by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the contact message ID.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ContactsModel, ContactsCash);
   return handler.DELETE(id, 'Message Deleted successfully');
}
