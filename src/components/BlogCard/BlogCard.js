import classNames from 'classnames/bind';
import styles from './BlogCard.module.scss';

const cx = classNames.bind(styles);

function BlogCard({ blog }) {
  return (
    <div className={cx('blog', 'col-xl-3', 'col-md-6', 'mb-4')}>
      <article>
        <div className={cx('post-img')}>
          <img src={blog.thumbnail} alt="" className={cx('img-fluid')} />
        </div>

        <p className={cx('post-category')}>{blog.category}</p>

        <h2 className={cx('title')}>
          <a href="#">{blog.title}</a>
        </h2>

        <div className={cx('d-flex', 'align-items-center')}>
          <img src={blog.author.image} alt="" className={cx('post-author-img', 'flex-shrink-0')} />
          <div className={cx('post-meta')}>
            <p className={cx('post-author-list')}>{blog.author.name}</p>
            <time dateTime="2023-10-21">{blog.date}</time>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
