import MainLayout from "@/components/MainLayout";
import { useWhiteMode } from "@/contexts/WhiteModeContext";
import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";

const CV = () => {
  const { getBackgroundClass } = useWhiteMode();

  return (
    <MainLayout>
      <div
        className={`${getBackgroundClass()} border-2 border-dashed border-[#FF6B6B] p-6 rounded-none w-full tracking-tighter`}
      >
        {/* <div className="flex justify-end gap-2">
          <p className="font-courier text-md text-gray-700 font-bold">
            <a
              href="/victoria-klein-cv.pdf"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          </p>
        </div> */}
        <div className="flex justify-end gap-1">
          <div className="text-right font-courier text-sm">
            Reach out via: 
          </div>
          <div className="text-right font-courier text-sm">
            <a
              href="https://linkedin.com/in/victoria--klein"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              victoria--klein
            </a>
          </div>
          <FaLinkedin className="w-5 h-5 text-[#8B5CF6]" />
          <span className="text-right font-courier text-sm"> | </span>
          <div className="text-right font-courier text-sm">
            <a
              href="mailto:kleinv@pm.me"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              kleinv@pm.me
            </a>
          </div>
          <FaAt className="w-5 h-5 text-[#8B5CF6]" />
          <span className="text-right font-courier text-sm"> | </span>
          <div className="text-right font-courier text-sm">
            <a
              href="https://github.com/victoria-klein"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              victoria-klein
            </a>
          </div>
          <FaGithub className="w-5 h-5 text-[#8B5CF6]" />
        </div>
        {/* <br />
        <p className="font-courier text-md text-gray-700 font-bold">
          Experience
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            AI Researcher <br />
            <a
              href="https://www.symbolica.ai"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Symbolica AI
            </a>
          </span>{" "}
          <div className="flex justify-between w-full">
            <span className="font-bold">🗓️ Jun 2025 - </span>
            <span className="font-bold">London, UK 📍</span>
          </div>
          <span className="text-xs">
            * Proposed, co-led and built a protocol and frameworkfor building
            and deploying "code mode" agents (see{" "}
            <a
              href="https://blog.cloudflare.com/code-mode/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              here
            </a>{" "}
            for similar), SDK (Python & TypeScript) in beta to be released
            publicly in November 2025
            <br />* Protocol extended MCP to enable RPC with arbitrary objects
            in an execution environment
            <br />* Significant contribution to product research, ideation and
            de-risking, working day-to-day with the CPO
          </span>
          <div className="flex justify-between w-full">
            <span className="font-bold">🗓️ Sep 2024 - Jun 2025</span>
            <span className="font-bold"></span>
          </div>
          <span className="text-xs">
            * Theoretical and experimental research into language model
            architectures and constrained decoding
            <br />* Trained and evaluated O(100M) to O(1B) scale models on large
            scale distributed GPU infrastructure
            <br />* Designed and implemented in-house model training and
            evaluation frameworks
          </span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            Visiting Researcher <br />
            <a
              href="https://ivi.fnwi.uva.nl/quva/index.html"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUVA lab
            </a>
            , University of Amsterdam
          </span>{" "}
          <div className="flex justify-between w-full">
            <span className="font-bold">🗓️ Jan 2023 - Aug 2023</span>
            <span className="font-bold">Amsterdam, NL 📍</span>
          </div>
          <span className="text-xs">
            * 6 month research visit under{" "}
            <a
              href="http://www.egavves.com/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              Efstratios Gavves
            </a>{" "}
            culminating in a poster at ICML 2023
          </span>
        </p>
        <br />
        <p className="font-courier text-md text-gray-700 font-bold">
          Skills <span className="text-xs">(R - Research, T - Teaching)</span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <div className="tracking-tightest">
            <span className="font-bold">DL Frameworks: </span>
            <span className="tracking-tightest">
              PyTorch (2019- ,R&T){" "}
              <span className="text-xs">(Flash, Flex, Lightning)</span> | JAX{" "}
              <span className="text-xs">(Flax, NNX, Equinox)</span> (2021- ,R) |
              Tensorflow (2017-2023,T){" "}
            </span>
          </div>
          <div className="tracking-tightest">
            <span className="font-bold">Programming languages: </span>
            <span className="tracking-tightest">
              Python (2015- ) | TypeScript (2025- ) | Haskell, C++ (2015-2017)
            </span>
          </div>
          <div className="tracking-tightest">
            <span className="font-bold">Additional skills: </span>
            <span className="tracking-tightest">
              SLURM (2022-2023) | Pallas (2024- ){" "}
            </span>
          </div>
        </p>
        <br />
        <p className="font-courier text-md text-gray-700 font-bold">
          Education
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            PhD Candidate in Mathematics <br />
            Imperial College London
          </span>{" "}
          <br />
          <div className="flex justify-between w-full">
            <span className="font-bold">🗓️ Nov 2019 - Aug 2024 </span>
            <span className="font-bold">London, UK 📍</span>
          </div>
          <span className="text-xs tracking-tighter">
            * PhD advisors:{" "}
            <a
              href="https://www.ma.ic.ac.uk/~jswlamb/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              Professor Jeroen S. W. Lamb
            </a>
            ,{" "}
            <a
              href="https://www.coursera.org/instructor/kevin-webster"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              Dr Kevin N. Webster
            </a>
            <br />* Part of the{" "}
            <a
              href="https://www.randomsystems-cdt.ac.uk/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              EPSRC CDT for Mathematics of Random Systems
            </a>
            <br />* Theoretical and experimental research into using generating
            sets of algebraic equivariants to parameterise Equivariant Neural
            Networks for Lie groups
            <br />* Optimising and scaling advanced computational algebra
            algorithms for large scale GPU infrastructure
          </span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            MSc in Mathematics <br />
            Imperial College London
          </span>{" "}
          <br />
          <div className="flex justify-between w-full">
            <span className="font-bold">🗓️ Nov 2018 - Aug 2020 </span>
            <span className="font-bold">London, UK 📍</span>
          </div>
          <span className="text-xs tracking-tighter">
            * 1st Class Honours, 83% average
            <br />* Courses on ML, DL, group theory, stochastic analysis, SDEs,
            random dynamical systems
          </span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            BSc in Mathematics and Computer Science <br />
            Durham University
          </span>{" "}
          <br />
          <div className="flex justify-between w-full">
            <span className="font-bold">🗓️ Oct 2015 - Aug 2018 </span>
            <span className="font-bold">Durham, UK 📍</span>
          </div>
          <span className="text-xs tracking-tighter">* 1st Class Honours</span>
        </p>
        <br />

        <p className="font-courier text-md text-gray-700 font-bold">Projects</p>
        <p className="font-courier text-xs text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">Personal</span>
          <br />
          <a
            href="https://victoria-klein.github.io/projects"
            className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
          >
            victoria-klein.github.io/projects
          </a>
          <br />
          <br />
          <span className="font-bold">Teaching</span>
          <br />* Graduate tutorials in DL (2021, 2022 & 2023), Imperial
          <br />* Undergraduate courses in differential equations (2022) and
          calculus (2021), Imperial
          <br />
          <br />
          <span className="font-bold">Other</span>
          <br />* Code First Girls Fellow (2020)
          <br />* Regular attendance at{" "}
          <a
            href="https://aitinkerers.org/p/welcome"
            className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
          >
            AI Tinkerers
          </a>{" "}
          events
          <br />* Committee member, WomenInStem@IC Society (2020) | Postgraduate
          representative, Women in Maths Society, Imperial College London (2021)
        </p>
        <br />

        <p className="font-courier text-md text-gray-700 font-bold">Awards</p>
        <p className="font-courier text-xs text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">2022 🗓️</span>
          <div className="flex justify-between w-full">
            <span>* Dorris Chen Award</span>
            <span>Department of Mathematics, Imperial College London</span>
          </div>
          <div className="flex justify-between w-full">
            <span>* The Fields’ Institute Travel Grant</span>
            <span>The Fields’ Institute </span>
          </div>
        </p>
        <br />

        <p className="font-courier text-md text-gray-700 font-bold">
          Publications
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="text-xs font-bold">🗓️ 2023</span>
          <div className="flex justify-between w-full">
            <span className="font-normal">
              * ICML, Workshop on Topology, Algebra and Geometry in Machine
              Learning (TAG-ML){" "}
              <span className="italic text-xs tracking-tightest">
                | Poster{" "}
                <sup>
                  <a
                    href="https://openreview.net/forum?id=NyCb1a8iL1"
                    className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                  >
                    [paper]
                  </a>
                </sup>
              </span>
            </span>
          </div>
          <span className="text-xs">🗓️ 2022</span>
          <br />
          <span className="font-normal">
            * Learning for Dynamics and Control Conference{" "}
          </span>
          <span className="italic text-xs tracking-tightest">
            | Oral{" "}
            <sup>
              <a
                href="https://arxiv.org/abs/2204.12323"
                className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              >
                [paper]
              </a>
            </sup>
          </span>
          <br />
          <span className="font-normal">
            * The Fields’ Institute 3rd Symposium for Machine Learning and
            Dynamical Systems{" "}
          </span>
          <span className="italic text-xs tracking-tightest">
            | Poster{" "}
            <sup>
              <a
                href="https://arxiv.org/abs/2204.12323"
                className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
              >
                [paper]
              </a>
            </sup>
          </span>
          <br />
          <br />
          <span className="text-xs font-bold">🗓️ 2020 & 2021</span>
          <br />
          <span className="font-normal">
            * Mary Lister McCammon Fellowship Talk, Imperial College London{" "}
          </span>
        </p>
        <br />

        <span className="font-courier text-md text-gray-700 font-bold">
          Other{" "}
        </span>
        <p className="font-courier text-gray-700 text-sm mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">Languages:</span> English (native), German
          (proficient)
          <br />
          <span className="font-bold">Nationality:</span> Swiss, British
          <br />
          <span className="font-bold">Additional experience:</span>
          <p className="font-courier text-sm text-gray-700 tracking-tightest text-xs">
            <div className="flex justify-between w-full">
              <span>JP Morgan </span>
              <span>London, UK 📍</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="italic">Investment Banking Summer Analyst</span>
              <span>Summer 2017 🗓️</span>
            </div>
            <br />
            <div className="flex justify-between w-full">
              <span>Bio-X/School of Medicine, Stanford University </span>
              <span>Palo Alto, CA 📍</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="italic">Cardiothoracic Surgery Intern</span>
              <span>Summer 2013 🗓️</span>
            </div>
          </p>
        </p> */}
      </div>
    </MainLayout>
  );
};

export default CV;
