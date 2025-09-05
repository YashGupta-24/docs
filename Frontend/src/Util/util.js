import axios from 'axios'

export const getDocs = async () => {
    const response = await axios.get('http://localhost:8080/docs')
    // console.log(response);
    return response;
}

export const addDoc = (doc) => {
    axios.post('http://localhost:8080/docs', {
        id: Math.floor(Math.random() * 10000),
        desc: doc,
        fs: 8,
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Download Now!",
            tagColor: "green"
        }
    });
}

export const deleteDoc = (id) => {
    axios.delete(`http://localhost:8080/docs/${id}`);
}

export const editDoc = (id, doc) => {
    axios.put(`http://localhost:8080/docs/${id}`, {
        id: id,
        desc: doc,
        fs: 8,
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Download Now!",
            tagColor: "green"
        }
    })
};