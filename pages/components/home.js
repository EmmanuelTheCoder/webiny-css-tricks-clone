import React, {useContext} from 'react';
import {RichTextRenderer} from '@webiny/react-rich-text-renderer';
import {ProductContext} from '../../lib/context';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
   
    const getPost = useContext(ProductContext)
   
    const getFirstFivePosts = getPost?.post.slice(0,5);
    const getOtherPosts = getPost?.post.slice(4);
    
    const getParagraph = getPost?.post[0]?.body.filter(post => post.type === "paragraph")?.slice(0,2);
    console.log("paragraph", getParagraph) 

  return (
    <div>
        <div>            
                    <div>
                    
                       {
                        getPost && getParagraph && 
                        <div className='firstPostContainer'>
                            <Link href={'/components/' + getPost?.post[0]?.postId}>
                                <div className='image-div'>
                                <Image src={getPost?.post[0]?.contentPhoto} alt="avatar" 
                                className='firstPostImage'
                                width={500}
                                height={300}
                                layout="fill"
                                />
                                </div>
                            
                            </Link>

                            <div className='first-post'>
                            
                            <p className='tag'>{getPost?.post[0]?.tag[0]}</p>
                            <Link href={'/components/' + getPost?.post[0]?.postId} >
                                <h2>{getPost?.post[0]?.title}</h2>
                               
                            
                            </Link>
                            <div className="post-intro firstPostIntro">
                                <RichTextRenderer  data={getParagraph}/>
                    

                            </div>


                            <div className='firstPostAuthorInfo'>
                            {getPost?.post[0]?.authorsPhoto.length > 0 && (
                                <Image src={getPost?.post[0]?.authorsPhoto} alt="avatar" className='avatar' width={40} height={40}
                                layout="fixed"
                                />
                               
                                )}

                                <p className="author">{getPost?.post[0]?.author}</p>
                                <p className="date">{getPost?.post[0]?.date}</p>

                            </div>
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
                        <Link href={'/components/' + res.postId}>
                        
                            <h4>
                                {res.title}
                            </h4>
                        </Link>

                        <p className='aside-tag'>{res.tag[0]}</p>
                        <div className='author-info firstFourAvatar'>
                            <Image src={res.authorsPhoto} 
                            className="avatar" alt="avatar" width={40} 
                            height={40} layout="fixed" />
                            <p>{res.author}</p>

                        </div>
                    </div>
                )
            })}
        </div>

        <div className='card-container'>  
     
            {
                
                getOtherPosts && getOtherPosts.map(res =>{
                         // const getParagraph = getPost?.post[0]?.body.filter(post => post.type === "paragraph")?.slice(0,2);
                        const paragraph = res.body.filter(post => post.type === "paragraph")?.slice(0,2)    
                                return(

                                    <div className='card' key={res.postId}>
                                        <p className='tag'>{res.tag[0]}</p>
                                        <Link href={'/components/' + res.postId}>
                                            <h3>{res.title}</h3>
                                        
                                        </Link>
                                       
                                        <div className="post-intro">
                                            <RichTextRenderer data={paragraph}/>
                    

                                         </div>
                                        <div className='author-info'>
                                            
                                            <Image src={res.authorsPhoto} alt="avatar" className='avatar' width={40} height={40}
                                            layout="fixed"
                                            />

                                            <p className="author">{res.author}</p>
                                            <p className="date">{res.date}</p>

                                        </div>

                                    </div>
                                )
                            })
                            
                            
            }
        </div>
        
    <div className="archive">
        <button className='button'> KEEP BROWSING IN THE ARCHIVES </button>

    </div>

    <div className='aside-post-container'>
            {getFirstFivePosts && getFirstFivePosts.map(res =>{
                return(
                    <div key={res.postId} className="mini-card module">
                        <p className='article-date'>Article on {res.date}</p>
                        <Link href={'/components/' + res.postId}>
                        
                            <h4>
                                {res.title}
                            </h4>
                        </Link>

                        <p className='aside-tag'>{res.tag[0]}</p>
                        <div className='author-info firstFourAvatar'>
                            <Image src={res.authorsPhoto} 
                            className="avatar" alt="avatar" width={40} 
                            height={40} layout="fixed" />
                            <p>{res.author}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home