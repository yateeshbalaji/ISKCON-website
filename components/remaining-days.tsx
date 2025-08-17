import clsx from "clsx";
import NumberTicker from "./ui/magicui/number-ticker";

type Props = {
  daysLeft: number;
  classname?: string;
};

const RemainingDays: React.FC<Props> = ({ daysLeft, classname }) => {
  return (
    <div className={clsx(classname, "text-center")}>
      <h1 className="text-4xl lg:text-6xl font-bold">Days until Rath Yatra</h1>
      <NumberTicker
        value={daysLeft || 0}
        className="text-4xl lg:text-8xl font-bold"
      />
    </div>
  );
};

export default RemainingDays;
