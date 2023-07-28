import React from 'react';
import './imageError.css'; // Import your CSS file

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, date, author, source } = props;

    const handleImageError = (event) => {
        console.error('Image failed to load:', event.target.src);
        event.target.style.display = 'none';
    };

    return (
        <div>
            <div className="card my-3">
                <img
                    src={imageUrl}
                    onError={handleImageError}
                    className="card-img-top custom-image"
                    alt={''}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {title}... <span className="badge rounded-pill text-bg-primary">{source}</span>
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">
                        <small className="text-muted"></small>by {!author ? 'unknown' : author} on {new Date(date).toGMTString()}
                    </p>
                    <div className="d-flex justify-content-center">
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn btn-primary d-flex justify-content-center width-50%"
                        >
                            Read
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsItems;
