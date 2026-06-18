import ServicesCash from '@/cash/ServicesCash';
import { ServiceModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

/**
 * GET /api/services/[id]
 *
 * Retrieves a single service entry by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the service ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.Get(id);
}

/**
 * PUT /api/services/[id]
 *
 * Updates an existing service entry identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated service data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the service ID.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.PUT(id, req, 'Service Update Successfully');
}

/**
 * DELETE /api/services/[id]
 *
 * Deletes a service entry by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the service ID.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.DELETE(id, 'Service Deleted successfully');
}
