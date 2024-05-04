import { Badge } from "./ui/badge";

const SectionBadge = ({ text }: { text: string }) => {
  return (
    <Badge variant={"lakudisini"} className="mb-5 w-fit ">
      {text}
    </Badge>
  );
};

export default SectionBadge;
