import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Assessor de Presidência',
        p: 'Asimov Jr. | Mar 2025 - Presente',
      },
      text: '<p>Atuo na área administrativa da Asimov Jr, desempenhando funções essenciais para a gestão eficiente da empresa. Minhas principais responsabilidades incluem:</p> <p>- Gestão de parcerias e contratos, garantindo alinhamento estratégico e conformidade documental.</p> <p>- Controle de caixa e financeiro, assegurando organização e transparência nos processos internos.</p> <p>- Emissão de notas fiscais (NF), lidando com documentação fiscal e garantindo a conformidade tributária.</p> <p>- Organização administrativa, estruturando processos para otimizar a operação da empresa.</p>',
    },
    {
      summary: {
        strong: 'Trainee',
        p: 'Asimov Jr. | Nov 2024 - Mar 2025',
      },
      text: '<p>Período de capacitação intensiva com aprendizado em áreas essenciais para a gestão e operação de uma empresa júnior.</p> <p>- Desenvolvimento de habilidades em Excel básico, facilitando a organização e análise de dados.</p> <p>- Aprimoramento da comunicação assertiva, essencial para interações profissionais eficazes.</p> <p>- Experiência prática com prospecção de clientes, compreendendo estratégias de captação e negociação.</p> <p>- Noções sobre a organização administrativa da empresa júnior, incluindo estrutura, processos internos e trabalho em equipe.</p> <p>- Conceitos e fundamentos de UX e UI com a finalidade de capacitação de sites.</p> <p>- Desenvolvimento de sites utilizando a ferramenta WordPress.</p> <p>Essa experiência me proporcionou uma visão ampla sobre o funcionamento de uma EJ, desenvolvendo tanto habilidades técnicas quanto interpessoais, fundamentais para minha trajetória profissional.</p>',
    },
    {
      summary: {
        strong: 'Membro área Networking',
        p: 'HawkSec UNIFEI | Abr 2024 - Fev 2025',
      },
      text: '<p>Responsável por pesquisar, configurar e otimizar ferramentas em ambientes de teste e competições CTF. Desenvolvi conhecimento básico acerca do uso de ferramentas como Wireshark, Nmap, Burp Suite e Metasploit para análise de tráfego e identificação de vulnerabilidades em aplicações web e banco de dados, além de resolver desafios práticos em plataformas de CTF.</p> <p>Além disso, pude desenvolver fortemente minhas habilidades interpessoais como trabalho em equipe, comunicação eficaz e resolução de problemas sob pressão, essenciais para a colaboração em desafios complexos e tomada de decisões estratégicas.</p>',
    },
    {
      summary: {
        strong: 'Trainee',
        p: 'HawkSec UNIFEI | Mai 2024 - Jun 2024',
      },
      text: '<p>Participação no programa de trainee da HawkSec UNIFEI, focado em Capture The Flag (CTF). Durante este período, adquiri conhecimentos fundamentais em segurança da informação e participei ativamente de competições CTF, desenvolvendo habilidades práticas em um ambiente desafiador e dinâmico.</p>',
    },
  ]);
}