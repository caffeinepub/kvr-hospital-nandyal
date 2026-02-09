/**
 * Single source of truth for KVR Hospital contact information.
 * All components should import from this file to ensure consistency.
 */

export const HOSPITAL_CONTACT = {
  // Phone numbers
  phone1: {
    display: '08514 220234',
    tel: 'tel:08514220234',
  },
  phone2: {
    display: '7207534210',
    tel: 'tel:7207534210',
  },
  
  // Email
  email: {
    display: 'kvssreddy3105@gmail.com',
    mailto: 'mailto:kvssreddy3105@gmail.com',
  },
  
  // Address
  address: {
    line1: 'Sanjeeva Nagar, behind Tourist Hotel',
    line2: 'Nandyal, Andhra Pradesh',
    full: 'Sanjeeva Nagar, behind Tourist Hotel, Nandyal, Andhra Pradesh',
  },
  
  // Hospital name
  name: 'KVR Hospital, Nandyal',
  
  // Tagline
  tagline: 'Providing comprehensive healthcare services with compassion and excellence. Your health is our priority.',
} as const;
