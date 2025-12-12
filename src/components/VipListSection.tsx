import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-laser/5 via-transparent to-transparent" />
      <div className="absolute inset-0 noise opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-gothic text-5xl md:text-7xl lg:text-8xl text-foreground mb-2">
            Lista
          </h2>
          <h2 className="font-gothic text-5xl md:text-7xl lg:text-8xl text-laser mb-8">
            VIP
          </h2>
          
          {/* Description */}
          <p className="font-mono text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed">
            Entérate antes que nadie de los eventos, consigue acceso exclusivo y gana entradas gratis.
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border focus:border-laser font-mono text-foreground placeholder:text-muted-foreground h-12"
            />
            <Button 
              type="submit" 
              variant="brutal" 
              size="lg"
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              {isLoading ? "ENVIANDO..." : "SUSCRIBIRME"}
            </Button>
          </form>
          
          {/* Privacy note */}
          <p className="font-mono text-xs text-muted-foreground mt-6">
            Sin spam. Solo brutalidad.
          </p>
        </div>
      </div>
    </section>
  );
}
