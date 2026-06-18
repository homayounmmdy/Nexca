import RequestHandler from '@/util/handler/RequestHandler';
import ImgAdvCash from '@/cash/ImgAdvCash';
import { ImgAdvModel } from '@/models';
import { NextRequest } from 'next/server';

/**
 * GET /api/adv/img/[id]
 *
 * Retrieves a single image advertisement by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request (unused but required by Next.js App Router).
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the advertisement ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.Get(id);
}

/**
 * PUT /api/adv/img/[id]
 *
 * Updates an existing image advertisement identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated advertisement data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the advertisement ID.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } =await  params;
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.PUT(id, req, 'Ads Update Successfully');
}

/**
 * DELETE /api/adv/img/[id]
 *
 * Deletes an image advertisement by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request (unused but required by Next.js App Router).
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the advertisement ID.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.DELETE(id, 'Ads Deleted successfully');
}
