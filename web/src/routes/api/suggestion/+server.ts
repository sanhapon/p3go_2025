import { json } from '@sveltejs/kit';
import data from '$lib/data/bkk.json';

export const GET = async () => {
    return json(data); 
};