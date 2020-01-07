import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5726fc107bc5c78beaef56ce3690a0b0d44069593cacd8dd6dd08c18f15dfaea'
  }
});
