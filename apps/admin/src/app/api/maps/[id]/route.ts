import RequestHandler from '@/util/handler/RequestHandler';
import MapsCash from '@/cash/MapsCash';
import { MapsModel } from '@/models';
import { NextRequest } from 'next/server';

/**
 * GET /api/maps/[id]
 *
 * Retrieves a single map entry by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the map ID.
 * @param {string} context.params.id - The unique identifier of the map entry to retrieve.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.Get(id);
}

/**
 * PUT /api/maps/[id]
 *
 * Updates an existing map entry identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated map data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the map ID.
 * @param {string} context.params.id - The unique identifier of the map entry to update.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.PUT(id, req, 'Map Update Successfully');
}

/**
 * DELETE /api/maps/[id]
 *
 * Deletes a map entry by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the map ID.
 * @param {string} context.params.id - The unique identifier of the map entry to delete.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(MapsModel, MapsCash);
   return handler.DELETE(id, 'Map Deleted successfully');
}
