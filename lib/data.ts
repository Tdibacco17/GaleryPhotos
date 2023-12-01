export async function fetchGetPhotosByQuery({
    query, //tema de busqueda
    page = 1, //pagina de busqueda
    per_page = 12, //Cuantos datos por pagina
}: {
    query: string,
    page?: number,
    per_page?: number,
}) {
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        //get de fotos => https://api.pexels.com/v1/search?query=nature&per_page=1
        const rawResponse = await fetch(
            `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}&page=${page}`, {
            headers: {
                'Authorization': `${process.env.API_KEY}`,
            },
        });
        const parseResponse = await rawResponse.json();
        return parseResponse
    } catch (e) {
        console.error('Error al obtener los datos:', e);
    }
}
