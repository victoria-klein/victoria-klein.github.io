
import MainLayout from "@/components/MainLayout";

const Projects = () => {
  return (
    <MainLayout>
      <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-[600px]">
        <p className="font-courier text-lg text-gray-700">
          A showcase of personal and professional projects spanning mathematics, AI, and software development.
        </p>
        <p className="font-courier text-md text-gray-500 mt-4 border border-dashed border-gray-500 p-2">
          Coming soon: Detailed project descriptions and demonstrations.
        </p>
      </div>
    </MainLayout>
  );
};

export default Projects;
