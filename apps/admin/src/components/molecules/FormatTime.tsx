import React from 'react';
interface FormatTimeProps {
   timestamp: string;
   options?: Intl.DateTimeFormatOptions;
}

const optionsDefault: Intl.DateTimeFormatOptions = {
   year: 'numeric',
   month: '2-digit',
   day: '2-digit',
};

const FormatTime = ({
   timestamp,
   options = optionsDefault,
}: FormatTimeProps) => {
   const formatDate = (
      timestamp: string,
      options: Intl.DateTimeFormatOptions
   ) => {
      const date = new Date(timestamp);
      return date.toLocaleString('en-GB', options);
   };

   return <>{formatDate(timestamp, options)}</>;
};

export default FormatTime;
