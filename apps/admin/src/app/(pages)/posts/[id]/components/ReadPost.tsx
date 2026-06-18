'use client';
import { Button } from '@/components/atoms';
import useReadText from '@/hooks/useReadText';
import { useEffect } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

const ReadPost = ({ text }: { text: string }) => {
   const { isSpeaking, handleReadText, handleStopReading, cleanup } =
      useReadText(text);

   useEffect(() => {
      return cleanup;
   }, [cleanup]);
   return (
      <>
         {!isSpeaking ? (
            <Button
               className="rounded-full text-white"
               onClick={isSpeaking ? handleStopReading : handleReadText}
               color="btn-primary"
               aria-label="reading post button"
            >
               <FaPlay />
            </Button>
         ) : (
            <Button
               className="rounded-full text-white"
               onClick={isSpeaking ? handleStopReading : handleReadText}
               color="btn-primary"
               aria-label="stop reading post button"
            >
               <FaStop />
            </Button>
         )}
      </>
   );
};

export default ReadPost;
