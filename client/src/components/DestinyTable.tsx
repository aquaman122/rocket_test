// 상수 데이터
const tableData = [
  ['','時', '日', '月', '年'],
  ['十星\n(십성)', '傷官\n(상관)', '比肩\n(비견)', '傷官\n(상관)', '傷官\n(상관)'],
  ['천간', '임', '정', '계', '계'],
  ['지지', '인', '사', '해', '유'],
  ['십성', '비견', '겁재', '식신', '편재'],
  ['십이운성', '사', '제왕', '태', '장생'],
  ['십이신살', '겁살', '지살', '역마살', '장성살'],
  ['귀인', '(없음)', '(없음)', '천을귀인', '(천을귀인)\n(태극귀인)\n(문창귀인)']
];

const separateColor: { [key: string]: string } = {
  '3-1': 'bg-black text-white',
  '3-2': 'bg-red-500 text-white',
  '3-3': 'bg-black text-white',
  '3-4': 'bg-black text-white',
  '4-1': 'bg-emerald-600 text-white',
  '4-2': 'bg-red-500 text-white',
  '4-3': 'bg-black text-white',
  '4-4': 'bg-wihte text-black'
}

export default function DestinyTable () {
  return (
    <div className="relative flex justify-center w-[95%] h-full max-w-[448px] min-w-[320px] mx-auto border-2 px-2 bg-[#F5F3EC]"
    >
      <div className="absolute top-2 w-full border-t" />
      <div className="absolute bottom-2 w-full border-b" />

      <div className="w-full border-r border-l">
        <div className="flex flex-col text-center w-full p-4">
          <span className="text-xl">김로켓님의 사주</span>
          <span className="text-2xl font-bold">1980년 8월27일 08:10</span>
        </div>

        <div className="w-full p-6">
          {tableData.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className={`flex w-full border-b`}>
                {row.map((cell, colIndex) => {
                  const colorClass = separateColor[`${rowIndex}-${colIndex}`] || '';
                  return (
                    <div
                      key={colIndex}
                      className={`flex flex-1 justify-center items-center border-r text-center p-2 whitespace-pre-line text-sm
                        ${rowIndex > 0 && colIndex > 0 ? 'bg-white' : 'bg-[#F5F3EC]'}
                      `}
                    >
                      <div className={`${colorClass && 'flex justify-center items-center w-[90%] h-10 border rounded-lg'} ${colorClass}`}>
                        {cell}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}