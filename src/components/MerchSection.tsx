import { Button } from "@/components/ui/button";
import merchTee from "@/assets/merch-tee.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "CORE TEE",
    price: "€35",
    image: merchTee,
  },
  {
    name: "INDUSTRIAL HOODIE",
    price: "€75",
    image: merchHoodie,
  },
];

export function MerchSection() {
  return (
    <section id="merch" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-2 uppercase tracking-wider">
            Hard
          </h2>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-laser uppercase tracking-wider">
            Wear
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative aspect-square bg-card border border-border hover:border-laser transition-all duration-500 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Product Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
                      {product.name}
                    </h3>
                    <span className="font-mono text-lg text-laser">{product.price}</span>
                  </div>
                  <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ADD TO CART
                  </Button>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-laser/5" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="brutal" size="xl">
            IR A LA TIENDA COMPLETA
          </Button>
        </div>
      </div>
    </section>
  );
}