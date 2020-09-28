import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FFksVg3sAtOTmZ_nMExIaTsVqO_q9xEFsjso5bw1iQs',
  },
});
