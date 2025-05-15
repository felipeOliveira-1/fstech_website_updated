# FStech UI Design System

Este documento serve como referência para o sistema de design da FStech, garantindo consistência em todos os componentes visuais do site. Ele deve ser consultado pela equipe de design e desenvolvimento para manter a identidade visual consistente.

## Índice

1. [Cores](#cores)
2. [Tipografia](#tipografia)
3. [Componentes](#componentes)
4. [Animações](#animações)
5. [Ícones e Imagens](#ícones-e-imagens)
6. [Espaçamento e Layout](#espaçamento-e-layout)
7. [Responsividade](#responsividade)

## Cores

### Paleta Principal

- **Fundo Escuro:**
  - Background Start: `rgb(13, 13, 13)` / `#0D0D0D`
  - Background End: `rgb(0, 0, 0)` / `#000000`
  - Dark Gradient: Gradient linear de `#0D0D0D` para `#000000`

- **Texto:**
  - Primário: `rgb(255, 255, 255)` / `#FFFFFF`

- **Acento Principal:**
  - Azul Primário: `rgb(20, 107, 255)` / `#146BFF`
  - Azul Secundário: `rgb(0, 204, 255)` / `#00CCFF`
  - Gradient: `linear-gradient(90deg, #146BFF, #00CCFF)`

### Tons Escuros

| Nome         | Hex       | RGB             | Descrição                       |
|--------------|-----------|-----------------|----------------------------------|
| dark-100     | `#d1d1d1` | `209, 209, 209` | Texto secundário                 |
| dark-200     | `#a3a3a3` | `163, 163, 163` | Texto terciário                  |
| dark-300     | `#757575` | `117, 117, 117` | Bordas claras                    |
| dark-400     | `#474747` | `71, 71, 71`    | Bordas médias                    |
| dark-500     | `#191919` | `25, 25, 25`    | Fundo de cards                   |
| dark-600     | `#141414` | `20, 20, 20`    | Fundo de elementos secundários   |
| dark-700     | `#0f0f0f` | `15, 15, 15`    | Fundo de elementos primários     |
| dark-800     | `#0a0a0a` | `10, 10, 10`    | Fundo escuro                     |
| dark-900     | `#050505` | `5, 5, 5`       | Fundo muito escuro               |

### Tons de Acento (Azul)

| Nome         | Hex       | RGB             | Descrição                       |
|--------------|-----------|-----------------|----------------------------------|
| accent-100   | `#d0e1ff` | `208, 225, 255` | Fundo azul muito claro          |
| accent-200   | `#a1c4ff` | `161, 196, 255` | Fundo azul claro                |
| accent-300   | `#72a6ff` | `114, 166, 255` | Azul claro                      |
| accent-400   | `#4389ff` | `67, 137, 255`  | Azul médio                      |
| accent-500   | `#146bff` | `20, 107, 255`  | Azul primário                   |
| accent-600   | `#1056cc` | `16, 86, 204`   | Azul escuro                     |
| accent-700   | `#0c4099` | `12, 64, 153`   | Azul mais escuro                |
| accent-800   | `#082b66` | `8, 43, 102`    | Azul muito escuro               |
| accent-900   | `#041533` | `4, 21, 51`     | Azul quase preto                |

### Cores de Estado

- **Sucesso:** `#00cc88` / `rgb(0, 204, 136)`
- **Alerta:** `#ffaa00` / `rgb(255, 170, 0)`
- **Erro:** `#ff4444` / `rgb(255, 68, 68)`

## Tipografia

### Família de Fontes

A hierarquia de fontes usada é a system font stack do Tailwind:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

### Escalas de Tamanho

| Nome      | Tamanho   | Uso                                   |
|-----------|-----------|---------------------------------------|
| text-xs   | 0.75rem   | Texto muito pequeno, rodapé, notas    |
| text-sm   | 0.875rem  | Texto pequeno, legendas               |
| text-base | 1rem      | Texto regular, parágrafos             |
| text-lg   | 1.125rem  | Texto grande, destaques               |
| text-xl   | 1.25rem   | Subtítulos pequenos                   |
| text-2xl  | 1.5rem    | Subtítulos                            |
| text-3xl  | 1.875rem  | Títulos de seção                      |
| text-4xl  | 2.25rem   | Títulos grandes                       |
| text-5xl  | 3rem      | Títulos de página                     |
| text-6xl  | 3.75rem   | Títulos do hero                       |

### Estilos de Texto

- **Gradiente de Texto:**
  ```css
  .tech-text-gradient {
    background: linear-gradient(90deg, #146bff, #00ccff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ```

## Componentes

### Cards 

```css
.tech-card {
  background: rgba(15, 15, 15, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -5px rgba(20, 107, 255, 0.3);
}
```

### Bordas com Gradiente

```css
.tech-border-gradient {
  position: relative;
  border-radius: 0.5rem;
  z-index: 0;
}

.tech-border-gradient::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: -1px;
  border-radius: 0.6rem;
  background: linear-gradient(45deg, #146bff, transparent, #00ccff);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

### Botões

```css
.tech-button {
  background: linear-gradient(135deg, rgba(20, 107, 255, 0.9), rgba(20, 107, 255, 0.7));
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(20, 107, 255, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.tech-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 120, 255, 1), rgba(20, 107, 255, 0.8));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-button:hover::before {
  opacity: 1;
}
```

### Links de Navegação

```css
.nav-link {
  position: relative;
  color: #f0f0f0;
  padding-bottom: 4px;
  transition: color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(20, 107, 255, 0.7), rgba(20, 107, 255, 1), rgba(65, 130, 255, 0.8));
  transition: width 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
  color: #fff;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: white;
  font-weight: 600;
}

.nav-link.active::after {
  width: 100%;
  opacity: 1;
  background: linear-gradient(90deg, rgba(20, 107, 255, 0.8), rgba(20, 107, 255, 1), rgba(20, 107, 255, 0.8));
  height: 2.5px;
}
```

### Ícones Circulares

```css
.tech-circle {
  border-radius: 50%;
  background: rgba(20, 107, 255, 0.05);
  border: 1px solid rgba(20, 107, 255, 0.1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tech-circle:hover {
  background: rgba(20, 107, 255, 0.1);
  border: 1px solid rgba(20, 107, 255, 0.2);
  transform: scale(1.1);
}
```

### Separadores

```css
.tech-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(20, 107, 255, 0.5), transparent);
}
```

## Animações

### Flutuação

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
```

### Efeito de Brilho Pulsante

```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(20, 107, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(20, 107, 255, 0.6);
  }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

### Carrossel de Clientes

```css
.carousel-track {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.carousel-track::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.carousel-item {
  transition: transform 0.3s ease;
}
```

### Fade e Slide 

| Nome          | Descrição                                 |
|---------------|-------------------------------------------|
| fade-in       | Fade in com 0.5s ease-in-out              |
| slide-up      | Slide para cima com 0.5s ease-out         |
| slide-down    | Slide para baixo com 0.5s ease-out        |
| slide-left    | Slide para esquerda com 0.5s ease-out     |
| slide-right   | Slide para direita com 0.5s ease-out      |
| bounce-slow   | Animação de bounce suave com 3s           |
| pulse-slow    | Pulsação lenta com 3s                     |
| float         | Flutuação com 3s ease-in-out              |
| glow          | Brilho que alterna com 2s ease-in-out     |

## Ícones e Imagens

### Estilo de Ícones de Serviço

```css
.feature-card .relative.h-24 {
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.feature-card:hover img.w-20 {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.feature-card img.w-20 {
  transition: transform 0.4s ease, filter 0.4s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.feature-card:hover .feature-icon {
  background: linear-gradient(45deg, rgba(20, 107, 255, 0.2), rgba(0, 204, 255, 0.2));
  transform: scale(1.1);
}
```

### Padrões de Fundo

```css
.tech-dot-pattern {
  background-image: radial-gradient(rgba(20, 107, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.tech-grid-bg {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23146bff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

### Efeito de Brilho Hero

```css
.hero-glow {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 107, 255, 0.25) 0%, rgba(20, 107, 255, 0) 70%);
  filter: blur(50px);
  pointer-events: none;
  opacity: 0.8;
  animation: float 15s infinite ease-in-out alternate;
}
```

## Espaçamento e Layout

### Sistema de Grid

O sistema usa o grid padrão do Tailwind CSS com 12 colunas para layout responsivo.

### Containers

- **Container Padrão:** largura máxima de 1280px, com padding horizontal responsivo.
- **Container Estreito:** largura máxima de 1024px, para conteúdo mais focado.

### Espaçamento Vertical

- **Entre Seções:** 6rem (96px) em desktop, 4rem (64px) em mobile
- **Entre Componentes:** 2rem (32px) em desktop, 1.5rem (24px) em mobile
- **Dentro de Componentes:** 1rem (16px) a 1.5rem (24px)

## Responsividade

### Breakpoints

| Nome      | Largura   | Descrição                               |
|-----------|-----------|------------------------------------------|
| sm        | 640px     | Dispositivos móveis pequenos             |
| md        | 768px     | Tablets e dispositivos móveis grandes    |
| lg        | 1024px    | Laptops e desktops pequenos              |
| xl        | 1280px    | Desktops médios                          |
| 2xl       | 1536px    | Telas grandes                            |

### Adaptações de Layout

- **Navegação:** Muda para menu hambúrguer em telas < 768px
- **Grid de Serviços:** 3 colunas em desktop, 2 em tablet, 1 em mobile
- **Tamanho de Texto:** Reduzido em 1-2 níveis em dispositivos móveis
- **Espaçamento:** Reduzido em aproximadamente 25-35% em mobile
- **Carrossel:** Elemento único visível por vez em mobile, 2-3 em desktop

### Elementos Responsivos

- **Cards:** Ocupam largura total em mobile
- **Imagens:** Redimensionadas e recortadas para maior otimização em mobile
- **Hero:** Altura reduzida e posicionamento de elementos ajustado em telas menores