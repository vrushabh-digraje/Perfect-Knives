export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarText: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Rajesh Sharma",
    role: "Purchase Manager",
    quote: "We were looking for dependable industrial cutting blades for our production requirements. The product quality and attention to specifications made a positive impression on us. Overall, a good experience.",
    avatarText: "RS"
  },
  {
    id: "test-2",
    name: "Amit Patel",
    role: "Production Manager",
    quote: "Precision is essential in our manufacturing process, and the cutting tools we use play an important role. Perfect Knives offers products designed around industrial requirements and consistent performance.",
    avatarText: "AP"
  },
  {
    id: "test-3",
    name: "Sandeep Verma",
    role: "Operations Head",
    quote: "We needed cutting blades with specific dimensions for our application. The requirements were discussed in detail, and the team helped us understand the available options. Their technical approach was appreciated.",
    avatarText: "SV"
  }
];

export const clientLogos = [
  { id: "client-1", name: "Client 1", logo: "/images/client-1.png" },
  { id: "client-2", name: "Client 2", logo: "/images/client-2.png" },
  { id: "client-3", name: "Client 3", logo: "/images/client-3.png" },
  { id: "client-4", name: "Client 4", logo: "/images/client-4.png" },
  { id: "client-5", name: "Client 5", logo: "/images/client-5.png" },
  { id: "client-6", name: "Client 6", logo: "/images/client-6.png" }
];
