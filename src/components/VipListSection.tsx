import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function VipListSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Error",
        description: "Por favor, introduce un email válido",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast({
        title: "¡Bienvenido a la Lista VIP!",
        description: "Pronto recibirás noticias exclusivas",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Noise overlay - same as other sections */}
      <div className="absolute inset-0 noise opacity-30" />
      
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Title Block */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-laser fill-laser" />
              <span className="font-mono text-sm text-laser tracking-[0.3em] uppercase">Acceso Exclusivo</span>
              <Star className="w-5 h-5 text-laser fill-laser" />
            </div>
            
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground uppercase tracking-wider leading-none">
              LISTA
            </h2>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-laser uppercase tracking-wider leading-none relative">
              VIP
              <span className="absolute inset-0 text-laser blur-lg opacity-50">VIP</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="font-mono text-muted-foreground text-center text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Entérate antes que nadie de los eventos, consigue <span className="text-laser">acceso exclusivo</span> y gana entradas gratis.
          </p>
          
          {/* Form Container */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-laser/20 via-laser/10 to-laser/20 rounded-sm blur-xl opacity-50" />
            
            {/* Form */}
            <form 
              onSubmit={handleSubmit} 
              className="relative flex flex-col sm:flex-row gap-4 p-6 bg-secondary/20 border border-laser/30 backdrop-blur-sm"
            >
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border/50 focus:border-laser font-mono text-foreground placeholder:text-muted-foreground h-14 text-lg"
              />
              <Button 
                type="submit" 
                variant="brutal" 
                size="lg"
                disabled={isLoading}
                className="h-14 px-8 text-lg whitespace-nowrap"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-pulse">ENVIANDO</span>
                    <span className="animate-bounce">...</span>
                  </span>
                ) : (
                  "ÚNETE AHORA"
                )}
              </Button>
            </form>
          </div>
          
          {/* Privacy note */}
          <p className="font-mono text-xs text-muted-foreground mt-8 text-center tracking-wider">
            [ SIN SPAM. SOLO BRUTALIDAD. ]
          </p>
          
          {/* Stats/Social Proof */}
          <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-foreground">+7K</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Members</div>
            </div>
            <div className="w-px bg-border/30" />
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-laser">VIP</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Access</div>
            </div>
            <div className="w-px bg-border/30" />
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-foreground">24H</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Early</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
