import blog from '../../../api/blog.js'

export default {
  data () {
    return {
      title:'',
      description:'',
      content:'',
      atIndex:'',
      blogId:1
    }
  },
  created() {
    this.blogId=this.$route.params.blogId;
    blog.getDetail({blogId:this.blogId}).then((res)=>{
      this.title=res.data.title
      this.content=res.data.content
      this.description=res.data.description
      this.atIndex=res.data.atIndex
    })
  },
  methods:{
    onEdit(){
      blog.updateBlog({blogId:this.blogId},{title:this.title,description:this.description,content:this.content,atIndex:this.atIndex})
         .then((res)=>{
           this.$message.success(res.msg)
           this.$router.push({path:`/detail/${res.data.id}`})
         })
    },
  }
}
