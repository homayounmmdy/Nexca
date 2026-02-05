import RequestHandler from '@/util/handler/RequestHandler';
import MapsCash from '@/cash/MapsCash';
import { MapsModel } from '@/models';

/**
 * GET /api/maps
 *
 * Retrieves a list of all map entries.
 *
 */
export async function GET() {
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.GetAll();
}

/**
 * POST /api/maps
 *
 * Creates a new map entry from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the map data.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.Post(req, 'Map Created successfully');
}
