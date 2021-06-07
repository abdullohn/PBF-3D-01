import GetAPI from '../API/Get';
import PostAPI from '../API/Post';
import DeleteAPI from '../API/Delete';

const getNewsComment = () => GetAPI('comments?_sort=id&_order=desc');
const postNewsComment = (dataYgDikirim) => PostAPI('comments', dataYgDikirim);
const deleteNewsComment = (dataYgDihapus) => DeleteAPI('comments', dataYgDihapus);

const API = {
    getNewsComment,
    postNewsComment,
    deleteNewsComment
}
export default API;