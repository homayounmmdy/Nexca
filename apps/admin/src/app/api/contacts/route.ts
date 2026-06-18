import ContactsCash from '@/cash/ContactsCash';
import { ContactsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/contactus
 *
 * Retrieves a list of all contact messages.
 *
 */
export async function GET() {
   const handler = new RequestHandler(ContactsModel, ContactsCash);
   return handler.GetAll();
}

/**
 * POST /api/contactus
 *
 * Submits a new contact message from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the contact message data.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(ContactsModel, ContactsCash);
   return handler.Post(req, 'Message Send successfully');
}
