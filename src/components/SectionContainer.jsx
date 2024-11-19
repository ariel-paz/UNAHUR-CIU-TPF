
const SectionContainer = ({children, className = ''}) => {
  return (
    <section className={`w-full p-3 mx-auto container gap-6 md:max-w-4xl lg:max-w-6xl ${className}`}>
        {children}
    </section>
  )
}

export default SectionContainer;