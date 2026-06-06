// ============================================================
//  Global Care Hub — Location & Service Data
//  Update this file to add/remove locations or services
// ============================================================

const SERVICES = {
  "cleaning-home": {
    id: "cleaning-home",
    name: "Home Cleaning",
    icon: "fa-broom",
    color: "#1A56DB",
    bg: "#e8f0fe",
    category: "home",
    desc: "Deep cleaning, regular maintenance, move-in/out cleaning for your home.",
    features: ["Deep cleaning", "Regular maintenance", "Move-in / move-out", "Post-construction", "Kitchen & bathroom", "Carpet & sofa cleaning"]
  },
  "electrical-home": {
    id: "electrical-home",
    name: "Home Electrical",
    icon: "fa-bolt",
    color: "#d97706",
    bg: "#fef9c3",
    category: "home",
    desc: "Wiring, fixtures, fault repairs and safety checks for your home.",
    features: ["Wiring & rewiring", "Light fixture install", "Fault detection", "Switchboard upgrade", "Safety inspection", "EV charger install"]
  },
  "plumbing": {
    id: "plumbing",
    name: "Plumbing",
    icon: "fa-wrench",
    color: "#0891b2",
    bg: "#e0f2fe",
    category: "home",
    desc: "Pipe repairs, leak fixing, drain cleaning and bathroom installation.",
    features: ["Leak detection & repair", "Drain unblocking", "Toilet & tap install", "Water heater install", "Pipe replacement", "Bathroom plumbing"]
  },
  "ac-repair": {
    id: "ac-repair",
    name: "AC Repair & Service",
    icon: "fa-wind",
    color: "#1A56DB",
    bg: "#dbeafe",
    category: "home",
    desc: "Installation, servicing, gas refill and full AC diagnostics.",
    features: ["AC installation", "Annual servicing", "Gas refilling", "Fault diagnostics", "All major brands", "Remote programming"]
  },
  "cctv": {
    id: "cctv",
    name: "CCTV Installation",
    icon: "fa-camera",
    color: "#dc2626",
    bg: "#fee2e2",
    category: "home",
    desc: "Camera installation, DVR setup and network cameras for home security.",
    features: ["HD & 4K cameras", "DVR / NVR setup", "Remote mobile view", "Wired & wireless", "Night vision", "Maintenance & upgrade"]
  },
  "cleaning-office": {
    id: "cleaning-office",
    name: "Office Cleaning",
    icon: "fa-building",
    color: "#1A56DB",
    bg: "#e8f0fe",
    category: "office",
    desc: "Daily, weekly or one-time deep cleans for commercial spaces.",
    features: ["Daily & weekly plans", "Reception & common areas", "Washroom sanitizing", "Floor mopping & vacuuming", "Window cleaning", "Waste disposal"]
  },
  "electrical-office": {
    id: "electrical-office",
    name: "Office Electrical",
    icon: "fa-plug",
    color: "#d97706",
    bg: "#fef9c3",
    category: "office",
    desc: "Commercial wiring, lighting systems and power distribution.",
    features: ["Commercial wiring", "Lighting systems", "Power distribution", "Emergency lighting", "UPS & backup power", "Safety inspections"]
  },
  "painting": {
    id: "painting",
    name: "Painting",
    icon: "fa-paint-roller",
    color: "#16a34a",
    bg: "#dcfce7",
    category: "office",
    desc: "Interior and exterior painting with premium quality finishes.",
    features: ["Interior wall painting", "Exterior painting", "Premium paints", "Surface preparation", "Wallpaper removal", "Minimal disruption"]
  }
};

const LOCATIONS = {
  "colombo": {
    id: "colombo",
    name: "Colombo",
    region: "Western Province",
    address: "42 Galle Road, Colombo 03",
    phone: "+94 11 234 5678",
    whatsapp: "+94 77 123 4567",
    email: "colombo@globalcarehub.lk",
    hours: "Mon – Sat: 8:00 AM – 8:00 PM",
    services: ["cleaning-home", "electrical-home", "plumbing", "ac-repair", "cctv", "cleaning-office", "electrical-office", "painting"]
  },
  "kandy": {
    id: "kandy",
    name: "Kandy",
    region: "Central Province",
    address: "15 Dalada Veediya, Kandy",
    phone: "+94 81 234 5678",
    whatsapp: "+94 77 234 5678",
    email: "kandy@globalcarehub.lk",
    hours: "Mon – Sat: 8:00 AM – 7:00 PM",
    services: ["cleaning-home", "electrical-home", "plumbing", "ac-repair", "cleaning-office"]
  },
  "galle": {
    id: "galle",
    name: "Galle",
    region: "Southern Province",
    address: "8 Church Street, Galle Fort",
    phone: "+94 91 234 5678",
    whatsapp: "+94 77 345 6789",
    email: "galle@globalcarehub.lk",
    hours: "Mon – Sat: 8:00 AM – 7:00 PM",
    services: ["cleaning-home", "plumbing", "ac-repair", "cleaning-office", "painting"]
  },
  "jaffna": {
    id: "jaffna",
    name: "Jaffna",
    region: "Northern Province",
    address: "22 Hospital Road, Jaffna",
    phone: "+94 21 234 5678",
    whatsapp: "+94 77 456 7890",
    email: "jaffna@globalcarehub.lk",
    hours: "Mon – Fri: 8:00 AM – 6:00 PM",
    services: ["cleaning-home", "electrical-home", "plumbing", "cleaning-office"]
  },
  "negombo": {
    id: "negombo",
    name: "Negombo",
    region: "Western Province",
    address: "37 Colombo Road, Negombo",
    phone: "+94 31 234 5678",
    whatsapp: "+94 77 567 8901",
    email: "negombo@globalcarehub.lk",
    hours: "Mon – Sat: 8:00 AM – 7:00 PM",
    services: ["cleaning-home", "electrical-home", "ac-repair", "cctv", "cleaning-office"]
  },
  "kurunegala": {
    id: "kurunegala",
    name: "Kurunegala",
    region: "North Western Province",
    address: "5 Rajapihilla Road, Kurunegala",
    phone: "+94 37 234 5678",
    whatsapp: "+94 77 678 9012",
    email: "kurunegala@globalcarehub.lk",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
    services: ["cleaning-home", "plumbing", "electrical-home", "cleaning-office", "painting"]
  }
};
