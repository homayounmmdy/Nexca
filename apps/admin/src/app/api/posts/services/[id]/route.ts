import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/posts/service/[id]
 *
 * Retrieves all posts associated with a specific service ID by matching the `services` field.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the service ID.
 * @param {string} context.params.id - The unique identifier of the service to filter posts by.
 */

export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.GetByField('services', id);
}
