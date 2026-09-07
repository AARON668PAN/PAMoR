import { Braces, FileText, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const paperUrl = 'https://arxiv.org/html/2608.28213v1';
const pdfUrl = 'https://arxiv.org/pdf/2608.28213';
const codeUrl = 'https://github.com/AARON668PAN/PAMoR';
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto max-w-5xl px-5 pb-12 pt-16 text-center sm:pt-24">
        <p className="mb-5 text-sm font-medium text-slate-500">arXiv 2026</p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-6xl">
          PAMoR: Parameterized Affective Motion Generation in Real Time for Humanoid Robots
        </h1>

        <p className="mt-8 flex flex-wrap justify-center gap-x-2 gap-y-1 text-lg text-blue-600 sm:text-xl">
          <span>Yan Pan</span><span className="text-slate-300">·</span>
          <span>Lingfan Bao</span><span className="text-slate-300">·</span>
          <span>Tianhu Peng</span><span className="text-slate-300">·</span>
          <a className="hover:underline" href="mailto:chengxu.zhou@ucl.ac.uk">Chengxu Zhou</a>
        </p>
        <p className="mt-3 text-base text-slate-500">
          Department of Computer Science, University College London
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            render={<a href={paperUrl} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            className="h-11 rounded-md bg-slate-800 px-5 text-white hover:bg-slate-700"
          >
            <FileText className="size-4" aria-hidden="true" /> Paper
          </Button>
          <Button
            render={<a href={codeUrl} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            className="h-11 rounded-md bg-slate-800 px-5 text-white hover:bg-slate-700"
          >
            <Braces className="size-4" aria-hidden="true" /> Code
          </Button>
          <Button
            render={<a href="#video" />}
            nativeButton={false}
            className="h-11 rounded-md bg-slate-800 px-5 text-white hover:bg-slate-700"
          >
            <PlayCircle className="size-4" aria-hidden="true" /> Video
          </Button>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-balance text-lg leading-8 text-slate-600">
          Real-time whole-body motion generation for a 29-DoF Unitree G1, with action, valence, and arousal independently editable during rollout.
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-5">
        <figure className="border-y border-slate-200 py-8 sm:py-12">
          <picture>
            <source srcSet={`${assetBase}/framework.webp`} type="image/webp" />
            <img
              className="mx-auto h-auto w-full"
              src={`${assetBase}/framework.png`}
              width={2281}
              height={1154}
              alt="Overview of the PAMoR data processing, valence-arousal labeling, composable latent diffusion model, and real-world robot deployment"
            />
          </picture>
          <figcaption className="mx-auto mt-5 max-w-4xl text-center text-sm leading-6 text-slate-500">
            Overview of the V–A-conditioned composable latent diffusion framework. The system processes motion data, computes V–A labels from robot kinematics, composes three conditional priors, and deploys generated motion on the Unitree G1.
          </figcaption>
        </figure>
      </div>

      <section className="paper-section" id="abstract">
        <h2>Abstract</h2>
        <p>
          People read a humanoid robot’s motion in social settings not only for the action performed but for the affect conveyed. PAMoR turns affect into a measured control parameter: a valence–arousal coordinate computed natively on robot kinematics.
        </p>
        <p>
          The coordinate is obtained in closed form from postural expansion and movement energy, with no human annotation. An action prior and two affect priors are trained in a shared latent space and composed at each denoising step: the action prior fixes what is performed, while the affect priors modulate how it is performed.
        </p>
        <p>
          Whole-body motion rolls out autoregressively on a 29-DoF Unitree G1 in real time, with action and affect both editable. Generated motion tracks the commanded V–A range while maintaining text-to-motion fidelity.
        </p>
      </section>

      <section className="paper-section wide-section" id="framework">
        <h2>Framework</h2>
        <div className="mt-8 grid gap-8 text-left md:grid-cols-3">
          <div>
            <h3>Robot-native V–A labeling</h3>
            <p>Valence is computed from postural expansion; arousal is computed from movement energy. Both are measured directly on the robot’s kinematics.</p>
          </div>
          <div>
            <h3>Composable latent diffusion</h3>
            <p>Separate text, valence, and arousal priors share one motion latent space and are composed during sampling.</p>
          </div>
          <div>
            <h3>Real-time rollout</h3>
            <p>The generated primitive is decoded, executed through a motion tracker, and fed back as history for continuous, editable motion.</p>
          </div>
        </div>
      </section>

      <section className="paper-section wide-section" id="video">
        <h2>Video</h2>
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-black shadow-sm">
          <video
            className="aspect-[8/5] w-full bg-black object-contain"
            controls
            playsInline
            preload="metadata"
            poster={`${assetBase}/pamor-poster.jpg`}
            aria-label="PAMoR narrated project video"
          >
            <source src={`${assetBase}/pamor-overview.mp4`} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </section>

      <section className="paper-section" id="citation">
        <h2>BibTeX</h2>
        <pre className="mt-8 overflow-x-auto rounded-lg bg-slate-100 p-5 text-left font-mono text-[13px] leading-6 text-slate-700 sm:p-7">
          <code>{`@article{pan2026pamor,
  title   = {PAMoR: Parameterized Affective Motion
             Generation in Real Time for Humanoid Robots},
  author  = {Pan, Yan and Bao, Lingfan and Peng, Tianhu
             and Zhou, Chengxu},
  journal = {arXiv preprint arXiv:2608.28213},
  year    = {2026}
}`}</code>
        </pre>
        <p className="mt-6 text-center">
          <a className="font-medium text-blue-600 hover:underline" href={pdfUrl} target="_blank" rel="noreferrer">
            Download the paper as PDF
          </a>
        </p>
      </section>

      <footer className="mt-8 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>PAMoR · University College London · 2026</p>
      </footer>
    </main>
  );
}
