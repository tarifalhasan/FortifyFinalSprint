import AmountDepositCard from "@/components/common/AmountDepositCard";
import Image from "next/image";
import Rebalance from "../../components/Rebalance";
import { useRouter } from "next/navigation";
import { usdc } from "@/assets/images";

const DepositCard = () => {
  const router = useRouter();

  return (
    <div className=" space-y-5">
      <AmountDepositCard />
      <div
        style={{ padding: "15px 25px 15px 25px" }}
        className=" bg-[#101E33]  rounded-[10px]"
      >
        <div
          className="flex items-center justify-between"
          onClick={() => router.push("/page7")}
          style={{ cursor: "pointer" }}
        >
          <div>
            <h5 className=" text-t-17 lg:text-t-20 font-bold text-secondary">
              Need USDC?
            </h5>
            <p className=" text-t-16  sm:text-t-18 font-normal text-white">
              Get the best price with one click!
            </p>
          </div>
          <div>
            <Image
              src={usdc}
              alt=""
              className=" w-[65px] h-[65px] rounded-full"
            />
          </div>
        </div>
      </div>
      <Rebalance />
    </div>
  );
};

export default DepositCard;
