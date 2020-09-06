// {   
// //method to submit the form data for new post using Ajax
//    let createPost= function(){
//        let newPostForm=$('#new-post-form')

//        newPostForm.submit(function(e){
//            e.preventDefault();

//            $.ajax({
//                type:'post',
//                url:'/posts/create',
//                data: newPostForm.serialize(),
//                success:function(data){
//                     let newPost= newPostDom(data.data.post)
//                },error:function(error){
//                    console.log(error.responseText);
//                }
//            })
//        })
//    }
//    //method to create a post in DOM

//    let newPostDom= function(post)
//    {
//     return $(`<div id="post-${post._id}">
   
//     <small>
//         <a href="/posts/destroy/${post.id}">x</a>
//     </small>     
//     <% } %>  

//     <div id="user-name">
       
//         <span> <a href="/users/profile"> ${post.user.name} </a> </span>
    
//     </div>

//     <div id="user-post">

//         <p> ${post.content} </p>

//     </div>
   
//     <form action="/comments/create" method="POST">

//            <input type="text" id="comments" name="content" placeholder="Add Comments" required>
//              <!-- Sending the post id to which the comment belongs -->
//            <input type="hidden" name="post" value="${post._id}>
                            
//             <input type="submit" value="Add Comment">

//      </form>

//      <% for(comment of post.comments ){%>
                 
//     </div>
//     <!-- Creating and Displaying comments -->
//     <div id="comments-box" >
//         <% if (locals.user && locals.user.id == comment.user.id){ %>
        
//         <small>
//             <a href="/comments/destroy/${comment.id}">x</a>
//         </small> 
        
//         <% } %>  
//         <p id="cname"> ${comment.user.name} </p>
    
//             <p id="content"> ${comment.content} </p>     

//     </div>
//     <% } %> 

// </div>

//   <% } %>`)
//    }


//    createPost();
// }