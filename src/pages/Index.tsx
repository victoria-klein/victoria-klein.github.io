
import MainLayout from "@/components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="notepad p-4 sm:p-8 w-full relative">
        <p className="font-courier text-md text-gray-700 text-left">
          Research engineer evaluating frontier models in production agent harnesses.
        </p>
        <p className="font-courier text-md text-gray-700 text-left mt-4">
          I am a Member of Technical Staff at Lovable. Before that I was a researcher at Symbolica, working on
          code-synthesis models, ARC-AGI-2 and the Agentica SDK, and before that I did a maths PhD at Imperial.
        </p>
      </div>
    </MainLayout>
  );
};

export default Index;
