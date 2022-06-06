import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './Blog.css';
import { Button } from '@mui/material';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData';
import SingleBlog from './SingleBlog/SingleBlog';

function Blog() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {blogData.length > 0 && (
        <div className="blog" id="blog" style={{ backgroundColor: theme.secondary }}>
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogData.slice(0, 3).reverse().map((blog) => (
                <SingleBlog
                  theme={theme}
                  title={blog.title}
                  desc={blog.description}
                  date={blog.date}
                  image={blog.image}
                  url={blog.url}
                  key={blog.id}
                  id={blog.id}
                />
              ))}
            </div>

            {blogData.length > 3 && (
            <div className="blog--viewAll">
              <Link to="/blog">
                <Button
                  sx={{ color: theme.tertiary,
                    backgroundColor: theme.primary,
                    '&:hover': {
                      color: theme.secondary,
                      backgroundColor: theme.primary,
                    } }}
                >
                  View All
                  <ArrowForwardIcon
                    sx={{ color: theme.tertiary,
                      backgroundColor: theme.secondary70,
                      width: '40px',
                      height: '40px',
                      padding: '0.5rem',
                      fontSize: '1.05rem',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      '&:hover': {
                        color: theme.tertiary,
                        backgroundColor: theme.secondary,
                      } }}
                  />
                </Button>
              </Link>
            </div>
            )}
          </div>
        </div>
      )}

    </>
  );
}

export default Blog;
