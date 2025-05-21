import DestinyTable from "@/components/DestinyTable";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="relative max-w-[448px] min-w-[320px]">
        <img src="/fullImage.png" alt="webtoonImage" />
        <div className="absolute top-[33.2%] left-[34.2%] transform -translate-x-1/2 -translate-y-1/2 text-center text-md small:text-xl">
          이제 본격적으로<br />
          석원님의 사주팔자를<br />
          분석해볼 차례네요.
        </div>
        <div className="absolute top-[50.4%] left-[37.5%] transform -translate-x-1/2 -translate-y-1/2 text-center text-md small:text-xl">
          제가 석원님의 사주를<br />
          보기 쉽게 표로 정리했어요.
        </div>
      </div>
      <div className="w-full h-full max-w-[448px] min-w-[320px] -mt-[35rem] small:-mt-[42rem] mobile:-mt-[50rem]">
        <DestinyTable />
      </div>
    </div>
  );
}
