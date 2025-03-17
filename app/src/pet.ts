import { petClient } from "./client";

export async function getPet(petId: string) {
    const options = {
        params: { path: {petId: petId}}
    };

    return await petClient.GET("/pet/{petId}", options)
}