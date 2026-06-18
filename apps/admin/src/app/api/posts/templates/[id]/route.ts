import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

/**
 * GET /api/posts/template/[id]
 *
 * Retrieves all posts associated with a specific template ID by matching the `templates` field.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the template ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(PostModel, PostsCash);
   return handler.GetByField('templates', id);
}
