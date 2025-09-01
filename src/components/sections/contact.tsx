"use client";

import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import React from "react";

const ContactSection = () => {
	const { toast } = useToast();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name");
		const email = formData.get("email");
		const message = formData.get("message");
		// Redirect to WhatsApp with pre-filled message
		const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
		window.open(`https://wa.me/917620403834?text=${whatsappMessage}`, "_blank");
		form.reset();
		toast({ title: "Message sent!", description: "Thank you for reaching out." });
	};

			return (
				<section id="contact" className="container mx-auto px-4 animate-fade-in">
					<h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-12 uppercase">
						<ScrollReveal baseOpacity={0.2} enableBlur={false} baseRotation={2}>
							Contact Me
						</ScrollReveal>
					</h2>
					<div className="flex flex-col md:flex-row gap-12 justify-center items-stretch">
						{/* Contact Form Card - 60% width on desktop */}
						<div className="w-full md:w-3/5 flex items-center">
							<Card className="bg-card/80 border-primary/20 w-full">
								<CardContent className="p-6 flex flex-col gap-6 items-center w-full">
									<form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center w-full">
										<Input name="name" placeholder="Your Name" required className="bg-white/90 border-2 border-primary/20 text-lg py-4 px-6 rounded-xl focus:ring-2 focus:ring-accent w-full text-black placeholder:text-black" />
										<Input name="email" type="email" placeholder="Your Email" required className="bg-white/90 border-2 border-primary/20 text-lg py-4 px-6 rounded-xl focus:ring-2 focus:ring-accent w-full text-black placeholder:text-black" defaultValue="vipulmilindvadhe@gmail.com" />
										<Textarea name="message" placeholder="Your Message" rows={7} required className="bg-white/90 border-2 border-primary/20 text-lg py-4 px-6 rounded-xl focus:ring-2 focus:ring-accent w-full text-black placeholder:text-black" />
										<Button type="submit" className="w-full py-4 text-lg rounded-xl bg-gradient-to-r from-accent to-primary text-white font-bold shadow-lg hover:scale-105 transition-transform">Send via WhatsApp</Button>
									</form>
								</CardContent>
							</Card>
						</div>
						{/* Contact Info (right, no border) - 40% width on desktop */}
						<div className="w-full md:w-2/5 flex flex-col gap-8 items-start justify-center md:pl-8 h-full md:min-h-[340px] md:justify-center">
													<div className="flex flex-col gap-5 w-full">
																		<div className="flex items-center gap-3 group">
																			<Mail className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform" />
																			<a href="mailto:vipulmilindvadhe@gmail.com" className="text-lg md:text-xl lg:text-2xl text-primary font-bold break-all underline hover:text-accent transition-colors">vipulmilindvadhe@gmail.com</a>
																		</div>
																		<div className="flex items-center gap-3 group">
																			<Phone className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform" />
																			<a href="tel:7620403834" className="text-lg md:text-xl lg:text-2xl text-primary font-bold underline hover:text-accent transition-colors">7620403834</a>
																			<a href="https://wa.me/917620403834" target="_blank" rel="noopener noreferrer" className="ml-2 text-accent text-lg md:text-xl lg:text-2xl font-bold underline hover:text-primary transition-colors">WhatsApp</a>
																		</div>
														<div className="flex items-center gap-3 group">
															<Linkedin className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform" />
															<a href="https://www.linkedin.com/in/vipul-vadhe/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl lg:text-2xl text-accent underline font-bold hover:text-primary transition-colors">LinkedIn</a>
														</div>
														<div className="flex items-center gap-3 group">
															<Github className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform" />
															<a href="https://github.com/Vipul7620" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl lg:text-2xl text-accent underline font-bold hover:text-primary transition-colors">GitHub</a>
														</div>
													</div>
						</div>
					</div>
					</section>
				);
};

export default ContactSection;

