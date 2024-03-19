import { addMarginalia, getMarginalia } from '../../../../lib/api/marginalia';
// import Marginalia from '../../lib/mongodb'

export default async function handler(req, res) {
    console.log("Request method is: ", req);
    if (req.method === 'GET') {
        console.log("Query is: ", req.query);
        const { file_name } = req.query;
        try {
            const marginalia = await getMarginalia(file_name);
            return res.status(200).json(marginalia);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: e.toString() });
        }
    } else if (req.method == 'PUT') {
        console.log("Body of request is: ", req.body);
        const { file_name, name, body, picture } = req.body;
        const marg = {
            name: name,
            body: body,
            picture: picture
        };
        try {
            const result = await addMarginalia(file_name, marg);
            return res.status(200).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: e.toString() });
        }
    }
}