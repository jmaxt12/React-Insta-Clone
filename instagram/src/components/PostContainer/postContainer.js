import React from 'react';
import CommentSection from '../CommentSection/commentSection';
import './postContainer.css';
import PropTypes from 'prop-types';
import Likes from './likes';
// import styled from 'styled-components';

// const PostWrapper = styled.div`
//     width: 642px;
//     text-align: left;
//     `;

const PostContainer = props => {
    if (!props.dummyData.length) {
        return <h4>Loading Posts...</h4>;
    }
    return (
        // <PostWrapper>
        <div>
        {props.dummyData.map ((data, index) => {
            return (
                <div className = 'posts' key = {index}>
                    <div className = 'thumbName'>
                        <img className = 'thumbnail' src ={data.thumbnailUrl} alt = 'img'/>
                        <p className = 'username'><strong>{data.username}</strong></p>
                    </div>
                        <img src ={data.imageUrl} alt = 'img'/>
                        <strong><Likes item={data}/></strong>
                    {/* <p>{data.timestamp}</p> */}
                    <CommentSection item={data}/>
                </div>  
            )
        }
        )}
        {/* </PostWrapper> */}
        </div> 
    )
}
    PostContainer.propTypes = {
        dummyData: PropTypes.array
    }




export default PostContainer;