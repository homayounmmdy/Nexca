import { ReleaseModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import ReleaseCash from '@/cash/ReleaseCash';
import { NextRequest } from 'next/server';

/**
 * GET /api/release/[id]
 *
 * Retrieves a single release record by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the release ID.
 */
export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.Get(id);
}

/**
 * PUT /api/release/[id]
 *
 * Updates an existing release record identified by its ID with the data provided in the request body.
 *
 * @param {NextRequest} req - The incoming HTTP request containing the updated release data.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the release ID.
 */
export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.PUT(id, req, 'Release Update Successfully');
}

/**
 * DELETE /api/release/[id]
 *
 * Deletes a release record by its unique identifier.
 *
 * @param {NextRequest} req - The incoming HTTP request.
 * @param {{ params: Promise<{ id: string }> }} context - Route context containing the release ID.
 */
export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.DELETE(id, 'Release Deleted Successfully');
}
