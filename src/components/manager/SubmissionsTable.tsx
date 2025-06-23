"use client";

import * as React from "react";
import type { Submission } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card } from "../ui/card";

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
    switch (status) {
      case 'approved':
        return <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white"><CheckCircle className="mr-1 h-4 w-4" />Approved</Badge>;
      case 'pending':
        return <Badge variant="secondary"><Clock className="mr-1 h-4 w-4" />Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="mr-1 h-4 w-4" />Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  }

  return (
    <>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>City</TableHead>
              <TableHead className="text-right">Hourly Fee</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.length > 0 ? (
              submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.name}</TableCell>
                  <TableCell className="capitalize">{submission.category}</TableCell>
                  <TableCell>{submission.city}</TableCell>
                  <TableCell className="text-right">₹{submission.hourlyFee}</TableCell>
                  <TableCell className="text-center">{getStatusBadge(submission.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => setSelectedSubmission(submission)}>
                          View Application
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-green-600 focus:text-green-600" 
                          onClick={() => handleStatusChange(submission.id, 'approved')}
                        >
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600 focus:text-red-600"
                          onClick={() => handleStatusChange(submission.id, 'rejected')}
                        >
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No new submissions.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      
      {selectedSubmission && (
        <Dialog open={!!selectedSubmission} onOpenChange={(isOpen) => !isOpen && setSelectedSubmission(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Application: {selectedSubmission.name}</DialogTitle>
              <DialogDescription>
                Review the details for this artist submission.
              </DialogDescription>
            </DialogHeader>
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
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
