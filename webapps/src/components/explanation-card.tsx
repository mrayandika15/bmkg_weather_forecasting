import { AlertTriangle } from "lucide-react";

interface ExplanationCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const ExplanationCard = ({ title, children }: ExplanationCardProps) => {
  return (
    <div className="border rounded-lg mt-2 p-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <AlertTriangle className="w-3 h-3 text-yellow-500" />
          <b className="text-xs text-muted-foreground">{title}</b>
        </div>
        <div className="text-xs text-muted-foreground mt-1">{children}</div>
      </div>
    </div>
  );
};

export default ExplanationCard;
