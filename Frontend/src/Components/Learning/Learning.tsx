import nodeJsLogo from "../../../public/NodeJs.png";
import mysqlLogo from "../../../public/MysqlLogo.svg";
import mongodbLogo from "../../../public/MongoDbLogo.png";
import typescriptLogo from "../../../public/TypeScriptLogo.png";

const LearningList = [
  { imgsrc: nodeJsLogo, text: "NODEJS" },
  { imgsrc: mysqlLogo, text: "MySQL" },
  { imgsrc: mongodbLogo, text: "MONGODB" },
  { imgsrc: typescriptLogo, text: "TYPESCRIPT" },
];

function Learning() {
  return (
    <div className="bg-[#D7D7D7] py-15 ">
      <div className=" md:grid md:grid-cols-4 w-full pt-8 gap-5 px-0 md:px-40 items-center flex flex-col">
        <div className="text-2xl font-semibold pl-15 md:col-span-4 ">
          Learning:
        </div>
        {LearningList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center "
          >
            <img src={item.imgsrc} alt={item.text} />
            <p className="text-2xl pt-1 justify-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;
