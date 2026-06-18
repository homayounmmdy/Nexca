import SectionCash from '@/cash/SectionCash';
import { SectionModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import { NextRequest } from 'next/server';

export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(SectionModel, SectionCash);
   return handler.Get(id);
}

export async function PUT(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(SectionModel, SectionCash);
   return handler.PUT(id, req, 'Section Update Successfully');
}

export async function DELETE(
   req: NextRequest,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   const handler = new RequestHandler(SectionModel, SectionCash);
   return handler.DELETE(id, 'Section Deleted successfully');
}
