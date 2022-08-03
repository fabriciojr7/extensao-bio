import TitlePage from "../../components/TitlePage";
import TitleTopico from "../../components/TitleTopico";

import { Content, ContentText, Box, AreaText, AreaImage } from './styles';

import planeta from '../../assets/images/logo-bio.png';
import ufmsCptl from '../../assets/images/ufms-cptl.jpg';

export default function Apresentacao() {
  return (
    <>
      <TitlePage text='Apresentação' />

      <Content>

        <Box>
          <AreaText>
            <ContentText>
              <p>Olá, pessoal!! Sejam bem-vindos a 13º Semana da Biologia. Esta edição está contando com
                inúmeros eventos, novidades e atrações. Venham saber um pouco mais!
              </p>
            </ContentText>

            <TitleTopico text='O que é?' />
            <ContentText>
              <p>
                A Semana da Biologia é um projeto de extensão realizado anualmente que tem como
                objetivo sediar pautas pertinentes às diferentes áreas de atuação do Biólogo, sua
                interface com outras áreas do conhecimento e, principalmente sua relação e/ou interação
                com ensino, pesquisa, cultura, aspectos sociais, e empreendedorismo, possibilitando a
                articulação de debates, técnicas e reflexões acerca das novas tendências das Ciências Biológicas.
              </p>
            </ContentText>

            <TitleTopico text='Como será este ano?' />

            <ContentText>
              <p>
                A 13° Semana da Biologia tem como tema desta edição:
                <span> “Educação e Biodiversidade: Divulgando a Ciência”</span>
              </p>

              <p>
                O evento contará com palestras, minicursos e mesas redondas realizadas por especialistas de destaque, voltadas
                para assuntos de extrema importância aos aspirantes e profissionais da área de Ciências Biológicas!
              </p>

              <p>
                A Semana da Biologia deste ano contempla aspectos socioculturais, de empreendedorismo e acadêmicos através de apresentações
                artísticas, recolhimento e distribuição de alimentos não perecíveis para órgãos de caridade, além de mostrar os trabalhos
                científicos desenvolvidos no campus, de espaços reservados para Networking com valiosas trocas de experiências com os demais
                contribuintes e participantes!
              </p>
            </ContentText>
          </AreaText>

          <AreaImage className="planeta">
            <img src={planeta} alt="Imagem" />
          </AreaImage>
        </Box>

        <TitleTopico text='Onde e quando será realizado?' />
        <Box>
          <AreaText>
            <ContentText>
              <p>A 13º Semana da Biologia será realizada nos dias <span>01 a 03 de setembro de 2022</span>, na Universidade Federal de Mato Grosso do Sul,
                no Campus de Três Lagoas (UFMS/CPTL).
              </p>
            </ContentText>
          </AreaText>

          <AreaImage className="cptl">
            <img src={ufmsCptl} alt="Imagem" />
          </AreaImage>
        </Box>
      </Content>
    </>
  )
}
