import marked from 'marked'
import blog from '../../../api/blog'

export default {
  data () {
    return {
      title:'',
      content:'',
      user:{},
      createdAt:'',
    }
  },
  created() {
    console.log(this.user)
    let blogId=this.$route.params.blogId
    blog.getDetail({blogId:blogId}).then((res)=>{
      this.user=res.data.user;
      this.title=res.data.title;
      this.content=res.data.content;
      this.createdAt=res.data.createdAt;
    })
  },
  computed:{
    markdown(){
      return marked(this.content)
    },
  },
  methods:{

  }
}