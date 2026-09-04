# iGoodonto — Instituto Guimarães de Odontologia

Plataforma institucional e de conversão de alto padrão (High-End Healthcare Design) desenvolvida para o **Instituto Guimarães de Odontologia (iGoodonto)**, clínica odontológica com mais de 30 anos de tradição em Uberlândia - MG.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 15+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (Mobile-First, Glassmorphism, Paleta Customizada da Marca)
- **Ícones:** Lucide React
- **Tipografia:** Google Font *Plus Jakarta Sans* via `next/font/google`
- **Componentização:** Arquitetura limpa, desacoplada e 100% responsiva

---

## 📂 Estrutura do Projeto

```
Instiuto_Guimaraes_Odontologia/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── logo/            # Logotipos oficiais (SVG / PNG)
│       ├── hero/            # Imagens do banner principal
│       ├── doctors/         # Fotos dos dentistas especialistas
│       ├── clinic/          # Fotos da clínica, consultórios e equipamentos
│       ├── treatments/      # Imagens das especialidades odontológicas
│       └── testimonials/    # Fotos dos pacientes (prova social)
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system, tokens e resets
│   │   ├── layout.tsx       # Root layout com SEO, OpenGraph e fontes
│   │   └── page.tsx         # Página One-Page de alta conversão
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Barra fixa com blur, menu mobile e CTA
│   │   │   ├── Footer.tsx           # Rodapé com mapa, horários e redes
│   │   │   └── FloatingWhatsApp.tsx # Widget flutuante com mensagens rápidas
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Headline de impacto, badges e duplo CTA
│   │   │   ├── AboutSpace.tsx       # Infraestrutura e galeria do consultório
│   │   │   ├── Professionals.tsx    # Corpo clínico (Dra. Ana Lúcia & Dr. Fernando)
│   │   │   ├── Services.tsx         # Tratamentos com modal de detalhes
│   │   │   ├── WhyChooseUs.tsx      # Diferenciais (30+ anos, tecnologia 3D)
│   │   │   ├── Testimonials.tsx     # Avaliações Google Reviews 5.0 estrelas
│   │   │   └── CtaBanner.tsx        # Seção de fechamento e agendamento
│   │   └── ui/
│   │       └── ServiceModal.tsx     # Modal dinâmico de procedimento
│   ├── data/
│   │   ├── clinicInfo.ts    # Telefones, WhatsApp, horários e endereço no Santa Mônica
│   │   ├── services.ts      # Dados detalhados de tratamentos
│   │   ├── team.ts          # Dados dos dentistas e CROs
│   │   ├── reviews.ts       # Avaliações reais de pacientes
│   │   └── gallery.ts       # Fotos e destaques da infraestrutura
│   └── lib/
│       └── utils.ts         # Helpers (cn, formatação de WhatsApp URL)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🏃 Como Rodar o Projeto

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Gerar build de produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📸 Como Subir Novas Imagens

Basta adicionar as fotos nas respectivas subpastas dentro de `public/images/`:
- `public/images/doctors/` para fotos dos profissionais;
- `public/images/clinic/` para fotos dos consultórios e recepção;
- `public/images/treatments/` para fotos dos tratamentos.

---

## 📍 Informações Institucionais da Clínica

- **Endereço:** Rua Izaura Augusta Pereira, 510 - Bairro Santa Mônica, Uberlândia - MG
- **Telefone:** (34) 3236-7993
- **WhatsApp:** (34) 99180-7667
- **Corpo Clínico:**
  - Dra. Ana Lúcia O. Guimarães (CRO-MG 15.381)
  - Dr. Fernando César Guimarães (CRO-MG 16.129)
