import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Clock, BarChart, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const courses = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    description: "Aprende HTML, CSS, JavaScript, React y Node.js desde cero hasta nivel avanzado",
    image: "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2NDg4OTg1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$149",
    originalPrice: "$299",
    duration: "40 horas",
    level: "Principiante a Avanzado",
    rating: 4.9,
    students: 245,
    highlights: [
      "Proyectos reales del mundo laboral",
      "Certificado de finalización",
      "Acceso de por vida",
      "Soporte directo"
    ]
  },
  {
    id: 2,
    title: "Python para Ciencia de Datos",
    description: "Domina Python, Pandas, NumPy y visualización de datos para análisis profesional",
    image: "https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzY0ODU2NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$129",
    originalPrice: "$249",
    duration: "35 horas",
    level: "Intermedio",
    rating: 5.0,
    students: 189,
    highlights: [
      "Análisis de datos reales",
      "Machine Learning básico",
      "Portafolio de proyectos",
      "Grupo de WhatsApp exclusivo"
    ]
  },
  {
    id: 3,
    title: "JavaScript Moderno Avanzado",
    description: "ES6+, Async/Await, APIs, TypeScript y las mejores prácticas del desarrollo moderno",
    image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDg4NTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$99",
    originalPrice: "$199",
    duration: "25 horas",
    level: "Avanzado",
    rating: 4.8,
    students: 156,
    highlights: [
      "Patrones de diseño",
      "Testing y debugging",
      "Optimización de código",
      "Casos de uso reales"
    ]
  }
];

export function Courses() {
  const handleWhatsAppContact = () => {
    // Cambia este número por tu número de WhatsApp (formato internacional sin + ni espacios)
    const phoneNumber = "1234567890";
    const message = encodeURIComponent("¡Hola! Me interesa información sobre tus cursos de tecnología.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="cursos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            Oferta Limitada 🔥
          </Badge>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Cursos Disponibles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el curso perfecto para impulsar tu carrera en tecnología
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  50% OFF
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{course.students} estudiantes</span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    {course.level}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl text-gray-900">{course.price}</span>
                    <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 gap-2"
                    onClick={handleWhatsAppContact}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Consultar por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encuentras lo que buscas? Contáctame para cursos personalizados
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleWhatsAppContact}
          >
            Solicitar Información
          </Button>
        </div>
      </div>
    </section>
  );
}
