import React, {createContext, useEffect, useState} from 'react';

import {GraphQLClient, gql} from 'graphql-request'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
 
    //state to store information from the headless cms
    const [cmsData, setCmsData] = useState({
        post: []
    })
    
    //useEffect to call graphql endpoint
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
            {
                listBlogs{
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
        const data = await graphQLClient.request(queryRequest)
        setCmsData({post: data.listBlogs.data})
        //getSelectedPost: data.listBlogs.data[0]
    

     } 
     callApi()
    }, [])
    
//get full details of a selected post

    return(
       <ProductContext.Provider value={{
           ...cmsData
           
       }} >
           {children}
       </ProductContext.Provider>
    );
}


export default ProductProvider;





