import {Link} from 'react-router-dom'
export default function NotFoundPage(){return <div className="not-found panel"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>This page wandered off.</h1><p className="muted">The page you’re looking for doesn’t exist.</p><Link className="btn btn-primary" to="/">Back to dashboard</Link></div>}
