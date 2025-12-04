import { Video, Clock, Award, Users, Headphones, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Contenido en Video HD",
    description: "Lecciones en alta calidad con explicaciones paso a paso",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    title: "Acceso de Por Vida",
    description: "Aprende a tu ritmo, sin límites de tiempo",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    title: "Certificación",
    description: "Obtén un certificado al completar cada curso",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Únete a una comunidad de estudiantes apasionados",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Headphones,
    title: "Soporte Dedicado",
    description: "Resuelve tus dudas directamente conmigo",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: TrendingUp,
    title: "Proyectos Reales",
    description: "Construye tu portafolio con proyectos profesionales",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            ¿Por qué elegir mis cursos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una experiencia de aprendizaje completa diseñada para tu éxito profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
