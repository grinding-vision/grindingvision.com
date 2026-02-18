import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Grinding Vision
      </h1>
      <p className="mb-4">
        {`Grinding Vision is a mobile game studio building original experiences for iOS and Android. We combine gameplay-first design, strong visual identity, and data-informed live operations to create games players return to every day.`}
      </p>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          Latest Studio Updates
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
