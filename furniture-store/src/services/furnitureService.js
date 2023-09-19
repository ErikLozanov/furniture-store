import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/furnitures';

export const furnitureServiceFactory = (token) => {
    const request = requestFactory(token);


    const getAll = async () => {
        const result = await request.get(baseUrl);
        const furnitures = Object.values(result);

        return furnitures;
    };

    const getOne = async (furnitureId) => {
        const result = await request.get(`${baseUrl}/${gameId}`);

        return result;
    };

    const create = async (furnitureData) => {
        const result = await request.post(baseUrl, furnitureData);

        return result;
    };

    return {
        getAll,
        getOne,
        create,
    }
}