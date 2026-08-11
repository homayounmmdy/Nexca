interface Props {
   transcription: { text: string } | null;
}

export default function TranscriptionResult({ transcription }: Props) {
   if (!transcription) return null;

   return (
      <div className="mt-4 p-4 bg-gray-100 rounded">
         <h3 className="font-bold mb-2">Transcription:</h3>
         <p>{transcription.text}</p>
      </div>
   );
}
