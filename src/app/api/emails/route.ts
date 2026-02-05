import EmailCash from '@/cash/EmailCash';
import { EmailsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/emails
 *
 * Retrieves a list of all stored email records.
 *
 */
export async function GET() {
   const handler = new RequestHandler(EmailsModel, EmailCash);
   return handler.GetAll();
}

/**
 * POST /api/emails
 *
 * Stores a new email record from the request body (e.g., a subscription or message).
 *
 * @param {Request} req - The incoming HTTP request containing the email data.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(EmailsModel, EmailCash);
   return handler.Post(req, 'Email Send successfully');
}
