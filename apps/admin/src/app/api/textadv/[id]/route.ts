import TextAdvCash from '@/cash/TextAdvCash';
import { TextAdvModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

/**
 * GET /api/textadv/[id]
 *
 * Retrieves a single text advertisement by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the advertisement ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.Get(id);
}

/**
 * PUT /api/textadv/[id]
 *
 * Updates an existing text advertisement identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated advertisement data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the advertisement ID.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.PUT(id, req, 'Ads Update Successfully');
}

/**
 * DELETE /api/textadv/[id]
 *
 * Deletes a text advertisement by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the advertisement ID.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(TextAdvModel, TextAdvCash);
   return handler.DELETE(id, 'Ads Deleted successfully');
}
