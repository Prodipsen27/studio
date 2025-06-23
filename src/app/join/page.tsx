import OnboardingForm from "@/components/join/OnboardingForm";

export default function JoinPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-headline">Join Our Community</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Share your talent with the world. Fill out the form below to get started.
        </p>
      </div>
      <OnboardingForm />
    </div>
  );
}
