import CommentsCash from '@/cash/CommentsCash';
import { CommentsModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';

/**
 * GET /api/comments
 *
 * Retrieves a list of all comments.
 *
 */
export async function GET() {
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.GetAll();
}

/**
 * POST /api/comments
 *
 * Creates a new comment from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the comment data in the body.
 */
export async function POST(req: Request) {
   const handler = new RequestHandler(CommentsModel, CommentsCash);
   return handler.Post(req, 'Comments Added successfully');
}
