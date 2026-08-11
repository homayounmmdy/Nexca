interface Props {
   audioBlob: Blob | null;
}

export default function AudioPreview({ audioBlob }: Props) {
   if (!audioBlob) return null;

   const audioURL = URL.createObjectURL(audioBlob);

   return (
      <div className="mt-4">
         <audio controls src={audioURL} className="w-full" />
      </div>
   );
}
