import MainLayout from "@/components/MainLayout";

const linkClass = "underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors";
const cardClass = "font-courier text-sm text-gray-500 mt-4 border border-dashed border-gray-500 p-2";

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Projects = () => {
  return (
    <MainLayout>
      <div className="notepad p-4 sm:p-8 w-full relative">
        <p className="font-courier text-sm text-gray-700">
          My projects and tooling are (mainly) a product of curiosity (sometimes necessity) and my work at the
          time. Code and recordings are linked where public; reach out for the rest.
          <br />
        </p>

        <p className={cardClass}>
          <span className="font-bold">* Browsers for Coding Agents: The Two Tails of Verification</span>{" "}
          (<L href="https://www.youtube.com/watch?v=TOa1a9dsHH0">talk</L>)
          <br />
          A talk at Navigate 2026 (Browserbase, San Francisco) on evaluating how coding agents verify their own
          work, including through browser use. The eval scores both tails, over- and under-verification, and
          model families split clearly in which way they lean.
        </p>

        <p className={cardClass}>
          <span className="font-bold">* SotA on ARC-AGI-2 with REPL agents</span>{" "}
          (<L href="https://www.symbolica.ai/arcgentica">blog</L>
          {" | "}
          <L href="https://github.com/symbolica-ai/arcgentica">code</L>)
          <br />
          A self-initiated approach to the ARC-AGI-2 public eval built on the Agentica SDK, reaching 85.28% with
          recursive delegation across sub-agents. It led to the ARC-AGI-3 approach (
          <L href="https://github.com/symbolica-ai/ARC-AGI-3-Agents">code</L>) then pursued internally at
          Symbolica.
        </p>

        <p className={cardClass}>
          <span className="font-bold">* Agentica SDK</span>{" "}
          (<L href="https://www.symbolica.ai/beyond-code-mode">blog</L>
          {" | "}
          <L href="https://github.com/symbolica-ai/agentica">code</L>)
          <br />
          An open-source framework and protocol for building and deploying "code mode" agents, which work with
          runtime objects through a stateful REPL. Symbolica's first public release, which I proposed with a
          colleague and led.
        </p>

        <p className={cardClass}>
          <span className="font-bold">* JAX/NumPy implementation of the Growing Basis Algorithm</span> <br />
          The <L href="https://www.cs.columbia.edu/~andoni/papers/learnpoly.pdf">Growing Basis Algorithm</L>{" "}
          caught my attention after reading a <L href="https://arxiv.org/abs/2401.01869">paper</L> on the
          NP-hardness of learning under symmetry. It suggests the algorithm as a candidate for the problem when
          parameterizing continuous invariant functions as an approximation of an invariant polynomial. I thought
          that the theoretical results of this paper were worth trying to demonstrate (or at the very least play
          around with) in practice.
        </p>

        <p className={cardClass}>
          <span className="font-bold">* Synthesis of JAX NNX Graphs from PyTreeDefs</span> <br />I have a strong
          preference for using JAX and first learned about Flax's NNX package in early 2024. Inspired in part by
          Equinox, I ended up (accidentally) writing a tool for synthesizing JAX NNX graphs from PyTreeDefs, an
          example of stateless ML tooling at its best.
        </p>
      </div>
    </MainLayout>
  );
};

export default Projects;
