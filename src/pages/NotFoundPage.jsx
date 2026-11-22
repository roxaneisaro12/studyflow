
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found')

  return (
    <section className="not-found">
      <p className="eyebrow">ERROR 404</p>

      <h1>Page not found</h1>

      <p className="muted">
        Sorry, the page you are looking for does not exist
        or may have been moved.
      </p>

      <Link to="/" className="btn btn-primary">
        Return to Dashboard
      </Link>
    </section>
  )
}
