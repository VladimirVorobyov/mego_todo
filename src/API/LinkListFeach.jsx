import axios from 'axios';

export default class LinkListFeach{
  static async giveArray (limit = 10, page = 1){
    const responce = await axios('https://jsonplaceholder.typicode.com/posts',{
      params:{
        _limit:limit,
        _page:page,
      }
    });
    return responce;
  }
  static async getLinkId (id){
    const responce = await axios('https://jsonplaceholder.typicode.com/posts/' + id);
    return responce;
  }
  static async getLinkComments (id){
    const responce = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return responce;
  }
}

