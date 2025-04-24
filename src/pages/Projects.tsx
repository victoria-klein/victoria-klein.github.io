import MainLayout from "@/components/MainLayout";

const Projects = () => {
  return (
    <MainLayout>
      <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-[600px]">
        <p className="font-courier text-sm text-gray-700">
          My personal projects/tooling are (mainly) a product of curiosity
          (sometimes necessity) and my work at the time.
          <br />
          After a healthy stretch of time on my local machine, some have made
          their way to GitHub.
        </p>
        <p className="font-courier text-sm text-gray-500 mt-4 border border-dashed border-gray-500 p-2">
          <span className="font-bold">
            * JAX/NumPy implementation of the{" "}
            <a
              href="https://www.cs.columbia.edu/~andoni/papers/learnpoly.pdf"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Growing Basis Algorithm
            </a>
          </span>{" "}
          <br />
          The Growing Basis Algorithm caught my attention after reading this{" "}
          <a
            href="https://arxiv.org/abs/2401.01869"
            className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            paper
          </a>{" "}
          on the NP-hardness of learning under symmetry. It suggests the
          algorithm as a candidate for the problem when parameterizing
          continuous invariant functions as an approximation of an invariant
          polynomial. I thought that the theoretical results of this paper were
          worth trying to demonstrate (or at the very least play around with) in
          practice.
        </p>
        <p className="font-courier text-sm text-gray-500 mt-4 border border-dashed border-gray-500 p-2">
          <span className="font-bold">
            * Synthesis of JAX NNX Graphs from PyTreeDefs
          </span>{" "}
          <br />I have a strong preference for using JAX and first learned about
          Flax's NNX package in early 2024. Inspired in part by Equinox, I ended
          up (accidentally) writing a tool for synthesizing JAX NNX graphs from
          PyTreeDefs, an example of stateless ML tooling at its best.
        </p>
        <br />
        <p className="font-courier text-sm text-gray-700">
          Bonus,
          <br />
          packages that I like:
          <br />
          <div className="space-y-1">
            <div className="flex gap-4">
              <span className="w-24">
                <a
                  href="https://flax.readthedocs.io/en/v0.8.3/experimental/nnx/index.html"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  NNX
                </a>
              </span>
              <span>(Flax, JAX) Stateless to a tee</span>
            </div>
            <div className="flex gap-4">
              <span className="w-24">
                <a
                  href="https://docs.kidger.site/equinox/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  Equinox
                </a>
              </span>
              <span>(JAX) PyTree nn Modules</span>
            </div>
            <div className="flex gap-4">
              <span className="w-24">
                <a
                  href="https://pytorch.org/blog/flexattention/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  FlexAttention
                </a>
              </span>
              <span>(PyTorch) Customisable Flash-like performance</span>
            </div>
            <div className="flex gap-4">
              <span className="w-24">
                <a
                  href="https://lightning.ai/docs/pytorch/stable/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  Lightning
                </a>
              </span>
              <span>(PyTorch)</span>
            </div>
            <div className="flex gap-4">
              <span className="w-24">
                <a
                  href="https://symbolica.io/"
                  className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                >
                  Symbolica
                </a>
              </span>
              <span>CUDA-accelerated computer algebra</span>
            </div>
          </div>
        </p>
      </div>
    </MainLayout>
  );
};

export default Projects;
