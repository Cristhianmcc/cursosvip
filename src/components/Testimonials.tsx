import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Desarrollador Frontend",
    company: "Tech Solutions",
    avatar: "CM",
    rating: 5,
    text: "Increíble curso de React. En 3 meses pasé de no saber programar a conseguir mi primer trabajo como desarrollador. El contenido es súper actualizado y práctico.",
    course: "Desarrollo Web Full Stack"
  },
  {
    name: "Ana Rodríguez",
    role: "Data Analyst",
    company: "Finance Corp",
    avatar: "AR",
    rating: 5,
    text: "El curso de Python superó mis expectativas. Los proyectos son del mundo real y el instructor explica todo de manera muy clara. 100% recomendado.",
    course: "Python para Ciencia de Datos"
  },
  {
    name: "Miguel Torres",
    role: "Full Stack Developer",
    company: "Startup Digital",
    avatar: "MT",
    rating: 5,
    text: "Excelente inversión. Aprendí JavaScript avanzado y TypeScript de forma práctica. Ahora puedo trabajar en proyectos mucho más complejos.",
    course: "JavaScript Moderno Avanzado"
  },
  {
    name: "Laura Gómez",
    role: "Frontend Developer",
    company: "Creative Agency",
    avatar: "LG",
    rating: 5,
    text: "La mejor decisión que tomé para mi carrera. El soporte es excepcional, siempre resuelven mis dudas rápidamente. Los certificados me ayudaron en mi CV.",
    course: "Desarrollo Web Full Stack"
  },
  {
    name: "Roberto Silva",
    role: "Junior Developer",
    company: "Freelance",
    avatar: "RS",
    rating: 5,
    text: "Contenido de calidad premium a precio accesible. Los ejercicios prácticos te preparan para el trabajo real. Conseguí mi primer cliente gracias a lo aprendido.",
    course: "JavaScript Moderno Avanzado"
  },
  {
    name: "Patricia Vega",
    role: "Business Analyst",
    company: "Consulting Group",
    avatar: "PV",
    rating: 5,
    text: "Sin conocimientos previos en programación, ahora puedo hacer análisis de datos complejos. El curso está muy bien estructurado y es fácil de seguir.",
    course: "Python para Ciencia de Datos"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 500 personas han transformado su carrera con nuestros cursos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-16 w-16 text-blue-600" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Course Tag */}
                <div className="mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {testimonial.course}
                  </span>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Estudiantes Activos</div>
          </div>
          <div>
            <div className="text-3xl text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
          <div>
            <div className="text-3xl text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-600">Valoración Media</div>
          </div>
          <div>
            <div className="text-3xl text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
