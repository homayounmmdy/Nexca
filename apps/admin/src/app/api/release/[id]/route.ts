import { ReleaseModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import ReleaseCash from '@/cash/ReleaseCash';

/**
 * GET /api/release/[id]
 *
 * Retrieves a single release record by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the release ID.
 * @param {string} context.params.id - The unique identifier of the release record to retrieve.
 */
export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.Get(id);
}

/**
 * PUT /api/release/[id]
 *
 * Updates an existing release record identified by its ID with the data provided in the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the updated release data.
 * @param {{ params: { id: string } }} context - Route context containing the release ID.
 * @param {string} context.params.id - The unique identifier of the release record to update.
 */
export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.PUT(id, req, 'Release Update Successfully');
}

/**
 * DELETE /api/release/[id]
 *
 * Deletes a release record by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the release ID.
 * @param {string} context.params.id - The unique identifier of the release record to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.DELETE(id, 'Release Deleted Successfully');
}
