import caio from '../../assets/images/palestrantes/caio.jpeg';
import eldisbelini from '../../assets/images/palestrantes/Edis Belini.jpeg';
import erivelton from '../../assets/images/palestrantes/Erivelton.jpeg';
import felipe from '../../assets/images/palestrantes/Felipe Martins.jpeg';
import fernando from '../../assets/images/palestrantes/fernando.png';
import flavio from '../../assets/images/palestrantes/Flavio Fardin.png';
import gabriel from '../../assets/images/palestrantes/Gabriel Massocato.jpg';
import helder from '../../assets/images/palestrantes/Helder.JPG';
import jennifer from '../../assets/images/palestrantes/jennifer.jpg';
import jose from '../../assets/images/palestrantes/Jose Eduardo.jpg';
import lucas from '../../assets/images/palestrantes/Lucas Gazarini.jpeg';
import murilo from '../../assets/images/palestrantes/Murilo.jpeg';
import natalia from '../../assets/images/palestrantes/Natalia Ciocca.jpeg';
import renan from '../../assets/images/palestrantes/Renan Garcia.jpeg';
import rodrigo from '../../assets/images/palestrantes/Rodrigo Mizobe.jpeg';


export const dia1 = [
  {
    id: 1,
    horario: '07:00 às 07:30',
    local: 'Anfiteatro Dercir',
    tema: 'Entrega de material',
    palestrante: '',
    resumo: ``,
  },
  {
    id: 2,
    horario: '07:30 às 08:00',
    local: 'Anfiteatro Dercir',
    tema: 'Abertura',
    palestrante: '',
    resumo: ``,

  },
  {
    id: 3,
    horario: '08:00 às 09:30',
    local: 'Anfiteatro Dercir',
    tema: 'Palestra 1: Programa de Conservação do Tatu-canastra',
    palestrante: 'Gabriel Massocato',
    especializacao: 'Biólogo e Coordenador do Projeto Tatu-canastra Pantanal',
    resumo: `Apesar de ser a maior espécie de tatu, estes gigantes são raramente vistos. Até recentemente, pouco se sabia sobre eles e o que
    conhecíamos ainda era incerto. Através dos esforços da equipe do Projeto Tatu-Canastra, e de sua preocupação em compartilhar informações
    em revistas científicas e na mídia, hoje em grande parte do mundo, as pessoas sabem da sua existência e da importância da sua toca para
    outras espécies que compartilham o mesmo habitat. Graças ao trabalho de todos os membros da equipe do Programa de Conservação do Tatu-canastra
    desenvolvemos pesquisa e conservação da espécie em 4 biomas na América do Sul. Venha conhecer os esforços de pesquisa e os sucessos na conservação
    da maior espécie de tatu do mundo.`,
    foto: gabriel
  },
  {
    id: 4,
    horario: '09:30 às 10:00',
    local: 'Anfiteatro Dercir',
    tema: 'Coffee break',
    palestrante: '',
    resumo: ``
  },
  {
    id: 5,
    horario: '10:00 às 11:00',
    local: 'Anfiteatro Dercir',
    tema: 'Palestra 2',
    palestrante: 'Jailson',
    especializacao: '',
    resumo: ``,
  },
  {
    id: 6,
    horario: '11:00 às 13:00',
    local: 'Almoço',
    tema: 'Almoço',
    palestrante: '',
    resumo: ``,
  },
  {
    id: 7,
    horario: '13:00 às 14:00',
    local: 'Anfiteatro Geografia',
    tema: 'Palestra 3: Estado da arte dos peixes de Mato Grosso do Sul',
    palestrante: 'Prof. Dr. Fernando Rogerio de Carvalho (CPTL/UFMS)',
    especializacao: 'Biólogo e doutor em Biologia Animal (UFRGS)',
    resumo: `O estado de Mato Grosso do Sul (MS), é drenado por rios de duas importantes bacias
    hidrográficas: a bacia do alto rio Paraná (ARP), em 47,5% da área no estado, e a bacia do alto
    rio Paraguai (BAP), em 52,5%. O número total atual de peixes em MS somam 448 espécies, distribuídas
    em 11 ordens e 45 famílias. Destas, 235 espécies ocorrem na bacia do ARP e 333 espécies na BAP;
    as espécies compartilhadas entre ambas são 108 espécies, excluindo as sabidamente introduzidas.
    Há em torno de 7% dessa fauna que não está descrita formalmente e 13 táxons são alóctones/exóticos
    às bacias. Dessa forma, os peixes do estado de MS constituem uma riqueza biológica que devem ser
    preservados frente aos impactos antrópicos deletérios a que estão sujeitos.`,
    foto: fernando
  },
  {
    id: 8,
    horario: '14:00 às 15:00',
    local: 'Anfiteatro Geografia',
    tema: 'Palestra 4: Da escola que temos à escola que queremos para todos',
    palestrante: 'Prof. Dr. Jose Eduardo de Oliveira Evangelista Lanuti (CPTL/UFMS)',
    especializacao: 'Pedagogo, matemático e doutor em Educação (Unicamp)',
    resumo: `A análise do processo de escolarização de alunos considerados com deficiência nos permite constatar que a escola, historicamente,
    foi privilégio de uma parcela da sociedade. No Brasil, já avançamos muito nesse sentido, mas, da escola que temos à escola que queremos
    para todos, ainda há muito a ser feito! Temos o dever de estar atentos a tudo o que pode ser implementado para que a inclusão escolar
    aconteça e compreender os fundamentos da inclusão é essencial para que consigamos transformar nossas práticas a fim de acolher todos, indistintamente.`,
    foto: jose
  },
  {
    id: 9,
    horario: '15:00 às 15:15',
    local: 'Anfiteatro Geografia',
    tema: 'Coffee break',
    palestrante: '',
    resumo: ``
  },
  {
    id: 10,
    horario: '15:15 às 16:15',
    local: 'Anfiteatro Geografia',
    tema: 'Palestra 5: Atuação do Biólogo em uma Secretaria Municipal de Meio Ambiente',
    palestrante: 'Flavio Henrique Fardin',
    especializacao: 'Biólogo e Fiscal Ambiental da Secretaria Municipal de Meio Ambiente de Três Lagoas-MS',
    resumo: `A atuação de um biólogo em uma prefeitura está associada a uma grande diversidade de tarefas, dentre as quais: emissão de autorizações de corte de
    árvores; elaboração de legislação específicas para o município de atuação; execução de projetos paisagísticos, licenciamento ambiental, educação ambiental e
    gestão de Unidades de Conservação. A palestra busca dar um panorama geral da atuação do profissional neste campo de atuação.`,
    foto: flavio
  },
  {
    id: 11,
    horario: '16:15',
    local: 'Anfiteatro Geografia',
    tema: 'Palestra 6 - Neurobiologia dos comportamentos defensivos: do inato ao aprendido',
    palestrante: 'Prof. Dr. Lucas Gazarini (CPTL/UFMS)',
    especializacao: 'Farmacêutico e doutor em Farmacologia (UFSC)',
    resumo: `Uma abordagem da neurociência por trás dos comportamentos de defesa, com enfoque em relevância evolutiva/adaptativa, substratos
    neurais recrutados em diferentes estratégias de enfrentamento e introdução a métodos de análise de comportamentos inatos e aprendidos,
    com relevância clínica, no contexto da pesquisa básica.`,
    foto: lucas
  },
]

export const dia2 = [
  {
    id: 1,
    horario: '07:00 às 11:00',
    local: 'Bloco 6 - Área aberta',
    tema: 'Apresentação de trabalhos e visita guiada de alunos do ensino médio',
    palestrante: '',
    resumo: ``
  },
  {
    id: 2,
    horario: '11:00 às 13:00',
    local: 'Almoço',
    tema: 'Almoço',
    palestrante: '',
    resumo: ``,
  },
  {
    id: 3,
    horario: '13:00 às 15:00',
    local: 'Anfiteatro Geografia',
    tema: 'Roda de tereré e Empreendedorismo:',

    titulo: 'Carreira: uma espécie em extinção',
    palestrante: 'Renan Garcia de Oliveira',
    especializacao: 'Biólogo e mestre em Genética (IBILCE/UNESP)',
    resumo: `Nesse bate-papo, falaremos sobre "carreiras" (se é que elas existem), as demandas de trabalho do mercado atual e as perspectivas na Educação.
    Meu nome é Renan, tenho 32 anos, sou biólogo, mestre em Genética e empreendedor em Educação há quase 10 anos. Atualmente, sou CEO da PEdu, solução
    tecnológica de rotinas de estudo para Escolas, sou fundador do Personal Educa, cursinho pré-universitário e Head de Edtechs no Pólen Hub de Inovação em
    Educação.`,
    foto: renan,

    titulo2: 'É possível empreender com financiamento governamental?',
    palestrante2: 'Caio Fernando Ramalho de Oliveira',
    especializacao2: 'Biólogo e doutor em Biologia Funcional e Molecular (Unicamp)',
    resumo2: `O empreendorismo está em pleno crescimento no Brasil. Algumas áreas, como a pesquisa em Ciências Biológicas, podem se beneficiar
    de uma série de projetos de inovação financiados por ações governamentais. Assim, o caminho do empreendorismo para futuros biólogos será
    apresentado, bem como alguns editais de financiamento, experiências e exemplos de sucesso. Iremos mostrar que é possível tirar a sua ideia do papel,
    captar recursos e obter parceiros para o desenvolvimento de um negócio de sucesso.`,
    foto2: caio,

    titulo3: 'O empreendedorismo na Consultoria Ambiental',
    palestrante3: 'Natália Gaspar Munhoz Ciocca',
    especializacao3: 'Bióloga e mestre em Ciências da Saúde (FAMERP)',
    resumo3: `O empreendedorismo no Brasil está tendo um crescimento significativo nos últimos anos e o meio ambiente é um dos assuntos em maior evidência.
    Atividades industriais ou até mesmo atividades agrossilvipastoris necessitam estar dentro das legislações ambientais para que as mesmas possam ser
    desenvolvidas. Dentro deste contexto, profissionais da área ambiental, como por exemplo os da Biologia podem buscar o campo da Consultoria Ambiental como
    forma de empreender. São diversas áreas que o Biólogo pode se especializar e atuar dentro da consultoria ambiental. Iremos mostrar que é possível um
    Biólogo de formação ser um profissional de sucesso dentro da consultoria ambiental e nortear os primeiros passos para o desenvolvimento do seu negócio.`,
    foto3: natalia
  },
  {
    id: 4,
    horario: '15:00 às 15:15',
    local: 'Anfiteatro Geografia',
    tema: 'Coffee break',
    palestrante: '',
    resumo: ``,
  },
  {
    id: 5,
    horario: '15:15 às 16:15',
    local: 'Anfiteatro Geografia',
    tema: 'Palestra 7',
    palestrante: '',
    resumo: ``,
  },
  {
    id: 6,
    horario: '16:15',
    local: 'Anfiteatro Geografia',
    tema: 'Palestra 8',
    palestrante: '',
    resumo: ``,
  },
]

export const dia3 = [
  {
    id: 1,
    horario: '07:00 às 11:00',
    local: 'Multiplas salas',
    tema: 'Oficinas e minicursos',
    palestrante: ``,
    resumo: ``,
    miniCursos: [
      {
        id: 1,
        tema: 'Alfabetização científica em espaços formais, não formais e informais da Educação em Ciências',
        palestrante: 'Jennifer Caroline de Sousa',
        especializacao: 'Bióloga; Mestra em Fisiologia Geral (IB/USP) e Doutoranda em Educação (USP)',
        resumo: `O progressivo desenvolvimento científico e tecnológico da sociedade moderna trouxe consigo a necessidade de educar
        cientificamente a população. Nesse contexto, a alfabetização científica surgiu e se consolidou como uma tarefa dos diferentes
        espaços educacionais, cuja finalidade é promover a aprendizagem, o reconhecimento e a incorporação da ciência nas práticas culturais
        e sociais. Em vista disso, propõe-se fomentar o conhecimento e o diálogo sobre a temática, considerando sua relevância para o ensino
        de Ciências e Biologia na educação formal e para as ações desenvolvidas em espaços educativos não formais e informais ligados à Educação
        em Ciências.`,
        foto: jennifer,
      },
      {
        id: 2,
        tema: 'Identificação e Educação Preventiva dos Principais Animais Peçonhentos',
        palestrante: 'Prof. Dr. Hélder Silva e Luna (CPTL/UFMS)',
        especializacao: 'Médico Veterinário e Doutor em Patologia Molecular (UnB)',
        palestrante2: 'Rodney Murillo Peixoto Couto',
        especializacao2: 'Biólogo e especialista em Direito Ambiental / Sócio-Proprietário, Diretor Executivo do Biotério Pantanal, Brasil',

        resumo: `Serão apresentados alguns dos principais animais peçonhentos, incluindo: dados epidemiológicos; importância da sua preservação;
        identificação dos principais animais peçonhentos de interesse em saúde pública como abelhas, aranhas, escorpiões, serpentes, entre outros;
        algumas técnicas de manejo, resgate e contenção e conhecimentos sobre a educação preventiva contra estes tipos de acidentes.`,
        foto: helder,
        foto2: murilo,
      },
      {
        id: 3,
        tema: 'Técnicas eletroforéticas e cromatográficas como ferramentas de diagnóstico das hemoglobinopatias',
        palestrante: 'Edis Belini Júnior',
        especializacao: 'Biólogo; Doutor em Genética (IBILCE/UNESP)',
        resumo: `As mutações que afetam a expressão dos genes da hemoglobina (Hb) normal humana levam às hemoglobinopatias hereditárias. Estas representam
        um grupo de afecção genética mais comumente encontradas nas populações. Atualmente, mais de 1.800 diferentes alelos mutantes, caracterizados em nível
        molecular, já foram descritos e de forma geral podem originar as Hb variantes, que alteram a estrutura da proteína, ou as talassemias que ocasionam um
        equilíbrio quantitativo nas cadeias globínicas. O diagnóstico das Hb anormais depende do laboratório que utiliza combinação de ensaios biofísicos,
        bioquímicos e moleculares para confirmar o diagnóstico laboratorial. O referido minicurso abordará técnicas eletroforéticas e cromatográficas para
        solução de casos reais e de rotina do Laboratório de Genética e Biologia Molecular da UFMS/CPTL. Dessa forma, os alunos terão vivênca prática/teórica
        sobre o assunto e permitirá uma aproximação do uso de ferramentas de diagnóstico laboratorial que envolve conhecimentos de bioquímica, biologia
        molecular e de genética.`,
        foto: eldisbelini,
      },
      {
        id: 4,
        tema: 'Elaboração de mapa de localização e aplicação das geotecnologias na biologia.',
        palestrante: 'Erivelton Pereira Vick',
        especializacao: 'Geógrafo (FCT/UNESP), mestre e doutorando pelo PPGeo (UFMS/CPTL)',
        palestrante2: 'Felipe Martins Pereira',
        especializacao2: 'Biólogo (UFMS/CPTL) e mestrando pelo PPGeo (UFMS/CPTL)',
        resumo: `A proposta do minicurso está alicerçada em três partes: 1) exposição de aplicações das geotecnologias em estudos ambientais voltados para o
        campo de conhecimento das ciências biológicas; 2) principais sites e bases de dados geográficos disponíveis de forma gratuita para serem empregados em
        estudos/relatórios técnicos e; 3) elaboração de um mapa de localização, empregando software de SIG gratuito – Qgis – para consecução de seu “primeiro mapa”,
        sendo este, o objetivo final do minicurso.`,
        foto: erivelton,
        foto2: felipe

      },
      {
        id: 5,
        tema: 'Metodologias ativas e confecção de material didático para o Ensino de Ciências e Biologia',
        palestrante: 'Rodrigo Satoro Mizobe',
        especializacao: 'Biólogo e mestre em Biologia Animal (UFMS)',
        resumo: `Minicurso teórico e prático onde serão abordados principais aspectos da Base Nacional Comum Curricular (BNCC) e Currículo de Mato Grosso do Sul; e
        Metodologias ativas aplicadas no Ensino de Ciências e Biologia. Neste cenário, serão desenvolvidas duas oficinas de confecção de moldes em silicone para a
        replicação de modelos tridimensionais e fósseis e de réplicas fósseis (em gesso).`,
        foto: rodrigo
      },
      {
        id: 6,
        tema: 'Minicurso 6',
        palestrante: 'Definir palestrante minicurso 6',
        especializacao: '',
        resumo: ``,
      },
    ]
  },
  {
    id: 2,
    horario: '11:00',
    local: 'ADUFMS',
    tema: 'Almoço - PL confraternização',
    palestrante: '',
    resumo: `Após profundos momentos de aprendizagem, a Comissão Organizadora da 13° Semana da Biologia, convida a todos os participantes marcarem sua presença na confraternização de encerramento! Um encontro simbólico voltado à descontração e, claro, oportunidades de trocas de vivências, experiências e conhecimentos!
    A partir das 11:00, na ADUFMS, localizada no endereço: rua Luís Corrêa da Silveira, 1665, Jardim Alvorada, Três Lagoas - MS.
    Contamos com a sua presença!!`
  },
]
