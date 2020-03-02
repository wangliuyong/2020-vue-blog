import {mapGetters} from 'vuex'
import blog from '@/api/blog'

export default {
  data () {
    return {
      page:1,
      total:0,
      blogs:[],
    }
  },
  computed:{
    ...mapGetters([
      'user'
    ])
  },
  created() {
    this.page=this.$route.query.page || 1;
    blog.getBlogsByUserId(this.user.id,{page:this.page}).then((res)=>{
      
      this.blogs=res.data;
      this.page=res.page;
      this.total=res.total;
      if(res.data.length>0){
        this.user=res.data[0].user;
      }
    })
  },
  methods:{
    onDelete(blogId){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        blog.deleteBlog({ blogId:blogId }).then((res)=>{
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.blogs=this.blogs.filter((blog)=>{return blog.id!=blogId})//更新博客列表
        }) 
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });





      
    },
    getDate(dateStr){
      let dateObj = typeof dateStr=='object' ? dateStr : new Date(dateStr);
      return {
        date:dateObj.getDate(),
        month:dateObj.getMonth()+1,
        year:dateObj.getFullYear()
      }
    },
    handleCurrentChange(newPage){
      blog.getBlogsByUserId(this.user.id,{page:newPage}).then((res)=>{
        this.blogs=res.data
        this.total=res.total
        this.page=res.page
        this.$router.push({path:`/my`,query:{page:newPage}})
      })
    },
  },

}