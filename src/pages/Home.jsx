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
          backgroundImage: "url('images/home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative my-0 mx-auto justify-between max-w-6xl pt-5 pb-4 px-2 mb-5">
          <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                Innovación en Productos Tecnológicos.
              </h1>
              <p
                className="mb-6 max-w-2xl text-500 lg:mb-8 md:text-lg lg:text-xl dark:text-400"
                style={{ color: "white" }}
              >
                Ofrecemos productos tecnológicos avanzados que combinan
                precisión, eficiencia y sostenibilidad para impulsar el éxito de
                nuestros clientes.
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mb-2 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mb-2 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 mb-2 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
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
            <p className="text-lg text-justify">
              Somos una empresa dedicada a ofrecer hardware de alto rendimiento
              que impulsa la innovación. Desde el inicio, nos enfocamos en
              brindar procesadores, gráficas y placas base de calidad,
              basándonos en principios de excelencia y compromiso.
            </p>
          </div>
        </section>

        <section className="p-8" id="historia">
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Nuestra Historia y Filosofía
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              TechMakers Inc. fue fundada en 2005 por un equipo de ingenieros
              apasionados por la tecnología y la innovación en la industria de
              hardware para computadoras. La compañía comenzó como un pequeño
              taller en el que desarrollaban componentes personalizados para
              entusiastas de la computación y empresas tecnológicas. Con el
              tiempo, TechMakers se especializó en la creación de procesadores,
              tarjetas gráficas, placas base y otros componentes avanzados,
              convirtiéndose en un referente en el desarrollo de soluciones de
              hardware para gaming, diseño profesional y servidores
              empresariales.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-700 text-justify">
              Desde sus inicios, TechMakers ha priorizado la calidad y la
              innovación, utilizando materiales de última generación y procesos
              de fabricación de precisión para cumplir con los estándares más
              exigentes del mercado. En 2018, la empresa implementó un sistema
              backend propio para gestionar su creciente catálogo de productos,
              componentes y relaciones con fabricantes, permitiendo una
              administración eficiente y transparente de sus operaciones. Hoy en
              día, TechMakers Inc. sigue liderando el mercado con productos
              diseñados para ofrecer rendimiento y confiabilidad a gamers,
              creadores de contenido y empresas tecnológicas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group">
              <a
                href="https://www.youtube.com/watch?v=XHOzJudr8PI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/home2.jpg"
                  alt="Interior del local"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
              </a>
            </div>
            <div className="group">
              <a
                href="https://www.youtube.com/watch?v=t1BXTTfyVdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/home3.jpg"
                  alt="Exterior de la empresa"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
              </a>
            </div>
            <div className="group">
              <a
                href="https://www.youtube.com/watch?v=iExX3T70878"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/home4.jpg"
                  alt="Armado de celulares"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
              </a>
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
                <strong>Dirección:</strong> <br /> Tte. Manuel Origone 151,
                B1688 Villa Tesei, Provincia de Buenos Aires
              </p>
              <p className="text-lg">
                <strong>Teléfono:</strong> <br />
                +54 3446 9920
              </p>
              <p className="text-lg">
                <strong>Horario de Atención:</strong> <br />
                Lunes a Viernes de 9:00 am a 6:00 pm
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6566.905339887034!2d-58.63710146096076!3d-34.617999347060284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1732478622161!5m2!1ses!2sar"
                allowFullScreen=""
                className="w-full h-64 md:h-96 shadow-lg rounded"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
              Enviar mensaje
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
