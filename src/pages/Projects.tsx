import MainLayout from "@/components/MainLayout";
import { useWhiteMode } from "@/contexts/WhiteModeContext";

const Projects = () => {
  const { getBackgroundClass } = useWhiteMode();

  return (
    <MainLayout>
      <div
        className={`${getBackgroundClass()} border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-full`}
      >
        <p className="font-courier text-sm text-gray-700">
          My personal projects/tooling are (mainly) a product of curiosity
          (sometimes necessity) and my work at the time. Reach out for access!
          <br />
        </p>
        <p className="font-courier text-sm text-gray-500 mt-4 border border-dashed border-gray-500 p-2">
          <span className="font-bold">
            * JAX/NumPy implementation of the Growing Basis Algorithm
          </span>{" "}
          <br />
          The{" "}
          <a
            href="https://www.cs.columbia.edu/~andoni/papers/learnpoly.pdf"
            className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Growing Basis Algorithm
          </a>{" "}
          caught my attention after reading a{" "}
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
      </div>
    </MainLayout>
  );
};

export default Projects;
