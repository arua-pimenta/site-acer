
import React, { useState } from 'react';
import { INSTITUTION_DATA } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('name'),
      reply_to: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.");
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center animate-in zoom-in-95 duration-500">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
        <h2 className="text-4xl font-display font-black text-acer-dark dark:text-white mb-4">Mensagem enviada com sucesso!</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">A ACER entrará em contato em breve.</p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-acer-blue text-white px-10 py-4 rounded-full font-bold shadow-lg"
        >
          Enviar Outra Mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-black text-acer-dark dark:text-white mb-6 tracking-tight">Fale Conosco</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium italic">Dúvidas, sugestões ou parcerias? Estamos à disposição.</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-display font-black text-acer-dark dark:text-white mb-8 tracking-tighter uppercase">Informações</h3>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-acer-blue dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-widest mb-1">Endereço Sede</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{INSTITUTION_DATA.address}</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-widest mb-1">E-mail Institucional</h4>
                    <a href={`mailto:${INSTITUTION_DATA.email}`} className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed hover:text-acer-blue transition-colors">{INSTITUTION_DATA.email}</a>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-acer-dark dark:text-white uppercase tracking-widest mb-1">Telefone / WhatsApp</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{INSTITUTION_DATA.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-acer-blue rounded-3xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <MapPin className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Transparência Total</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Toda doação recebida é registrada e revertida 100% para a manutenção de nossos projetos sociais.</p>
              <a
                href="#/transparencia"
                className="inline-block bg-white text-acer-blue px-6 py-3 rounded-xl font-black text-xs tracking-widest hover:bg-gray-100 transition relative z-10"
              >
                VER RELATÓRIOS
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Nome Completo</label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 border-0 rounded-2xl focus:ring-2 focus:ring-acer-blue dark:text-white transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">E-mail</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 border-0 rounded-2xl focus:ring-2 focus:ring-acer-blue dark:text-white transition"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Assunto</label>
                  <select
                    name="subject"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 border-0 rounded-2xl focus:ring-2 focus:ring-acer-blue dark:text-white transition"
                  >
                    <option>Quero ser um Apoiador</option>
                    <option>Quero ser Voluntário</option>
                    <option>Informações sobre Projetos</option>
                    <option>Transparência / Financeiro</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Mensagem</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Como a ACER pode te ajudar hoje?"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 border-0 rounded-2xl focus:ring-2 focus:ring-acer-blue dark:text-white transition"
                  ></textarea>
                </div>
                <button
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-acer-blue hover:bg-blue-700 text-white py-5 rounded-2xl font-black shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ENVIAR PARA A ACER
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
