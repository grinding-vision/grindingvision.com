import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'News',
  description: 'Follow updates from the Grinding Vision team.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Grinding Vision News
      </h1>
      <BlogPosts />
    </section>
  )
}
