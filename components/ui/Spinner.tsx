type SpinnerProps = {
    label?: string;
  };
  
  export default function Spinner({ label }: SpinnerProps) {
    return (
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
        {label && <span>{label}</span>}
      </div>
    );
  }