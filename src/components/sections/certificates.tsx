
import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

const certificates = [
  {
    title: 'AWS Course Completion Certificate',
    image: '/AWS Course Completion Certificate_page-0001.jpg',
  },
  {
    title: 'Graphic Design Masterclass',
    image: '/Graphic design masterclass.jpg',
  },
  {
    title: 'Complete Code Camp',
    image: '/complete code camp.jpg',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">
          <ScrollReveal baseOpacity={0.2} enableBlur={false} baseRotation={2}>
            Certificates
          </ScrollReveal>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <button className="w-full max-w-md bg-card/80 border-primary/20 shadow-lg rounded-xl p-4 flex flex-col items-center hover:scale-105 hover:shadow-accent/20 transition-transform duration-300 focus:outline-none">
                  <Image src={cert.image} alt={cert.title} width={400} height={300} className="rounded-lg border border-primary/30 mb-4 object-contain" />
                  <span className="text-lg font-semibold text-primary text-center">{cert.title}</span>
                  <span className="block mt-2 text-sm text-accent underline">View Full Certificate</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-card/95 border-primary/30 p-6 flex flex-col items-center">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary text-center">{cert.title}</DialogTitle>
                </DialogHeader>
                <Image src={cert.image} alt={cert.title} width={800} height={600} className="rounded-lg border border-primary/30 object-contain w-full max-w-2xl" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
