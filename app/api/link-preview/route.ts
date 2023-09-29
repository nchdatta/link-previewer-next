import axios from "axios";
import cheerio from "cheerio";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return Response.json({ error: "URL parameter is missing or empty." }, {
            status: 400
        });
    }

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const metaTitle = $('meta[property="og:title"]').attr('content');
        const metaDescription = $('meta[property="og:description"]').attr('content');
        const metaImage = $('meta[property="og:image"]').attr('content');

        const linkPreview = {
            title: metaTitle || '',
            description: metaDescription || '',
            image: metaImage || '',
        };

        return Response.json(linkPreview);
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'An error occurred while fetching the link preview.' }, {
            status: 500
        });
    }

}