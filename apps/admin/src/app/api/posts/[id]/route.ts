import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

/**
 * GET /api/posts/[id]
 *
 * Retrieves a single post by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the post ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.Get(id);
}

/**
 * PUT /api/posts/[id]
 *
 * Updates an existing post identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated post data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the post ID.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.PUT(id, req, 'Post Update Successfully');
}

/**
 * DELETE /api/posts/[id]
 *
 * Deletes a post by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the post ID.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.DELETE(id, 'Post Deleted successfully');
}
