import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  subject: z.string().trim().min(3, "Please add a subject.").max(120),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(1200),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const submit = (data: FormValues) => {
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
    window.location.href = `mailto:?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    setSent(true);
  };
  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="contact-form">
      <div className="form-grid">
        <label>Name<input {...register("name")} placeholder="Your name" aria-invalid={!!errors.name} /><small>{errors.name?.message}</small></label>
        <label>Email<input {...register("email")} type="email" placeholder="you@example.com" aria-invalid={!!errors.email} /><small>{errors.email?.message}</small></label>
      </div>
      <label>Subject<input {...register("subject")} placeholder="Internship, collaboration, or opportunity" aria-invalid={!!errors.subject} /><small>{errors.subject?.message}</small></label>
      <label>Message<textarea {...register("message")} rows={5} placeholder="Tell me about the opportunity or project..." aria-invalid={!!errors.message} /><small>{errors.message?.message}</small></label>
      <div className="form-actions">
        <Button type="submit">Let’s Work Together <ArrowUpRight size={16} /></Button>
        {sent && <span className="form-success"><CheckCircle2 size={15} /> Your email app is ready.</span>}
      </div>
    </form>
  );
}
