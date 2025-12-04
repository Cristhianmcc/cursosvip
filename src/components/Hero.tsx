import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToCourses = () => {
    document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-sm">
                🚀 Aprende las tecnologías más demandadas
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              Domina la Tecnología y{" "}
              <span className="text-yellow-300">Transforma tu Carrera</span>
            </h1>
            
            <p className="text-xl text-blue-100">
              Cursos prácticos y actualizados de desarrollo web, programación y tecnologías modernas. 
              Aprende a tu ritmo con proyectos reales y soporte personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 gap-2 text-lg px-8"
                onClick={scrollToCourses}
              >
                Ver Cursos Disponibles
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 gap-2 text-lg"
              >
                <Play className="h-5 w-5" />
                Ver Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl text-yellow-300">500+</div>
                <div className="text-blue-200 text-sm">Estudiantes</div>
              </div>
              <div>
                <div className="text-3xl text-yellow-300">4.9/5</div>
                <div className="text-blue-200 text-sm">Valoración</div>
              </div>
              <div>
                <div className="text-3xl text-yellow-300">10+</div>
                <div className="text-blue-200 text-sm">Cursos</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2NDg4OTg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estudiante programando"
                className="w-full h-auto"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <div className="text-gray-900">Certificado Incluido</div>
                    <div className="text-sm text-gray-600">Al completar el curso</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
