// @ts-nocheck
import Image from 'next/image';
import React from 'react';
import error from '../../../public/images/error.png';

class ErrorBoundary extends React.Component {
  constructor(props: React.ReactNode) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className=' flex justify-center items-center flex-col grow 	h-screen'>
          <Image alt='404 image' src={error} className='w-72 ' />
          <h2 className='text-5xl mt-16 text-center'>something went wrong</h2>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
