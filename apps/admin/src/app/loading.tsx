import { Spinner } from '@/components/atoms';
import React from 'react';

/**
 * A loading indicator component.
 *
 * This component displays a spinner to indicate that content is being loaded.
 * It is typically used as a placeholder while waiting for data or resources to load.
 *
 * @returns {React.ReactElement} - A React element representing the loading spinner.
 */

const Loading: React.FC = () => (
   <div className="p-5">
      <Spinner />
   </div>
);

export default Loading;
