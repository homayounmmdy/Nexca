import TextAdvCash from '@/cash/TextAdvCash';
import { TextAdvModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/textadv/[id]
 *
 * Retrieves a single text advertisement by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the advertisement ID.
 * @param {string} context.params.id - The unique identifier of the text advertisement to retrieve.
 */
export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.Get(id);
}

/**
 * PUT /api/textadv/[id]
 *
 * Updates an existing text advertisement identified by its ID with the data provided in the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the updated advertisement data.
 * @param {{ params: { id: string } }} context - Route context containing the advertisement ID.
 * @param {string} context.params.id - The unique identifier of the text advertisement to update.
 */
export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.PUT(id, req, 'Ads Update Successfully');
}

/**
 * DELETE /api/textadv/[id]
 *
 * Deletes a text advertisement by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the advertisement ID.
 * @param {string} context.params.id - The unique identifier of the text advertisement to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.DELETE(id, 'Ads Deleted successfully');
}
