import { Braces, FileText, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const paperUrl = 'https://arxiv.org/html/2608.28213v1';
const labUrl = 'https://ucl-humanoid.github.io/';
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto max-w-5xl px-5 pb-12 pt-16 text-center sm:pt-24">
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
          <a className="text-blue-600 hover:underline" href={labUrl} target="_blank" rel="noreferrer">
            UCL Humanoid Robotics Lab
          </a>
          <span className="mx-2 text-slate-300">·</span>
          Department of Computer Science, University College London
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            render={<a href={paperUrl} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            className="h-11 rounded-md bg-slate-800 px-5 text-white hover:bg-slate-700"
          >
            <FileText className="size-4" aria-hidden="true" /> arXiv
          </Button>
          <Button
            disabled
            className="h-11 cursor-not-allowed rounded-md border-slate-200 bg-slate-100 px-5 text-slate-400 disabled:opacity-100"
          >
            <Braces className="size-4" aria-hidden="true" /> Code (coming soon)
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

      {/* 无标题：视频作为 hero 的延伸紧跟其后，与 Abstract 的间距由后者自身的 padding 提供 */}
      <section className="mx-auto max-w-6xl px-5 pt-2 sm:pt-4" id="video" aria-label="Video">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-black shadow-sm">
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

      <section className="paper-section" id="abstract">
        <h2>Abstract</h2>
        <p>
          People read a humanoid robot’s motion in social settings not only for the action performed but for the affect conveyed. Motion carrying that affect has so far been generated for human avatars, where style is taken from a reference clip or an emotion word, neither of which can be quantitatively parameterized. We present PAMoR, which turns affect into a measured control parameter: a valence–arousal (V–A) coordinate computed natively on robot kinematics. It is obtained in closed form from postural expansion and movement energy, and these measurements serve directly as generation conditions, with no human annotation. An action prior and two affect priors, trained in a shared latent space, are composed at each denoising step: the action prior fixes what is performed, the affect priors modulate how. Whole-body motion rolls out autoregressively on a 29-DoF Unitree G1 in real time, with action and affect both editable. Generated motion tracks the commanded V–A over its full range while text-to-motion fidelity still matches text-only baselines. In a perceptual study, raters identify the commanded emotion on 0.38 of trials, above both baselines and approaching the 0.44 reported for acted human bodies.
        </p>
      </section>

      <section className="paper-section wide-section" id="framework">
        <h2>Framework</h2>
        <figure className="mt-8">
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
            Overview of the V–A-conditioned composable latent diffusion framework. Data processing (top left): motions are retargeted to the Unitree G1 or teleoperated on it directly, and a continuous V–A label is computed in closed form from body kinematics. Model framework (bottom): a text prompt and a valence–arousal pair each condition a separate denoising prior sharing a frozen MVAE latent space, composed at every denoising step. Real-world deployment (top right): the same action performed across the affect plane on a real G1.
          </figcaption>
        </figure>
        <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
          <div>
            <h3>V–A Labeling</h3>
            <p>Valence and arousal are computed rather than annotated. Both are evaluated in closed form on the 14 body keypoints obtained by forward kinematics, taking posture for valence and movement energy for arousal. This labels the entire training corpus at no annotation cost.</p>
          </div>
          <div>
            <h3>Composable Latent Diffusion</h3>
            <p>Three priors share a frozen motion latent space and are composed at sampling time. The action prior learns the action the text specifies; the affect priors learn how the V–A conditions change motion style.</p>
          </div>
          <div>
            <h3>Autoregressive Rollout</h3>
            <p>The decoder turns each clean latent into the next motion primitive, which a motion tracker executes on the robot and which feeds back as history for the following step.</p>
          </div>
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
      </section>

      <footer className="mt-8 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>
          PAMoR ·{' '}
          <a className="hover:underline" href={labUrl} target="_blank" rel="noreferrer">
            UCL Humanoid Robotics Lab
          </a>{' '}
          · University College London · 2026
        </p>
      </footer>
    </main>
  );
}
