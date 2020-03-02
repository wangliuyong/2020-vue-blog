import request from '../helps/request'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

export default {
  getBlogs({ page=1, userId, atIndex } = { page: 1 }) {
    return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
  },

  getIndexBlogs({ page=1 } = { page: 1}) {
    return this.getBlogs({ page, atIndex: true })
  },

  getBlogsByUserId(userId, { page=1, atIndex } = { page: 1}) {
    return this.getBlogs({ userId, page, atIndex })
  },

  getDetail({ blogId }) {
    return request(`/blog/${blogId}`)
  },

  updateBlog({ blogId }, { title, content, description, atIndex }) {
    return request(`/blog/${blogId}`, 'PATCH', { title, content, description, atIndex })
  },

  deleteBlog({ blogId }) {
    return request(`/blog/${blogId}`, 'DELETE')
  },

  createBlog({ title = '', content = '', description = '', atIndex = false} = { title: '', content: '', description: '', atIndex: false}) {
    return request(URL.CREATE, 'POST', { title, content, description, atIndex })
  }

}