import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({ posts }) => (
    posts.map((post) => {
        return (
            <Fragment key={post.id}>
                <Post post={post} />
                <hr />
            </Fragment>
        )
    })
  );

Posts.propTypes = {
    posts: PropTypes.arrayOf(Post.propTypes.post)
};

export default Posts;
