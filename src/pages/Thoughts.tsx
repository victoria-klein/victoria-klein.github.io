import MainLayout from "@/components/MainLayout";

const Thoughts = () => {
  return (
    <MainLayout>
      <div
        className="notepad p-8 w-full space-y-4 relative"
      >
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-bold">
            My own
          </p>
          <p className="font-courier text-md text-gray-700 text-left italic mt-2">
            2026
          </p>
          <p className="font-courier text-md text-gray-700 mt-0 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://www.symbolica.ai/blog/arcgentica"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              SotA ARC-AGI-2 Results with REPL Agents
            </a>{" "}
            <br />
            <span className="tracking-tighter">
              State-of-the-art ARC-AGI-2 results using REPL agents built with
              Symbolica's Agentica framework, achieving 85.28% with recursive
              delegation across sub-agents.
            </span>
          </p>
          <p className="font-courier text-md text-gray-700 text-left italic">
            2025
          </p>
          <p className="font-courier text-md text-gray-700 mt-0 text-left border border-dashed border-gray-700 p-2 text-sm">
            <span className="font-bold">* </span>
            <a
              href="https://www.symbolica.ai/blog/beyond-code-mode-agentica"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beyond Code Mode
            </a>{" "}
            <br />
            <span className="tracking-tighter">
              On building agents that interact with runtime objects through code,
              where the agent's scope evolves naturally as it works.
            </span>
          </p>
          <br />
        </div>
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-bold">
            Others'
          </p>
          <p className="font-courier text-md text-gray-700 text-left italic">
            2025
          </p>
          <p className="font-courier text-md text-gray-700 mt-0 text-left border border-dashed border-gray-700 p-2 text-sm">
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
          <p className="font-courier text-md text-gray-700 text-left italic">
            2024
          </p>
          <p className="font-courier text-md text-gray-700 mt-0 text-left border border-dashed border-gray-700 p-2 text-sm">
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
        <div>
          <p className="font-courier text-md text-gray-700 text-left font-bold">
            Packages I like
          </p>
          <p className="font-courier text-sm text-gray-700 mt-2 text-left border border-dashed border-gray-700 p-2">
            <div className="grid grid-cols-[230px_1fr] gap-4 gap-y-1">
              <span>
                <a
                  href="https://github.com/symbolica-ai/agentica-python-sdk"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  Agentica SDK
                </a>
              </span>
              <span>Agents with a stateful REPL</span>
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
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Thoughts;
