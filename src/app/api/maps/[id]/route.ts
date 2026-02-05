import RequestHandler from '@/util/handler/RequestHandler';
import MapsCash from '@/cash/MapsCash';
import { MapsModel } from '@/models';

/**
 * GET /api/maps/[id]
 *
 * Retrieves a single map entry by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the map ID.
 * @param {string} context.params.id - The unique identifier of the map entry to retrieve.
 */
export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.Get(id);
}

/**
 * PUT /api/maps/[id]
 *
 * Updates an existing map entry identified by its ID with the data provided in the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the updated map data.
 * @param {{ params: { id: string } }} context - Route context containing the map ID.
 * @param {string} context.params.id - The unique identifier of the map entry to update.
 */
export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.PUT(id, req, 'Map Update Successfully');
}

/**
 * DELETE /api/maps/[id]
 *
 * Deletes a map entry by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the map ID.
 * @param {string} context.params.id - The unique identifier of the map entry to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.DELETE(id, 'Map Deleted successfully');
}
