import React from 'react';
import PropTypes from 'prop-types';


class HomePage extends React.Component {
    render() {
        const { content } = this.props;
        const posts = [];

        content.forEach((post, idx) => {
            posts.push(<article key={idx}>
                <h1>{post.title}</h1>
                <p>{post.summary}</p>
                <a href={post.url}>read more</a>
            </article>);
        });
        return (
            <div>
                {posts}
            </div>
        );
    }
}

HomePage.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
        summary: PropTypes.string
    }))
};

export default HomePage;
