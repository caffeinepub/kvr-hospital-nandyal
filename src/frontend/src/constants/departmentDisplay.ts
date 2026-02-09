/**
 * Single source of truth for department display strings and consultant information.
 * All components should import from this file to ensure consistency across the application.
 */

export const DEPARTMENT_DISPLAY = {
  generalMedicine: {
    name: 'General Medicine',
    description: 'Comprehensive primary care and treatment for common medical conditions.',
  },
  orthopedics: {
    name: 'Orthopedics',
    description: 'Specialized care for bone, joint, and musculoskeletal disorders.',
  },
  neurology: {
    name: 'Neurology',
    description: 'Advanced treatment for neurological disorders and brain conditions.',
  },
  surgery: {
    name: 'Surgery',
    description: 'State-of-the-art surgical procedures with experienced surgeons.',
  },
  ophthalmology: {
    name: 'Ophthalmology',
    description: 'Complete eye care services and vision treatment (additional offering).',
  },
  pediatrics: {
    name: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents (additional offering).',
  },
  pharmacy: {
    name: 'Pharmacy',
    description: 'In-house pharmacy with a wide range of medications (additional offering).',
  },
} as const;
