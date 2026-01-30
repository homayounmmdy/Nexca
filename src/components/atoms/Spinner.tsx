import React from 'react';

/**
 * A loading spinner component.
 *
 * Centers a large primary-colored spinner both vertically and horizontally
 * within its container using flexbox. Ideal for indicating loading states
 * in modals, pages, or data-fetching components.
 *
 * @example
 * <Spinner />
 *
 * @returns {JSX.Element} The centered loading spinner UI.
 */

const Spinner = (): JSX.Element => {
   return (
      <div
         data-testid="spinnerContainer"
         className="flex h-full w-full items-center justify-center"
      >
         <span
            data-testid="spinner"
            className="loading loading-spinner loading-lg text-primary"
         ></span>
      </div>
   );
};

export default Spinner;
