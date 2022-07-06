import React, {useContext} from 'react'
import {ProductContext} from '../context'
import Link from 'next/link'

const Home = () => {
   
    const getPost = useContext(ProductContext)
       
   
    const getFirstPostText = getPost?.post[0]?.body[0].data.text
    const getFirstFivePosts = getPost?.post.slice(0,5);
    const getOtherPosts = getPost?.post.slice(4)

 

  return (
    <div>
        <div>            
                    <div>
                       {
                        getPost && <div className='first-post'>
                            <p className='tag'>{getPost?.post[0]?.tag[0]}</p>
                            <Link href="/components/post">
                                <h2 onClick={()=>getPost.handlePostDetails(getPost?.post[0]?.postId)}>{getPost?.post[0]?.title}</h2>
                            
                            </Link>
                            <p className='post-intro'>{getFirstPostText}</p>
                            <div className='author-info'>
                                <img src={getPost?.post[0]?.authorsPhoto} 
                                alt="avatar" 
                                className='avatar'
                                />

                                <p className="author">{getPost?.post[0]?.author}</p>
                                <p className="date">{getPost?.post[0]?.date}</p>

                            </div>
                        </div>
                       }
                    </div>

        </div>
        <div className='aside-post-container'>
            {getFirstFivePosts && getFirstFivePosts.map(res =>{
                return(
                    <div key={res.postId} className="mini-card module">
                        <p className='article-date'>Article on {res.date}</p>
                        <Link href="/components/post">
                        
                            <h4 
                            onClick={() =>getPost.handlePostDetails(res.postId)}>
                                {res.title}
                            </h4>
                        </Link>

                        <p className='aside-tag'>{res.tag[0]}</p>
                        <div className='author-info firstFourAvatar'>
                            <img src={res.authorsPhoto} className="avatar" alt="avatar" />
                            <p>{res.author}</p>

                        </div>
                    </div>
                )
            })}
        </div>

        <div className='card-container'>  
     
            {
                
                getOtherPosts && getOtherPosts.map(res =>{
                            
                        const text = res.body.map(val => val?.data?.text?.slice(0, 10))
                                return(

                                    <div className='card' key={res.postId}>
                                        <p className='tag'>{res.tag[0]}</p>
                                        <Link href="/components/post">
                                            <h2 onClick={()=>getPost.handlePostDetails(res.postId)}>{res.title}</h2>
                                        
                                        </Link>
                                        <p className='post-intro'>{text}</p>
                                        <div className='author-info'>
                                            
                                            <img src={res.authorsPhoto} 
                                            alt="avatar" 
                                            className='avatar'
                                            />

                                            <p className="author">{res.author}</p>
                                            <p className="date">{res.date}</p>

                                        </div>

                                    </div>
                                )
                            })
                            
                            
            }
        </div>

           
    </div>
  )
}

export default Home