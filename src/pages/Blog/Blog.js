import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import BlogCard from '~/components/BlogCard/BlogCard';
const cx = classNames.bind(styles);

function Blog() {
  const [blogs, setBlogs] = useState([]);
  // Xử lý gọi api
  const fetchData = () => {
    fetch(`http://localhost:3000/data/blogData.json`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="blogs" className={cx('blogs')}>
      <div className={cx('container-fluid')}>
        <div className={cx('row')}>
          <h4 className={cx('section-tilte')}>Our Blog</h4>
        </div>
      </div>

      <div className={cx('row', 'mt-5')}>
        {blogs && blogs.length && blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </section>
  );
}

export default Blog;
