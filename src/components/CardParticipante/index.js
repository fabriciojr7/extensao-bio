import {
  Card, CardContent, ImageContent, InfosContent
} from './styles';

export default function CardParticipante({ participante }) {
  return (
    <Card>
      <CardContent>
        <ImageContent>
          <img
            src={participante.foto}
            alt='Foto participante do evento'
          />
        </ImageContent>

        <InfosContent>
          <h3>{participante.nome}</h3>
          <h4>{participante.funcao}</h4>
        </InfosContent>
      </CardContent>

    </Card>
  )
}
