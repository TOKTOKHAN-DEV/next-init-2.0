import instance from '../_axios/instance';

export default {
  getDetail: async () => {
    const { data } = await instance({
      method: 'GET',
      url: `/v1/brand`,
    });
    return data;
  },
};
