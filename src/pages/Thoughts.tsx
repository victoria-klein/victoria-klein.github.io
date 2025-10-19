import MainLayout from "@/components/MainLayout";
import { useWhiteMode } from "@/contexts/WhiteModeContext";

const Thoughts = () => {
  const { getBackgroundClass } = useWhiteMode();

  return (
    <MainLayout>
      <div
        className={`${getBackgroundClass()} border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-full space-y-4`}
      >
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-bold">
            Packages
          </p>
          <p className="font-courier text-sm text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2">
            <div className="grid grid-cols-[230px_1fr] gap-4 gap-y-1">
              <span>
                <a
                  href="https://github.com/guidance-ai/guidance"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  guidance
                </a>{" "}
              </span>
              <span>Constrained generation meets CFGs</span>
              <span>
                <a
                  href="https://dspy.ai/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  DSPy
                </a>
              </span>
              <span>Prompts as programs</span>
              <span>
                <a
                  href="https://flax.readthedocs.io/en/v0.8.3/experimental/nnx/index.html"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  NNX
                </a>{" "}
                (JAX)
              </span>
              <span>Stateless to a tee</span>

              {/* <span>
              <a
                href="https://docs.kidger.site/equinox/"
                className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              >
                Equinox
              </a> (JAX)
            </span>
            <span>PyTree nn Modules</span> */}

              <span>
                <a
                  href="https://pytorch.org/blog/flexattention/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  FlexAttention
                </a>{" "}
                (PyTorch)
              </span>
              <span>Customisable Flash-like performance</span>

              <span>
                <a
                  href="https://symbolica.io/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  Symbolica
                </a>
              </span>
              <span>CUDA-accelerated computer algebra</span>
            </div>
            {/* <p className="font-courier text-sm text-gray-700 text-left font-normal underline">Books that I've enjoyed:</p>
          <p className="font-courier text-gray-700 mt-2 text-left text-sm">
            Figuring, Maria Popova
            <br />
            The Enigma of Reason, Hugo Mercier & Dan Sperber
          </p> */}
          </p>
        </div>
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-bold">
            Blogs/posts
          </p>
          <br />
          <p className="font-courier text-md text-gray-700 text-left italic">
            2025
          </p>
          <p className="font-courier text-md text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://blog.cloudflare.com/code-mode/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Mode: the better way to use MCP
            </a>{" "}
            <br />
            <span className=" tracking-tighter">
              A blog post by Cloudflare on giving LLMs access to MCP servers via
              an execution environment and the broader point of tool calling via
              code.
            </span>
          </p>
          <p className="font-courier text-md text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://www.boundaryml.com/blog/lambda-the-ultimate-ai-agent"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lambda the Ultimate AI Agent
            </a>{" "}
            <br />
            <span className=" tracking-tighter">
              A blog post by BoundaryML on the use of lambda calculus as a
              programming language for AI agents.
            </span>
          </p>
          <p className="font-courier text-md text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://www.marksaroufim.com/blog/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              A blog by Mark Saroufim
            </a>{" "}
            <br />
            <span className="tracking-tighter">
              A blog by one of the founders of the{" "}
              <a
                href="https://discord.gg/DFf3BzHG"
                className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GPU MODE
              </a>{" "}
              Discord server, (a great resource for interesting discussions on
              high-level (Torch, JAX) and low-level (CUDA) GPU programming and
              debugging). I mostly use it to keep up to date with{" "}
              <a
                href="https://gpu-mode.github.io/popcorn/"
                className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Popcorn
              </a>
              , an open-source project that aims to use LLMs to generate CUDA
              kernels.{" "}
            </span>
          </p>
          <br />
          <p className="font-courier text-md text-gray-700 text-left italic">
            2024
          </p>
          <p className="font-courier text-md text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://depyf.readthedocs.io/en/latest/walk_through.html"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              depyf: A walk through example of{" "}
              <code className="bg-gray-100 px-1 text-xs">torch.compile</code>
            </a>{" "}
            <br />
            <span className="tracking-tighter">
              For those that like optimisation and don't like using code that
              they don't understand.
            </span>
          </p>
          <p className="font-courier text-md text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://transformer-circuits.pub/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transformer Circuits
            </a>{" "}
            <br />
            <span className="tracking-tighter">
              This blog features selected works from Anthropic's mech interp
              team, which I have found to be an interesting read in the context
              of distillation of attention-based models.
            </span>
          </p>
          <br />
        </div>{" "}
        {/*  */}
      </div>
    </MainLayout>
  );
};

export default Thoughts;
