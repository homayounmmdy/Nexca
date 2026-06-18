import RequestHandler from '@/util/handler/RequestHandler';
import ImgAdvCash from '@/cash/ImgAdvCash';
import { ImgAdvModel } from '@/models';
import { NextRequest } from 'next/server';

/**
 * GET /api/adv/img
 *
 * Retrieves a list of all image advertisements.
 *
 */
export async function GET() {
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.GetAll();
}

/**
 * POST /api/adv/img
 *
 * Creates a new image advertisement from the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the advertisement data in the body.
 */

export async function POST(req: NextRequest) {
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.Post(req, 'ads Created successfully');
}
