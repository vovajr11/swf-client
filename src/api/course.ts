import axios from "axios";

export const getCourseById = async (id: string | undefined) => {
    try {
        const { data } = await axios.get(`/courses/${id}`);
        return data;

    } catch (error) {
        console.log('Error');
    }
}