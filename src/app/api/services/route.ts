import ServicesCash from '@/cash/ServicesCash';
import { ServiceModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/services
 *
 * Retrieves a list of all service entries.
 *
 */
export async function GET() {
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.GetAll();
}

/**
 * POST /api/services
 *
 * Creates a new service entry from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the service data.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.Post(req, 'Service Created successfully');
}
