
import MainLayout from "@/components/MainLayout";

const Thoughts = () => {
  return (
    <MainLayout>
      <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-[600px] space-y-4">
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-normal">My own</p>
          <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2">On scaling</p>
        </div>
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-normal">Others'</p>
          <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2 text-sm">
          <span className="font-bold">* </span><a 
              href="https://transformer-circuits.pub/" 
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://transformer-circuits.pub/
            </a>
            {" "}This blog features selected works from Anthropic's mech interp team, which I have found to be an interesting read in the context of distillation of attention-based models.
          </p>
          <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2 text-sm">
          <span className="font-bold">* </span><a 
              href="https://depyf.readthedocs.io/en/latest/index.html" 
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://depyf.readthedocs.io/en/latest/index.html
            </a>
            {" "}If you like optimisation and don't like using code you don't understand, this documentation aims to explain the illusive <code className="bg-gray-100 px-1 text-xs">torch.compile</code>.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Thoughts;
