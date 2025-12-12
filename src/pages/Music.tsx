import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Music as MusicIcon, Headphones, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Playlist {
  title: string;
  description: string;
  embedUrl: string;
  type: "spotify" | "soundcloud";
}

const officialPlaylists: Playlist[] = [
  {
    title: "HARDBRUTALITY ESSENTIALS",
    description: "La selección definitiva de hard techno para destruir la pista.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX6J5NfMJS675",
    type: "spotify",
  },
  {
    title: "WARM UP SESSIONS",
    description: "Techno oscuro para calentar antes de la batalla.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j",
    type: "spotify",
  },
];

const residentSets: { name: string; title: string; url: string }[] = [
  {
    name: "M.I.XX.I",
    title: "Live @ Fabrik Madrid",
    url: "https://soundcloud.com",
  },
  {
    name: "RODS",
    title: "HardBrutality Podcast #001",
    url: "https://soundcloud.com",
  },
  {
    name: "SAME",
    title: "Dark Sessions Vol. 3",
    url: "https://soundcloud.com",
  },
  {
    name: "KØNI",
    title: "Acid Warehouse Mix",
    url: "https://soundcloud.com",
  },
];

const Music = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 uppercase tracking-wider">
              Sounds of
            </h1>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-laser mb-8 uppercase tracking-wider">
              Brutality
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              Explora nuestra selección musical. Playlists oficiales y sets exclusivos de nuestros residentes.
            </p>
          </div>
        </div>
      </section>

      {/* Official Playlists */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <MusicIcon className="text-laser" size={32} />
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider">
              Official Playlists
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {officialPlaylists.map((playlist, index) => (
              <div
                key={index}
                className="group border border-border hover:border-laser transition-colors bg-card p-6"
              >
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 tracking-wider">
                  {playlist.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  {playlist.description}
                </p>
                
                {/* Spotify Embed Placeholder */}
                <div className="aspect-[2/1] bg-secondary/50 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MusicIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="font-mono text-xs text-muted-foreground">
                      Spotify Embed
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residents Sets */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Headphones className="text-laser" size={32} />
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider">
              Residents Sets
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {residentSets.map((set, index) => (
              <a
                key={index}
                href={set.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 border border-border hover:border-laser bg-card transition-all hover-lift"
              >
                {/* Play Button */}
                <div className="w-16 h-16 flex-shrink-0 border border-border group-hover:border-laser group-hover:bg-laser/10 flex items-center justify-center transition-all">
                  <Play className="w-6 h-6 text-muted-foreground group-hover:text-laser transition-colors ml-1" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-xs text-laser">{set.name}</span>
                  <h3 className="font-display text-lg md:text-xl text-foreground truncate tracking-wider">
                    {set.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="font-mono text-muted-foreground group-hover:text-laser transition-colors">
                  →
                </div>
              </a>
            ))}
          </div>

          {/* SoundCloud CTA */}
          <div className="text-center mt-12">
            <Button variant="brutal" size="lg" className="gap-2">
              <Headphones size={18} />
              VER TODOS EN SOUNDCLOUD
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Music;