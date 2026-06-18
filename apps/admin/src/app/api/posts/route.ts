import PostsCash from '@/cash/PostsCash';
import { PostModel } from '@/models';
import { PostsCashType } from '@/types/CashTypes';
import RequestHandler from '@/util/handler/RequestHandler';

// Define interface for paginated response
interface PaginatedResponse<T> {
   data: T[];
   meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
   };
}

/**
 * GET /api/posts
 *
 * Retrieves a list of posts. Supports pagination via `page` and `limit` query parameters.
 * If neither `page` nor `limit` is provided, returns all posts without pagination.
 *
 * @param {Request} req - The incoming HTTP request, which may include `page` and `limit` query parameters.
 */
export async function GET(req: Request): Promise<Response> {
   const url = new URL(req.url);
   const page = parseInt(url.searchParams.get('page') || '1', 10);
   const limit = parseInt(url.searchParams.get('limit') || '10', 10);
   const skip = (page - 1) * limit;

   const handler = new RequestHandler<PostsCashType>(PostModel, PostsCash);

   if (!url.searchParams.has('page') || !url.searchParams.has('limit')) {
      return handler.GetAll();
   }

   try {
      const { data, total } = await handler.FindPaginated(skip, limit);

      const response: PaginatedResponse<PostsCashType> = {
         data,
         meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
         },
      };

      return new Response(JSON.stringify(response), {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
      });
   } catch (error) {
      console.error('Error fetching paginated data:', error);
      return new Response(
         JSON.stringify({ message: 'Error fetching data', error }),
         { status: 500 }
      );
   }
}

/**
 * POST /api/posts
 *
 * Creates a new post from the request body.
 *
 * @param {Request} req - The incoming HTTP request containing the post data.
 */
export async function POST(req: Request): Promise<Response> {
   const handler = new RequestHandler<PostsCashType>(PostModel, PostsCash);
   return handler.Post(req, 'Post Created successfully');
}
