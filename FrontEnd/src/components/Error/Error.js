import React from 'react';

const Error=({ errorCode, title, message, buttonLabels ,onGoBack })=> {
  return (
    <div className="flex items-center justify-center px-2 md:px-0">
      <div>
        <p className="text-sm font-semibold text-black">{errorCode}</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-gray-500">{message}</p>
        <div className="mt-6 flex items-center space-x-3">
          <button
          onClick={onGoBack} 
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >

            
            {buttonLabels.goBack}
          </button>
      
        </div>
      </div>
    </div>
  );
}
export default Error
