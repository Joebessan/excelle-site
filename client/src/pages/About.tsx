import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Heart, Users, BookOpen, Star } from "lucide-react";

const leaders = [
  "Pasteure Huguette ACACHA",
  "Pasteure Euphrasie AHO",
  "Pasteur Marius AHO",
  "Pasteure Éléonore ZOUNMENOU",
  "Pasteur Gwendal OSSE",
  "Pasteure CHAHOUNKA Odette",
  "Prophète Boris D'OLIVEIRA",
  "Prophète Cyriaque HOUNSINOU",
  "Prophétesse Joaline James",
  "Prophétesse Victoire OSSE",
  "Docteur Chahounka Séraphin",
  "Apôtre Elias AMOUSSA",
  "Pasteur Yanik HOUNGBO",
];

const values = [
  {
    icon: Heart,
    title: "Amour",
    description: "Nous croyons que l'amour du Christ relève ceux qui sont tombés et redonne un sens à ceux qui n'en voient plus.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Un lieu où l'on vient tel que l'on est, sans masque, sans jugement, pour reprendre souffle ensemble.",
  },
  {
    icon: BookOpen,
    title: "Foi",
    description: "Nous ne parlons pas seulement de foi, nous la vivons au quotidien, au contact des réalités humaines.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Servir les âmes avec amour et fidélité, en obéissant à l'appel de Dieu avec excellence.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#011C40] via-[#021F59] to-[#011C40]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Qui <span className="text-gradient-gold">sommes-nous</span> ?
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Excelle pour Christ, c'est avant tout une oeuvre de foi. Un lieu où l'on vient tel que l'on est, sans masque, sans jugement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Un espace de <span className="text-gradient-gold">prière</span> et d'<span className="text-gradient-gold">amour</span>
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection animation="fade-right">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Ici, nous croyons que <strong className="text-foreground">Dieu restaure les vies</strong>. Nous croyons que l'amour du Christ relève ceux qui sont tombés et redonne un sens à ceux qui n'en voient plus.
                  </p>
                  <p>
                    Un espace de prière, d'écoute et d'amour, où chacun peut reprendre souffle et retrouver sa valeur en Dieu.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Notre mission est claire : <strong className="text-foreground">conduire les coeurs vers Jésus-Christ</strong> et accompagner les personnes dans leur chemin de guérison et de transformation.
                  </p>
                  <p>
                    Nous allons à la rencontre de ceux que la société oublie souvent : personnes dépendantes, femmes abandonnées, jeunes en difficulté, enfants sans soutien. Nous leur offrons une présence, une parole, une main tendue, et surtout l'espérance.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#011C40]/30 to-background" />

        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ce qui nous <span className="text-gradient-gold">anime</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous ne parlons pas seulement de foi, nous la vivons au quotidien, au contact des réalités humaines.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 h-full text-center bg-card/80 backdrop-blur-sm">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <value.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-serif font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Notre <span className="text-gradient-gold">Histoire</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm text-primary font-semibold uppercase tracking-wider">5 Avril 2001</span>
                  <h3 className="text-2xl font-serif font-bold mt-2 mb-4">Naissance de l'oeuvre</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    L'oeuvre Excelle pour Christ International, autrefois connue sous le nom <em>Mount Horeb International Fondation</em>, a vu le jour le 5 avril 2001 à Guinkomey, à Cotonou, au Bénin.
                  </p>
                </motion.div>

                <div className="absolute left-0 top-1/2 w-4 h-4 -translate-x-[9px] rounded-full bg-accent" />
                
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm text-accent font-semibold uppercase tracking-wider">Fondatrice</span>
                  <h3 className="text-2xl font-serif font-bold mt-2 mb-4">Apôtre Janine AHO</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Elle est portée depuis ses débuts par la servante de Dieu, l'apôtre Janine AHO, avec un seul objectif : obéir à l'appel de Dieu et servir les âmes avec amour et fidélité.
                  </p>
                </motion.div>

                <div className="absolute left-0 bottom-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm text-primary font-semibold uppercase tracking-wider">Aujourd'hui</span>
                  <h3 className="text-2xl font-serif font-bold mt-2 mb-4">Une foi vivante</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aujourd'hui encore, Excelle pour Christ continue d'avancer avec foi, convaincue que chaque vie compte et que Dieu n'a pas dit son dernier mot.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#011C40] via-[#021F59] to-[#011C40]" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Collège des <span className="text-gradient-gold">Serviteurs</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Notre équipe de leaders spirituels dévoués au service de la communauté.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {leaders.map((leader, index) => (
              <AnimatedSection key={leader} animation="scale" delay={index * 0.05}>
                <motion.div
                  className="p-4 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  data-testid={`card-leader-${index}`}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-primary font-bold">
                    {leader.charAt(0)}
                  </div>
                  <p className="text-sm text-white/80 font-medium">{leader}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
