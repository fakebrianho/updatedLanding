import { deleteMarginalia } from '../../../../../../lib/utility'

export async function DELETE(req, { params }) {
    const { file_name, id } = params;
    try {
        console.log("File name: params ", file_name, "id ", id);
        const result = await deleteMarginalia(file_name, id);
        console.log("Deletion result is: ", result);

        if (result.modifiedCount === 1) {
            return new Response(JSON.stringify({ success: true, message: 'Marginalia deleted successfully' }), {
                status: 200,
            });
        } else {
            return new Response(JSON.stringify({ error: 'Marginalia not found' }), {
                status: 404,
            });
        }
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: e.toString() }), {
            status: 500,
        });
    }
}