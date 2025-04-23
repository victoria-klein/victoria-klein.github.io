
import MainLayout from "@/components/MainLayout";

const Thoughts = () => {
  return (
    <MainLayout>
      <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-[600px] space-y-4">
        <div>
          <p className="font-courier text-lg text-gray-700 text-left font-normal">My own</p>
          <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2">On scaling</p>
        </div>
        <div>
          <p className="font-courier text-lg text-gray-700 text-left font-normal">Others'</p>
          <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2 text-sm">
            <a 
              href="https://transformer-circuits.pub/" 
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://transformer-circuits.pub/
            </a>
            {" "}I find this blog interesting. I am interested in the distillation of attention outputs
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Thoughts;
