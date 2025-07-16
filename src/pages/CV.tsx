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
        <div className="flex justify-end gap-2">
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
        </div>
        <div className="flex justify-end gap-2">
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
        <br />
        <p className="font-courier text-md text-gray-700 font-bold">
          Experience
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            ML scientist,{" "}
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
            <span>🗓️ Sep 2024 - </span>
            <span>London, UK 📍</span>
          </div>
          <span className="text-xs">
            * Helped come up with and pitch Symbolica's first product, Agentica,
            a lightweight and expressive framework for agents as programmers
            <br />
            * Developed the constrained decoding and prompt engineering for
            Agentica
            <br />
            * Part of an internal special projects group working day-to-day with
            the CPO
            <br />* Worked on large scale distributed training on H100s and
            evals of code synthesis models (Torch, JAX, Pallas)
          </span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            Visiting researcher,{" "}
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
            <span>🗓️ Jan 2023 - Aug 2023</span>
            <span>Amsterdam, NL 📍</span>
          </div>
          <br />* Visiting researcher * Paper went to ICML 2023
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
              Python (2015- ) | Haskell, C++ (2015-2017)
            </span>
          </div>
          <div className="tracking-tightest">
            <span className="font-bold">Additional skills: </span>
            <span className="tracking-tightest">
              SLURM cluster (2022-2023) | git (2024- ) | Pallas (2024- ){" "}
            </span>
          </div>
        </p>
        <br />
        <p className="font-courier text-md text-gray-700 font-bold">
          Education
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            PhD Candidate in Mathematics, Imperial College London
          </span>{" "}
          <br />
          <div className="flex justify-between w-full">
            <span>🗓️ Nov 2019 - Aug 2024 </span>
            <span>London, UK 📍</span>
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
            <br />
            * My research focused on using generating sets of equivariants to
            parameterise equivariant neural networks, using advanced
            computational algebra with DL frameworks
            <br />* Part of the{" "}
            <a
              href="https://www.randomsystems-cdt.ac.uk/"
              className="underline text-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
            >
              EPSRC CDT for Mathematics of Random Systems
            </a>
          </span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            MSc in Mathematics, Imperial College London
          </span>{" "}
          <br />
          <div className="flex justify-between w-full">
            <span>🗓️ Nov 2018 - Aug 2020 </span>
            <span>London, UK 📍</span>
          </div>
          <span className="text-xs tracking-tighter">
            * 1st Class Honours, 83% average
            <br />* Courses on ML, DL, group theory, stochastic analysis, SDEs,
            random dynamical systems
          </span>
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="font-bold">
            BSc in Mathematics and Computer Science, Durham University
          </span>{" "}
          <br />
          <div className="flex justify-between w-full">
            <span>🗓️ Oct 2015 - Aug 2018 </span>
            <span>Durham, UK 📍</span>
          </div>
          <span className="text-xs tracking-tighter">* 1st Class Honours</span>
        </p>
        <br />

        <p className="font-courier text-md text-gray-700 font-bold">
          Invitations
        </p>
        <p className="font-courier text-sm text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <span className="text-xs">🗓️ 2023</span>
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
          <span className="text-xs">🗓️ 2020 & 2021</span>
          <br />
          <span className="font-normal">
            * Mary Lister McCammon Fellowship Talk, Imperial College
            London{" "}
          </span>
        </p>

        <br />
        <p className="font-courier text-md text-gray-700 font-bold">Awards</p>
        <p className="font-courier text-xs text-gray-700 mt-4 border border-dashed border-gray-700 p-2">
          <div className="flex justify-between w-full">
            <span>Department of Mathematics, Imperial College London</span>
            <span>London, UK 📍</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="italic">Dorris Chen Award</span>
            <span>2022 🗓️</span>
          </div>
          <br />
          <div className="flex justify-between w-full">
            <span>The Fields’ Institute </span>
            <span>Toronto, ON 📍</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="italic">The Fields’ Institute Travel Grant</span>
            <span>2022 🗓️</span>
          </div>
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
        </p>
      </div>
    </MainLayout>
  );
};

export default CV;
