import { Phone, Mail, Clock, MapPin, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { HOSPITAL_CONTACT } from '@/constants/hospitalContact';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/kvr-hospital-hero.dim_1920x800.png)' }}
          aria-hidden="true"
        />
        <div className="container relative z-10 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img 
                src="/assets/generated/kvr-hospital-profile.dim_512x512.png" 
                alt="KVR Hospital Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                {HOSPITAL_CONTACT.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
                {HOSPITAL_CONTACT.tagline}
              </p>
              
              {/* Emergency Badge */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                <Badge variant="destructive" className="text-base px-4 py-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Emergency 24x7 Available
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button asChild size="lg" className="text-base">
                  <a href={HOSPITAL_CONTACT.phone1.tel} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call: {HOSPITAL_CONTACT.phone1.display}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <a href={HOSPITAL_CONTACT.phone2.tel} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {HOSPITAL_CONTACT.phone2.display}
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="text-base">
                  <a href={HOSPITAL_CONTACT.email.mailto} className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* About Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About KVR Hospital
              </h2>
              <Separator className="w-24 mx-auto mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Nandyal, KVR Hospital has been serving the community with dedication and excellence. 
                Our state-of-the-art facility is equipped with modern medical technology and staffed by experienced healthcare 
                professionals committed to providing the highest quality care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Heart className="w-6 h-6" />
                    Compassionate Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We treat every patient with dignity, respect, and personalized attention to ensure the best outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Clock className="w-6 h-6" />
                    24x7 Emergency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our emergency department is always ready to provide immediate medical attention whenever you need it.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MapPin className="w-6 h-6" />
                    Convenient Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily accessible location in {HOSPITAL_CONTACT.address.full}.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <SpecialtiesSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
