import React from 'react';
import PropTypes from 'prop-types';


class Post extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <article>
                <h1>{content.title}</h1>
                <p>{content.body}</p>
            </article>
        );
    }
}

Post.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
    })
};

export default Post;
