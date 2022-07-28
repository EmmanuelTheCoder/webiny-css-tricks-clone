import React, {useContext, useEffect, useState} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';
import {GraphQLClient, gql} from 'graphql-request'
import {ProductContext} from "../../lib/context";
import Header from './header';
import { RichTextRenderer } from '@webiny/react-rich-text-renderer';


function Post() {
    const [getPost, setGetPost] = useState()
 
    const router = useRouter()
    
    const {post} = router.query
    

    useEffect(() =>{
        async function callApi(){
            
            const endpoint = process.env.NEXT_PUBLIC_CMS_ENPOINT
       
           const graphQLClient = new GraphQLClient(endpoint, {
               headers: {
                   authorization: process.env.NEXT_PUBLIC_TOKEN_SECRET
               }
           })
   
           //query cms data
   
           const queryRequest = gql`
                query getBlog($post: String) {
                   listBlogs(where: {
                    postId: $post
                   }){
                   data{
                       postId
                       title
                       body
                       authorsPhoto
                       contentPhoto
                       date
                       author
                       tag
                       
                   }
               }
               
           }
           
           `
           const variables = {
            post: post
           }
           const data = await graphQLClient.request(queryRequest, variables)
           setGetPost(data.listBlogs.data)
           data.listBlogs.data.map(res => setGetPost(res))

           
           
           
        } 
        callApi()
    }, [])
    

     return(

        <div className="container" >
        
        <Header />

       {getPost && (
        <div>
        <p className='tag'>{getPost?.tag[0]}</p>
        <h1 className='title'>{getPost?.title}</h1>

        <div className="author-bio author-info">
            <Image src={getPost.authorsPhoto} alt="avatar" className='avatar' 
            width={40} height={40} layout="fixed" />
            <p className='author'>{getPost.author}</p>
            <p className='date'>{getPost.date}</p>
        </div>
        
        <div className="article-sponsor">
            <p>DigitalOcean joining forces with CSS-Tricks! Special welcome offer: get $100 of free credit.</p>
        </div>
        <div className="post-content">
            <RichTextRenderer data={getPost?.body} />     
        </div>
        </div>
        )}

    </div>
    
    
    
    )
}

export default Post