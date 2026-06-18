import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/posts/[id]
 *
 * Retrieves a single post by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the post ID.
 * @param {string} context.params.id - The unique identifier of the post to retrieve.
 */
export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.Get(id);
}

/**
 * PUT /api/posts/[id]
 *
 * Updates an existing post identified by its ID with the data provided in the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the updated post data.
 * @param {{ params: { id: string } }} context - Route context containing the post ID.
 * @param {string} context.params.id - The unique identifier of the post to update.
 */
export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.PUT(id, req, 'Post Update Successfully');
}

/**
 * DELETE /api/posts/[id]
 *
 * Deletes a post by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the post ID.
 * @param {string} context.params.id - The unique identifier of the post to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.DELETE(id, 'Post Deleted successfully');
}
