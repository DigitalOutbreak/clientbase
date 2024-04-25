import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-6 py-8 md:py-10'>
      <div className='inline-block max-w-xl text-center justify-center'>
        <h1 className={title({ size: 'lg' })}>The&nbsp;</h1>
        <h1 className={title({ color: 'violet', size: 'lg' })}>
          All-in-One&nbsp;
        </h1>
        <br />
        <h1 className={title({ size: 'lg' })}>Client Management Suite</h1>
        <h2 className={subtitle({ class: 'mt-5 text-5xl' })}>
          Manage and collaborate with clients using one integrated platform
        </h2>
      </div>

      <div className='flex gap-6'>
        <Link
          isExternal
          href='/login'
          className={buttonStyles({
            color: 'primary',
            // radius: 'full',
            variant: 'shadow',
            size: 'lg',
          })}
        >
          Get Started
        </Link>
        <Link
          href='/signup'
          className={buttonStyles({
            variant: 'shadow',
            color: 'primary',
            size: 'lg',
          })}
        >
          Login
        </Link>
        {/* <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link> */}
      </div>

      {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  )
}
