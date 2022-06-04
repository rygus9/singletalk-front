import MatchingForm, {
  MatchForm,
} from "components/mocular/matching/MatchingForm";
import { useParams } from "react-router-dom";
import { useMatching } from "./hook/useMatching";
import useMatchingChange from "./hook/useMatchingChange";

export default function MatchUpdate() {
  const { mutate: MatchingMutate } = useMatchingChange();
  const params = useParams();

  const { data } = useMatching(params.matchIdx!);

  const onSubmit = (data: MatchForm) => {
    MatchingMutate(data);
  };

  return <MatchingForm onSubmit={onSubmit} match={data!} />;
}
