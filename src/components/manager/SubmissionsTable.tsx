"use client";

import * as React from "react";
import type { Submission } from "@/lib/types";

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const XCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);


interface SubmissionsTableProps {
  submissions: Submission[];
}

export function SubmissionsTable({ submissions: initialSubmissions }: SubmissionsTableProps) {
  const [submissions, setSubmissions] = React.useState<Submission[]>(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] = React.useState<Submission | null>(null);

  const handleStatusChange = (id: number, status: 'approved' | 'rejected') => {
    setSubmissions(currentSubmissions =>
      currentSubmissions.map(submission =>
        submission.id === id ? { ...submission, status } : submission
      )
    );
  };

  const getStatusBadge = (status: Submission['status']) => {
    const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold";
    switch (status) {
      case 'approved':
        return <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`}><CheckCircleIcon className="mr-1 h-4 w-4" />Approved</span>;
      case 'pending':
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300`}><ClockIcon className="mr-1 h-4 w-4" />Pending</span>;
      case 'rejected':
        return <span className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300`}><XCircleIcon className="mr-1 h-4 w-4" />Rejected</span>;
      default:
        return <span className={baseClasses}>{status}</span>;
    }
  }

  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Category</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">City</th>
                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Hourly Fee</th>
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {submissions.length > 0 ? (
                submissions.map((submission) => (
                  <tr key={submission.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle font-medium">{submission.name}</td>
                    <td className="p-4 align-middle capitalize">{submission.category}</td>
                    <td className="p-4 align-middle">{submission.city}</td>
                    <td className="p-4 align-middle text-right">₹{submission.hourlyFee}</td>
                    <td className="p-4 align-middle text-center">{getStatusBadge(submission.status)}</td>
                    <td className="p-4 align-middle text-right space-x-2">
                       <button onClick={() => setSelectedSubmission(submission)} className="text-sm text-blue-600 hover:underline">View</button>
                       <button onClick={() => handleStatusChange(submission.id, 'approved')} className="text-sm text-green-600 hover:underline">Approve</button>
                       <button onClick={() => handleStatusChange(submission.id, 'rejected')} className="text-sm text-red-600 hover:underline">Reject</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-4 h-24 text-center">
                    No new submissions.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setSelectedSubmission(null)}>
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="text-lg font-semibold leading-none tracking-tight">Application: {selectedSubmission.name}</h2>
                    <p className="text-sm text-muted-foreground">Review the details for this artist submission.</p>
                </div>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center">
                      <p className="w-28 text-sm text-muted-foreground">Name</p>
                      <p className="font-semibold">{selectedSubmission.name}</p>
                  </div>
                  <div className="flex items-center">
                      <p className="w-28 text-sm text-muted-foreground">Category</p>
                      <p className="capitalize">{selectedSubmission.category}</p>
                  </div>
                  <div className="flex items-center">
                      <p className="w-28 text-sm text-muted-foreground">City</p>
                      <p>{selectedSubmission.city}</p>
                  </div>
                  <div className="flex items-center">
                      <p className="w-28 text-sm text-muted-foreground">Hourly Fee</p>
                      <p>₹{selectedSubmission.hourlyFee}</p>
                  </div>
                  <div className="flex items-center">
                      <p className="w-28 text-sm text-muted-foreground">Status</p>
                      <div>{getStatusBadge(selectedSubmission.status)}</div>
                  </div>
                </div>
                 <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button onClick={() => setSelectedSubmission(null)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-2 sm:mt-0">Close</button>
                 </div>
            </div>
        </div>
      )}
    </>
  );
}
