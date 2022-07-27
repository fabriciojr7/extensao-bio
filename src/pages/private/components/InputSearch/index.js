import Input from "../../../../components/Input";
import { FaSearch } from "react-icons/fa";
import { Container, IconSearch } from "./styles";

export default function InputSearch({ term, change, place }) {
  return (
    <Container>
      <Input
        value={term}
        onChange={(e) => change(e.target.value)}
        placeholder={place}
        autoFocus
      />
      <IconSearch>
        <FaSearch />
      </IconSearch>
    </Container>
  )
}
