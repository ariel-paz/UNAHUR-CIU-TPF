import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

function Home() {
  const [open, setOpen] = useState(false);
  const [submited, setSubmited] = useState(false);
  return (
    <div>
      <section
        className="relative bg-white"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('images/home.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative my-0 mx-auto justify-between max-w-6xl pt-5 pb-4 px-2 mb-5">
          <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                Productos tecnológicos precisos y sostenibles.
              </h1>
              <p
                className="mb-6 max-w-2xl text-500 lg:mb-8 md:text-lg lg:text-xl dark:text-400"
                style={{ color: "white" }}
              >
                Transformamos la tecnología en soluciones eficientes y
                sostenibles para la industria.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-4 w-full my-0 mx-auto justify-between max-w-6xl px-2 ">
        <div
          className="flex flex-col items-center p-6 border border-orange-300 hover:bg-orange-200 rounded-lg shadow-lg"
          style={{ cursor: "pointer" }}
          onClick={() =>
            document
              .getElementById("nosotros")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-8 h-8 mb-2 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8c1.333 0 2 .667 2 2 0 1.333-.667 2-2 2s-2-.667-2-2c0-1.333.667-2 2-2zm6.364 1.636a9 9 0 010 12.728l-1.414-1.414a7 7 0 000-9.9L18.364 9.636z"></path>
          </svg>
          <span className="text-sm font-semibold">¿Quienes somos?</span>
        </div>

        <div
          className="flex flex-col items-center p-6 border border-orange-300 hover:bg-orange-200 rounded-lg shadow-lg"
          style={{ cursor: "pointer" }}
          onClick={() =>
            document
              .getElementById("historia")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-8 h-8 mb-2 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 011-1h4a1 1 0 011 1v12a1 1 0 01-1 1h-4a1 1 0 01-1-1V3zm-2 8H5a1 1 0 000 2h4a1 1 0 000-2zm0-4H5a1 1 0 000 2h4a1 1 0 000-2zm0-4H5a1 1 0 000 2h4a1 1 0 000-2z"></path>
          </svg>
          <span className="text-sm font-semibold">Nuestra historia</span>
        </div>

        <div
          className="flex flex-col items-center p-6 border border-orange-300 hover:bg-orange-200 rounded-lg shadow-lg"
          style={{ cursor: "pointer" }}
          onClick={() =>
            document
              .getElementById("contacto")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-8 h-8 mb-2 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M21 16.16c0-1.16-2.58-2.16-5.75-2.16s-5.75 1-5.75 2.16V19h11.5v-2.84zM5 4h14a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"></path>
          </svg>
          <span className="text-sm font-semibold">Contactanos</span>
        </div>
      </div>
      <div className="my-0 mx-auto justify-between max-w-6xl pt-5 pb-4 px-2 mb-5">
        <section
          className="bg-white p-8 items-center inline-block md:flex"
          id="nosotros"
        >
          <div className="md:w-1/2">
            <img
              src="images/home1.jpg"
              alt="Soporte técnico"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 pt-8 md:pt-0">
            <h1 className="text-3xl font-semibold mb-4">Nuestra Empresa</h1>
            <p className="text-lg">
              Somos una empresa dedicada a ofrecer componentes de alta calidad y
              precisión que impulsan la innovación. Desde nuestros inicios, nos
              hemos enfocado en brindar el mejor producto a nuestros clientes,
              basándonos en principios de calidad, transparencia y compromiso.
            </p>
          </div>
        </section>

        <section className="p-8" id="historia">
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Nuestra Historia y Filosofía
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              TechMakers Inc. fue fundada en 2005 por un equipo de ingenieros
              apasionados por la tecnología y la innovación en el sector
              manufacturero. La compañía comenzó como un pequeño taller en el
              que desarrollaban componentes electrónicos personalizados para
              empresas de tecnología. Con el tiempo, TechMakers se especializó
              en la producción de sistemas avanzados de hardware para la
              automatización industrial, convirtiéndose en un líder en la
              manufactura de componentes precisos y confiables para dispositivos
              electrónicos y maquinaria pesada.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-700">
              Desde sus inicios, TechMakers se ha centrado en la calidad y la
              precisión, utilizando materiales de alta tecnología y un control
              de calidad riguroso para cumplir con los estándares
              internacionales. En 2018, la empresa decidió digitalizar sus
              operaciones internas con un sistema backend propio para gestionar
              productos, componentes y relaciones con fabricantes, logrando una
              administración eficiente de su catálogo de productos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group">
              <img
                src="images/home2.jpg"
                alt="Interior del local"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="group">
              <img
                src="images/home3.jpg"
                alt="Área de atención al cliente"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="group">
              <img
                src="images/home4.jpg"
                alt="Exterior de la empresa"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        <section className="p-8">
          <h2 className="text-3xl font-semibold mb-4">
            Conoce más sobre nosotros
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/WivxtMYlYCw"
              title="Video de presentación"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-64 md:h-96 shadow-lg rounded"
            ></iframe>
          </div>
        </section>

        <section className="p-8 text-gray-800" id="contacto">
          <h2 className="text-3xl font-semibold mb-4">Contáctanos</h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="md:w-1/2 space-y-4 mb-8 md:mb-0">
              <p className="text-lg">
                <strong>Dirección:</strong> <br /> Calle Falsa 123, Ciudad, País
              </p>
              <p className="text-lg">
                <strong>Teléfono:</strong> <br />
                +123 456 7890
              </p>
              <p className="text-lg">
                <strong>Horario de Atención:</strong> <br />
                Lunes a Viernes de 9:00 am a 6:00 pm
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284507!2d-122.419415484681!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f1a1e1b1%3A0x4c8b0b1b1b1b1b1b!2sCalle%20Falsa%20123%2C%20Ciudad%2C%20Pa%C3%ADs!5e0!3m2!1ses!2ses!4v1633024800000!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              ¿Tienes preguntas? ¡Estamos aquí para ayudarte! No dudes en
              ponerte en contacto con nosotros.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-200"
              onClick={() => setOpen(true)}
            >
              Enviar Mensaje
            </button>
          </div>
        </section>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {!submited ? (
                <form
                  className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmited(true);
                    setTimeout(() => {
                      setOpen(false);
                      setSubmited(false);
                    }, 3000);
                  }}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Tu correo electrónico"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="Tu mensaje"
                      required
                    ></textarea>
                  </div>
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-200"
                      type="submit"
                    >
                      Enviar
                    </button>
                    <button
                      className="text-gray-500 hover:text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center p-6 border border-orange-300 rounded-lg shadow-lg">
                  <svg
                    className="w-8 h-8 mb-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold">Mensaje enviado</span>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Home;
