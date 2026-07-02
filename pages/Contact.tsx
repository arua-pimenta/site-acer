import React, { useState, useEffect } from 'react';
import { INSTITUTION_DATA } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, ShieldAlert } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [honeypot, setHoneypot] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaChallenge, setCaptchaChallenge] = useState({ numA: 0, numB: 0 });

  // Generate simple mathematical challenge
  const generateCaptcha = () => {
    const numA = Math.floor(Math.random() * 9) + 2; // 2 to 10
    const numB = Math.floor(Math.random() * 8) + 2; // 2 to 9
    setCaptchaChallenge({ numA, numB });
    setCaptchaAnswer('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Honeypot check (invisible bot trap)
    if (honeypot !== '') {
      console.warn('Spam bot detected and blocked via Honeypot.');
      setStatus('success'); // Fake success so bot thinks it went through
      return;
    }

    // 2. Math Captcha verification
    const expectedResult = captchaChallenge.numA + captchaChallenge.numB;
    if (parseInt(captchaAnswer.trim(), 10) !== expectedResult) {
      alert('Resposta de segurança incorreta. Por favor, resolva a soma novamente.');
      generateCaptcha();
      return;
    }

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
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'dummy_service',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'dummy_template',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'dummy_key'
      );

      setStatus('success');
      
      // Celebrate with confetti
      confetti({
        particleCount: 150,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#175298', '#FFD700', '#FFFFFF', '#00ff88']
      });

      form.reset();
      generateCaptcha();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Ocorreu um erro ao enviar. Por favor, tente novamente ou nos envie uma mensagem direta pelo WhatsApp.");
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center animate-in zoom-in-95 duration-500 bg-white dark:bg-gray-900 transition-colors duration-300">
        <CheckCircle className="w-24 h-24 text-emerald-500 dark:text-emerald-400 mx-auto mb-8 animate-bounce" />
        <h2 className="text-4xl font-display font-black text-acer-dark dark:text-white mb-4">Mensagem enviada com sucesso!</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 font-medium">A equipe da ACER entrará em contato em breve.</p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-acer-blue hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-black text-sm tracking-widest transition-all shadow-lg hover:shadow-blue-500/20"
        >
          ENVIAR OUTRA MENSAGEM
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
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
                    <a href={`mailto:${INSTITUTION_DATA.email}`} className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed hover:text-acer-blue dark:hover:text-blue-400 transition-colors">{INSTITUTION_DATA.email}</a>
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
              <p className="text-blue-100 text-sm mb-6 relative z-10 font-medium">Toda doação recebida é registrada e revertida 100% para a manutenção de nossos projetos sociais.</p>
              <Link
                to="/transparencia"
                className="inline-block bg-white text-acer-blue px-6 py-3 rounded-xl font-black text-xs tracking-widest hover:bg-gray-100 transition relative z-10"
              >
                VER RELATÓRIOS
              </Link>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot Trap - Invisible to humans */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honey_pot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

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

                {/* Math Captcha Validation */}
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black text-acer-blue dark:text-blue-400 uppercase tracking-widest">
                    <ShieldAlert className="w-4 h-4" />
                    Validação de Segurança
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
                      Resolva a soma para provar que é humano: <span className="text-acer-blue dark:text-yellow-400 font-black text-lg ml-1">{captchaChallenge.numA} + {captchaChallenge.numB}</span>
                    </p>
                    <input
                      type="number"
                      required
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="?"
                      className="w-24 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-acer-blue dark:text-white text-center font-black"
                    />
                  </div>
                </div>

                <button
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-acer-blue hover:bg-blue-700 dark:bg-yellow-400 dark:text-acer-dark dark:hover:bg-yellow-500 text-white py-5 rounded-2xl font-black shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70"
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
