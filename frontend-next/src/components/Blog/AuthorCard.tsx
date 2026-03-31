import './AuthorCard.css';

interface AuthorCardProps {
    author: string;
    bio?: string;
    avatar?: string;
}

export default function AuthorCard({ author, bio, avatar }: AuthorCardProps) {
    return (
        <div className="author-card glass-premium">
            <div className="author-avatar">
                {avatar ? (
                    <img src={avatar} alt={author} />
                ) : (
                    <div className="avatar-placeholder">
                        {author.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>
            <h4 className="author-name">{author}</h4>
            {bio && <p className="author-bio">{bio}</p>}
            <div className="author-social">
                <a href="https://twitter.com/josegaspard" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/josegaspard" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/josegaspard" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
}
