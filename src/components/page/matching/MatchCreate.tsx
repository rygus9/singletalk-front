import MatchingForm, {
  MatchForm,
} from "components/mocular/matching/MatchingForm";
import useMatchingRegist from "./hook/useMatchingRegist";

export default function MatchCreate() {
  const { mutate: MatchingMutate } = useMatchingRegist();

  const onSubmit = (data: MatchForm) => {
    MatchingMutate(data);
  };

  return <MatchingForm onSubmit={onSubmit} />;
}
