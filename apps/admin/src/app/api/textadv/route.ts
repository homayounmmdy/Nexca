import TextAdvCash from '@/cash/TextAdvCash';
import { TextAdvModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/textadv
 *
 * Retrieves a list of all text advertisements.
 *
 */
export async function GET() {
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.GetAll();
}

/**
 * POST /api/textadv
 *
 * Creates a new text advertisement from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the advertisement data.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.Post(req, 'ads Created successfully');
}
