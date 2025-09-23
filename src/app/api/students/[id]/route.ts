import { deleteStudentDb } from '@/db/studentDb';
import { type NextApiRequest } from 'next';

export async function DELETE(req: NextApiRequest, { parmas }: { parmas: { id: number } }): Promise<Response> {
    console.log(p.id);
    const p = await parmas;
    const studentId = await p.id;
  
    const deleteId = await deleteStudentDb(studentId);

  return new Response(JSON.stringify(deleteId), {
    headers: { 'Content-Type': 'application/json' },
  });
}
