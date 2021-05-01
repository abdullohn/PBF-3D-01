import GetAPI from '../API/Get';
import PostAPI from '../API/Post';
import DeleteAPI from '../API/Delete';

const getNewsKomentar = () => GetAPI('comment?_sort=id&_order=desc');
const postNewsKomentar = (dataYgDikirim) => PostAPI('comment', dataYgDikirim);
const deleteNewsKomentar = (dataYgDihapus) => DeleteAPI('comment', dataYgDihapus);


const API = {
    getNewsKomentar,
    postNewsKomentar,
    deleteNewsKomentar
}

export default API;