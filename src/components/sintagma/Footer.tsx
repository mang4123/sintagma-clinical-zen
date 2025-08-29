import { Heart, Shield, Zap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">SINTAGMA</h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A arte de dar forma e sentido às suas consultas. Desenvolvido por profissionais 
              de saúde mental para profissionais de saúde mental, transformando cada sessão 
              em um prontuário impecável para uma prática de excelência.
            </p>
            
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">LGPD Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 rounded-lg px-4 py-2">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold">IA Curada</span>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contato@sintagma.com.br" className="text-gray-300 hover:text-white transition-colors">
                  contato@sintagma.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#como-funciona" className="block text-gray-300 hover:text-white transition-colors">
                Como Funciona
              </a>
              <a href="#seguranca" className="block text-gray-300 hover:text-white transition-colors">
                Segurança
              </a>
              <a href="#precos" className="block text-gray-300 hover:text-white transition-colors">
                Preços
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="/politica-privacidade" className="block text-gray-300 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="block text-gray-300 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-300">
              © 2024 SINTAGMA. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-300">Desenvolvido com</span>
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-gray-300">por profissionais para profissionais</span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-primary/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-primary font-semibold text-lg mb-2">
                "Sua confidencialidade não é um detalhe. É a base do SINTAGMA."
              </p>
              <p className="text-gray-300">
                Tecnologia de ponta a serviço da ética e da excelência clínica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};