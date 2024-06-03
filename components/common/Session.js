import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Session = () => {
  return (
    <div className="max-w-3xl px-4 mx-auto my-4 md:my-12 space-y-8">
      <Alert variant="destructive" className="flex items-center">
        <AlertCircle className="h-4 w-4 mr-2" aria-label="Error" />
        <div>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};

export default Session;
