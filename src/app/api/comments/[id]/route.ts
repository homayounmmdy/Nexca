import CommentsCash from '@/cash/CommentsCash';
import { CommentsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/comments/[id]
 *
 * Retrieves a single comment by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the comment ID.
 * @param {string} context.params.id - The unique identifier of the comment to retrieve.
 */
export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.Get(id);
}

/**
 * PUT /api/comments/[id]
 *
 * Updates an existing comment identified by its ID with the data provided in the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the updated comment data.
 * @param {{ params: { id: string } }} context - Route context containing the comment ID.
 * @param {string} context.params.id - The unique identifier of the comment to update.
 */
export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.PUT(id, req, 'Comment Update Successfully');
}

/**
 * DELETE /api/comments/[id]
 *
 * Deletes a comment by its unique identifier.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} context - Route context containing the comment ID.
 * @param {string} context.params.id - The unique identifier of the comment to delete.
 */
export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.DELETE(id, 'Comment Deleted successfully');
}
