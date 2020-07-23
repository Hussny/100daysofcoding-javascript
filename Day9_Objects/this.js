let user = {
    name: "salat",
    age: "24",
    email: "husseinsalat24@gmail.com",
    location: "nairobi",
    blogs: ["tears the innocent", "moment of life"],
    logBlogs: function(){
        console.log('This user has Written the following blogs');
        this.blogs.forEach(blog=>{
            console.log(blog);
        })
    }

  };

  user.logBlogs();
  console.log(this);