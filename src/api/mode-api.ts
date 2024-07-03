import axiosClient from '~/api/axios-client'

export const ModelApi = {
  async getModels() {
    const res = await axiosClient.get('/categories')
    console.log(res)
    return res
  }
}
