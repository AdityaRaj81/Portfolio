import { Component } from 'react';
import { Home, RefreshCw } from 'lucide-react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the component tree and displays a fallback UI
 * This prevents the entire app from crashing due to errors in child components
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  /**
   * Update state when an error is caught
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Log error details for debugging
   */
  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  /**
   * Reset error state and reload the page
   */
  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-bg-primary">
          <div className="max-w-md w-full text-center space-y-6 bg-bg-secondary/80 backdrop-blur-md rounded-2xl p-8 border border-border-primary">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gradient">
                Oops! Something went wrong
              </h1>
              <p className="text-text-muted text-sm">
                We encountered an unexpected error. Don't worry, your data is safe.
                Please try refreshing the page or go back to the homepage.
              </p>
            </div>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-bg-primary/50 rounded-lg p-4 text-left">
                <p className="text-red-400 text-xs font-mono break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 btn-primary"
              >
                <RefreshCw size={18} />
                Refresh Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bg-tertiary border border-primary-500/30 text-text-white hover:bg-primary-500/20 hover:border-primary-500/50 rounded-xl font-medium transition-all duration-300"
              >
                <Home size={18} />
                Go Home
              </button>
            </div>

            {/* Additional Help */}
            <div className="pt-4 border-t border-border-primary">
              <p className="text-text-muted text-xs">
                If the problem persists, please contact me at{' '}
                <a 
                  href="mailto:Connect2RajAditya@gmail.com" 
                  className="text-accent-cyan hover:underline"
                >
                  Connect2RajAditya@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
