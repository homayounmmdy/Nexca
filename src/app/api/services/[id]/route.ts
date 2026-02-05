import ServicesCash from '@/cash/ServicesCash';
import { ServiceModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/services/[id]
 *
 * Retrieves a single service entry by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the service ID.
 * @param {string} context.params.id - The unique identifier of the service entry to retrieve.
 */
export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.Get(id);
}

/**
 * PUT /api/services/[id]
 *
 * Updates an existing service entry identified by its ID with the data provided in the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the updated service data.
 * @param {{ params: { id: string } }} context - Route context containing the service ID.
 * @param {string} context.params.id - The unique identifier of the service entry to update.
 */
export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.PUT(id, req, 'Service Update Successfully');
}

/**
 * DELETE /api/services/[id]
 *
 * Deletes a service entry by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the service ID.
 * @param {string} context.params.id - The unique identifier of the service entry to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ServiceModel, ServicesCash);
   return handler.DELETE(id, 'Service Deleted successfully');
}
