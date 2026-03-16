import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="zv-error-boundary">
          <div className="zv-error-boundary-content">
            <div className="zv-error-boundary-icon">&times;</div>
            <h1 className="zv-error-boundary-title">Something went wrong</h1>
            <p className="zv-error-boundary-desc">
              An unexpected error occurred. Try refreshing the page, or head back to safety.
            </p>
            <div className="zv-error-boundary-actions">
              <button
                className="zv-error-boundary-btn"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="zv-error-boundary-btn"
                onClick={() => this.setState({ hasError: false })}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
