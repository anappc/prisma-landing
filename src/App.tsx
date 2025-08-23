import React, { useState } from "react";
import {
  UsersRound,
  TrendingUp,
  Building2,
  Crown,
  Shuffle,
  Check,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Video,
  Target,
} from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/mjkebbly";
const MEET_BOOKING_URL = "https://calendar.app.google/Ytuti4pCBtgUdLeB8";

export default function App() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const year = new Date().getFullYear();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSending(true);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ nombre: "", apellido: "", email: "", empresa: "", mensaje: "" });
      } else {
        alert("No se pudo enviar. Intenta de nuevo o escríbenos por correo.");
      }
    } catch {
      alert("Error de red. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const heroMetrics = [
    { label: "Líderes Desarrollados", value: "500+", Icon: UsersRound },
    { label: "Aumento de Rendimiento", value: "85%", Icon: TrendingUp },
  ];

  const aboutMetrics = [
    { label: "Líderes Desarrollados", value: "500+", Icon: UsersRound },
    { label: "Mejora del Rendimiento", value: "85%", Icon: TrendingUp },
    { label: "Años de Experiencia", value: "3+", Icon: Check },
  ];

  const servicios = [
    {
      title: "Desarrollo de Liderazgo",
      desc: "Formación de líderes empáticos y efectivos que inspiran y retienen talento.",
      Icon: UsersRound,
    },
    {
      title: "Liderazgo Pragmático",
      desc: "Desarrollo de líderes capaces de tomar decisiones acertadas bajo presión, priorizar con eficacia y ejecutar con disciplina sin perder la empatía.",
      Icon: Target,
    },
    {
      title: "Programas de Habilitación en Ventas",
      desc: "Fortalecimiento de ventas consultivas, comunicación y negociación en contextos modernos.",
      Icon: TrendingUp,
    },
    {
      title: "Habilidades Blandas",
      desc: "Mejora de comunicación, resolución de conflictos, colaboración y desempeño de equipos.",
      Icon: Building2,
    },
    {
      title: "Habilidades Digitales y de IA",
      desc: "Capacitación en análisis, adaptabilidad y alfabetización digital para el futuro del trabajo.",
      Icon: Crown,
    },
    {
      title: "Talleres Corporativos a la Medida",
      desc: "Sesiones diseñadas con diagnóstico personalizado para atender las necesidades específicas de cada empresa.",
      Icon: Shuffle,
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#inicio" className="font-semibold text-2xl tracking-tight">
              Prisma Consulting & Talent Development
            </a>
            <nav className="hidden md:flex items-center gap-8 text-base font-medium">
              <a href="#servicios" className="hover:text-blue-700">Servicios</a>
              <a href="#nosotros" className="hover:text-blue-700">Nosotros</a>
              <a href="#contacto" className="hover:text-blue-700">Contacto</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a
                href={MEET_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
              >
                <Video size={16} />
                Agendar Meet
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-xl border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50"
              >
                Comenzar
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight">
                Libera el <span className="text-blue-900">Potencial Total</span> de tu Equipo
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl">
                Transforma tu organización con desarrollo estratégico de talento que genera resultados. Ayudamos a las empresas a construir equipos de alto rendimiento a través de metodologías probadas y consultoría personalizada.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={MEET_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white text-base font-semibold shadow hover:bg-green-700"
                >
                  Agendar Cita por Google Meet <Video size={18} />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Explorar Servicios
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
                {heroMetrics.map(({ label, value, Icon }) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                        <Icon size={20} />
                      </span>
                      <div>
                        <dt className="text-3xl font-extrabold text-slate-900 leading-tight">{value}</dt>
                        <dd className="text-sm font-medium text-slate-600">{label}</dd>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                <img
                  src="https://lovable-talent-launch.lovable.app/assets/hero-consulting-D-447mEu.jpg"
                  alt="Equipo de consultoría profesional colaborando en estrategias de desarrollo de talento"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Soluciones Integrales de Talento</h2>
            <p className="mt-4 text-lg text-slate-600">
              Nuestras metodologías probadas y enfoque personalizado ayudan a las organizaciones a construir equipos de alto rendimiento y desarrollar líderes excepcionales.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicios.map(({ title, desc, Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Transformando Organizaciones a Través de las Personas</h2>
            <p className="mt-5 text-lg text-slate-700">
              En Prisma Consulting & Talent Development, creemos que las grandes organizaciones se construyen con grandes personas. Nuestra misión es liberar el potencial dentro de tu equipo y crear una cultura de crecimiento continuo y excelencia.
            </p>
            <p className="mt-3 text-lg text-slate-700">
              Con experiencia combinada en psicología organizacional, desarrollo de liderazgo y estrategia empresarial, proporcionamos la experiencia y herramientas necesarias para impulsar una transformación sostenible.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "3+ años de experiencia en desarrollo de talento",
                "Certificados en metodologías de evaluación líderes",
                "Alianzas estratégicas con empresas Fortune 500",
                "Historial comprobado de resultados medibles",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white">
                    <Check size={16} />
                  </span>
                  <span className="text-slate-800 text-base">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={MEET_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700"
              >
                Agendar Cita por Google Meet <Video size={18} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-white font-semibold shadow hover:bg-blue-800"
              >
                Asociarse con Nosotros <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutMetrics.map(({ label, value, Icon }) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                  <div className="flex justify-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                      <Icon size={22} />
                    </span>
                  </div>
                  <div className="mt-3 text-4xl font-extrabold">{value}</div>
                  <div className="mt-1 text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">¿Listo para Transformar tu Equipo?</h3>
            <p className="mt-4 text-lg text-slate-600">
              Conversemos sobre cómo podemos ayudar a liberar el potencial de tu organización. Contáctanos para una consulta gratuita.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h4 className="text-2xl font-semibold">Ponte en Contacto</h4>
              <p className="mt-3 text-lg text-slate-700">
                ¿Listo para elevar tu estrategia de talento? Nos encantaría conocer tus desafíos y explorar cómo nuestra experiencia puede impulsar tu éxito.
              </p>

              <div className="mt-6 space-y-5 text-base">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-slate-200"><Mail size={18} /></span>
                  <div>
                    <div className="font-medium">Escríbenos</div>
                    <a className="text-blue-800 hover:underline" href="mailto:prisma.consulting.hmo@gmail.com">
                      prisma.consulting.hmo@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-slate-200"><Phone size={18} /></span>
                  <div>
                    <div className="font-medium">Llámanos</div>
                    <a className="hover:underline" href="tel:+15551234567">+1 (555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-slate-200"><MapPin size={18} /></span>
                  <div>
                    <div className="font-medium">Visítanos</div>
                    <span>Hermosillo, Sonora, México</span>
                  </div>
                </div>

                <a
                  href={MEET_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700"
                >
                  Agendar Cita por Google Meet <Video size={18} />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700">Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={onChange}
                      required
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/80 placeholder:text-slate-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none shadow-inner px-3 py-2"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="apellido" className="block text-sm font-medium text-slate-700">Apellido</label>
                    <input
                      id="apellido"
                      name="apellido"
                      value={form.apellido}
                      onChange={onChange}
                      required
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/80 placeholder:text-slate-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none shadow-inner px-3 py-2"
                      placeholder="Tu apellido"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Correo Electrónico</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/80 placeholder:text-slate-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none shadow-inner px-3 py-2"
                      placeholder="tucorreo@empresa.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="empresa" className="block text-sm font-medium text-slate-700">Empresa</label>
                    <input
                      id="empresa"
                      name="empresa"
                      value={form.empresa}
                      onChange={onChange}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/80 placeholder:text-slate-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none shadow-inner px-3 py-2"
                      placeholder="Nombre de la empresa (opcional)"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={onChange}
                    placeholder="Cuéntanos sobre tus necesidades de desarrollo de talento..."
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/80 placeholder:text-slate-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none shadow-inner px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-6 py-3 text-white text-base font-semibold shadow hover:opacity-95 w-full sm:w-auto disabled:opacity-60"
                >
                  {sending ? "Enviando..." : "Enviar Mensaje"} <Send size={18} />
                </button>
                {submitted && (
                  <p className="mt-3 text-sm text-emerald-700">
                    ¡Gracias! Tu mensaje ha sido recibido. Te contactaremos pronto.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b2a52] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-semibold">Prisma Consulting & Talent Development</h4>
              <p className="mt-3 text-sm/6 text-blue-100/90 max-w-2xl">
                Transformando organizaciones a través del desarrollo estratégico de talento.
                Construimos equipos de alto rendimiento y líderes excepcionales.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold tracking-wide uppercase text-blue-100/80">Contacto</div>
              <div className="text-sm text-blue-100/90">
                <a className="hover:underline block" href="mailto:prisma.consulting.hmo@gmail.com">
                  prisma.consulting.hmo@gmail.com
                </a>
                <a className="hover:underline block mt-1" href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
                <div className="mt-1">Hermosillo, Sonora, México</div>
              </div>
              <a
                href={MEET_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-green-700"
              >
                <Video size={16} />
                Agendar Meet
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-blue-100/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {year} Prisma Consulting & Talent Development. Todos los derechos reservados.</p>
            <p className="text-blue-100/70">Desarrollo de talento con enfoque humano.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
