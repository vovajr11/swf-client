import axios from "axios";

export const getChapterById = async (id: string | undefined) => {
    try {
        const { data } = await axios.get(`/chapters/${id}`);
        return data;

    } catch (error) {
        console.log('Error');
    }
}