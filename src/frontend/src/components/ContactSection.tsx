import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HOSPITAL_CONTACT } from '@/constants/hospitalContact';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <Separator className="w-24 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Get in touch with us for appointments, inquiries, or emergency services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    {HOSPITAL_CONTACT.address.line1}<br />
                    {HOSPITAL_CONTACT.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Numbers</h3>
                  <div className="space-y-1">
                    <a 
                      href={HOSPITAL_CONTACT.phone1.tel}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {HOSPITAL_CONTACT.phone1.display}
                    </a>
                    <a 
                      href={HOSPITAL_CONTACT.phone2.tel}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {HOSPITAL_CONTACT.phone2.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href={HOSPITAL_CONTACT.email.mailto}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {HOSPITAL_CONTACT.email.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Emergency Services</h3>
                  <p className="text-muted-foreground">
                    Available 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Reach */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">How to Reach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                KVR Hospital is conveniently located in Sanjeeva Nagar, directly behind the Tourist Hotel in Nandyal, 
                Andhra Pradesh. Our central location makes us easily accessible from all parts of the city.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">By Road</h4>
                  <p className="text-sm text-muted-foreground">
                    The hospital is well-connected by road and accessible via local transportation. 
                    Look for the Tourist Hotel landmark in Sanjeeva Nagar.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <p className="text-sm text-muted-foreground">
                    Ample parking space available for patients and visitors.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">For Emergencies</h4>
                  <p className="text-sm text-muted-foreground">
                    Call us immediately at {HOSPITAL_CONTACT.phone1.display} or {HOSPITAL_CONTACT.phone2.display} for emergency assistance. 
                    Our team is ready to help 24x7.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full" size="lg">
                  <a href={HOSPITAL_CONTACT.phone1.tel} className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now for Appointment
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
