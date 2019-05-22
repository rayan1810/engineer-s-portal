'use strict'
const Post = use('App/Models/Post')
const Music = use('App/Models/Music')

const Helpers = use('Helpers')

class PostController {
    async home({view}) {
        const posts = await Post.all();

        return view.render('index', { posts: posts.toJSON() })
    }
   
    async userIndex({view ,auth}){
        const posts=await auth.user.posts().fetch();
        return view.render('posts',{posts : posts.toJSON()});
    }

    async create({request ,response,session,auth}){
        const post = request.all();
        const music = new Music;

        const mypic = request.file('profile_pic');
        var fname = `${new Date().getTime()}.${mypic.subtype}`;
        var catg=post.gender;
            await mypic.move(Helpers.resourcesPath('views'),{
            name:fname,
            overwrite :true
        })
        const posted = await auth.user.posts().create({
            title:post.title,
            link:post.link,
            description: post.description,
            uploadlink:fname,
            cat:catg,
        })
        if(post.gender=='music'){
       
            music.title=post.title,
            music.link=post.link,
            music.description= post.description,
            music.uploadlink=fname,

            music.cat=catg
            
    await music.save();
        }
        session.flash({message:'Your File has been posted'});
        return response.redirect('back');
    }

        async delete({
            response,session,params
        }){
            const post = await Post.find(params.id);

            await post.delete();
            session.flash({message: 'Your post has been deleted'});
            return response.redirect('back');
        }

        async edit({ params, view }) {
            const post = await Post.find(params.id);
            return view.render('edit', { post: post });
        }
    
        async update ({ response, request, session, params }) {
            const post = await Post.find(params.id);
    
            post.title = request.all().title;
            post.link = request.all().link;
            post.description = request.all().description;
    
            await post.save();
    
            session.flash({ message: 'Your post has been updated. '});
            return response.redirect('/post-a-job');
        }

}


module.exports = PostController
