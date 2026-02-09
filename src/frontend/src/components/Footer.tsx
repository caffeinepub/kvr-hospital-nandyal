import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { HOSPITAL_CONTACT } from '@/constants/hospitalContact';

export default function Footer() {
  return (
    <footer className="bg-accent/10 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Hospital Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{HOSPITAL_CONTACT.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {HOSPITAL_CONTACT.tagline}
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
            <div className="space-y-2 text-sm">
              <a 
                href={HOSPITAL_CONTACT.phone1.tel}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {HOSPITAL_CONTACT.phone1.display}
              </a>
              <a 
                href={HOSPITAL_CONTACT.phone2.tel}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {HOSPITAL_CONTACT.phone2.display}
              </a>
              <a 
                href={HOSPITAL_CONTACT.email.mailto}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {HOSPITAL_CONTACT.email.display}
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                {HOSPITAL_CONTACT.address.line1}<br />
                {HOSPITAL_CONTACT.address.line2}
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 {HOSPITAL_CONTACT.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
