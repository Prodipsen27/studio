import { SubmissionsTable } from '@/components/manager/SubmissionsTable';
import { submissions } from '@/data/submissions';

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Artist Submissions</h1>
        <p className="text-muted-foreground mt-1">Review and manage new artist applications.</p>
      </div>
      <SubmissionsTable submissions={submissions} />
    </div>
  );
}
