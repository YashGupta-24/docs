import axios from 'axios'

export const getDocs = async () => {
    const response = await axios.get('http://localhost:8080/docs')
    return response;
}

export const addDoc = async (doc) => {
    const response = await axios.post('http://localhost:8080/docs', doc);
    return response;
}

export const deleteDoc = async (id) => {
    const response = await axios.delete(`http://localhost:8080/docs/${id}`);
    return response;
}

export const editDoc = async (doc) => {
    const response = await axios.put(`http://localhost:8080/docs/${doc.id}`, doc);
    return response;
};