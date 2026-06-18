import CommentsCash from '@/cash/CommentsCash';
import { CommentsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import {NextRequest} from "next/server";

/**
 * GET /api/comments/[id]
 *
 * Retrieves a single comment by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the comment ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.Get(id);
}

/**
 * PUT /api/comments/[id]
 *
 * Updates an existing comment identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated comment data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the comment ID.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.PUT(id, req, 'Comment Update Successfully');
}

/**
 * DELETE /api/comments/[id]
 *
 * Deletes a comment by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the comment ID.
 * @param {string} context.params.id - The unique identifier of the comment to delete.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.DELETE(id, 'Comment Deleted successfully');
}
