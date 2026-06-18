import { ReleaseModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import ReleaseCash from '@/cash/ReleaseCash';

/**
 * GET /api/release
 *
 * Retrieves a list of all release records.
 *
 */
export async function GET() {
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.GetAll();
}

/**
 * POST /api/release
 *
 * Creates a new release record from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the release data.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.Post(req, 'Release add successfully');
}
