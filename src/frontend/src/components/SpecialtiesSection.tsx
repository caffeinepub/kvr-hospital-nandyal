import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Stethoscope, 
  Bone, 
  Brain, 
  Activity,
  Eye,
  Baby,
  Pill
} from 'lucide-react';
import { DEPARTMENT_DISPLAY } from '@/constants/departmentDisplay';

const specialties = [
  {
    name: DEPARTMENT_DISPLAY.generalMedicine.name,
    icon: Stethoscope,
    description: DEPARTMENT_DISPLAY.generalMedicine.description
  },
  {
    name: DEPARTMENT_DISPLAY.orthopedics.name,
    icon: Bone,
    description: DEPARTMENT_DISPLAY.orthopedics.description
  },
  {
    name: DEPARTMENT_DISPLAY.neurology.name,
    icon: Brain,
    description: DEPARTMENT_DISPLAY.neurology.description
  },
  {
    name: DEPARTMENT_DISPLAY.surgery.name,
    icon: Activity,
    description: DEPARTMENT_DISPLAY.surgery.description
  },
  {
    name: DEPARTMENT_DISPLAY.ophthalmology.name,
    icon: Eye,
    description: DEPARTMENT_DISPLAY.ophthalmology.description
  },
  {
    name: DEPARTMENT_DISPLAY.pediatrics.name,
    icon: Baby,
    description: DEPARTMENT_DISPLAY.pediatrics.description
  },
  {
    name: DEPARTMENT_DISPLAY.pharmacy.name,
    icon: Pill,
    description: DEPARTMENT_DISPLAY.pharmacy.description
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
