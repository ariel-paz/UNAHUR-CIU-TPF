
const SectionContainer = ({children}) => {
  return (
    <section className='w-full mx-auto container gap-6 md:max-w-4xl lg:max-w-6xl'>
        {children}
    </section>
  )
}

export default SectionContainer;