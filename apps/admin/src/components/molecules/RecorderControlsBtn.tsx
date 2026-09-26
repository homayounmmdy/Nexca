import { Button } from "../atoms";

interface Props {
  isRecording: boolean;
  isLoading: boolean;
  audioBlob: Blob | null;
  onStart: () => void;
  onStop: () => void;
  onUpload: () => void;
}

function RecorderControlsBtn({
  isRecording,
  isLoading,
  audioBlob,
  onStart,
  onStop,
  onUpload,
}: Props) {
  return (
    <div className="flex gap-4">
      <Button
        onClick={isRecording ? onStop : onStart}
        disabled={isLoading}
        color={isRecording ? "btn-error" : "btn-primary"}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>

      {audioBlob && (
        <Button onClick={onUpload} disabled={isLoading} color="btn-success">
          {isLoading ? "Transcribing..." : "Transcribe"}
        </Button>
      )}
    </div>
  );
}

export default RecorderControlsBtn;
