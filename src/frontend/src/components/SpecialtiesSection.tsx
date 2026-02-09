import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Stethoscope, 
  Bone, 
  Brain, 
  Activity,
  Eye,
  Baby,
  Pill
} from 'lucide-react';

const specialties = [
  {
    name: 'General Medicine',
    icon: Stethoscope,
    description: 'Comprehensive primary care and treatment for common medical conditions.'
  },
  {
    name: 'Cardiology',
    icon: Heart,
    description: 'Expert diagnosis and treatment of heart and cardiovascular conditions.'
  },
  {
    name: 'Orthopedics',
    icon: Bone,
    description: 'Specialized care for bone, joint, and musculoskeletal disorders.'
  },
  {
    name: 'Neurology',
    icon: Brain,
    description: 'Advanced treatment for neurological disorders and brain conditions.'
  },
  {
    name: 'Surgery',
    icon: Activity,
    description: 'State-of-the-art surgical procedures with experienced surgeons.'
  },
  {
    name: 'Ophthalmology',
    icon: Eye,
    description: 'Complete eye care services and vision treatment (additional offering).'
  },
  {
    name: 'Pediatrics',
    icon: Baby,
    description: 'Specialized healthcare for infants, children, and adolescents (additional offering).'
  },
  {
    name: 'Pharmacy',
    icon: Pill,
    description: 'In-house pharmacy with a wide range of medications (additional offering).'
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Specialties & Departments
          </h2>
          <Separator className="w-24 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of medical specialties to meet all your healthcare needs under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <Card key={specialty.name} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{specialty.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
