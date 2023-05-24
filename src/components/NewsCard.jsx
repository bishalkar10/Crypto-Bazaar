export default function NewsCard({ title, description, link, source, imgURL }) {
  return (
    <div className="bg-blue-100 shadow-xl my-12 w-[350px] mx-auto p-5 rounded-xl">
      <img
        className="w-full aspect-auto rounded-xl mb-10"
        src={imgURL}
        alt=""
      />
      <h2 className="font-bold ">{title}</h2>
      <br />
      <p className="mb-5">{description}</p>
      <a href={link} target="_blank">
        <div className="text-center w-36 mx-auto rounded-xl bg-blue-700 text-white mb-5">
          Read full Story
        </div>
      </a>
      <p className="text-xs text-right">
        <i>
          Source :
          <a href={link} target="_blank">
            {source}
          </a>
        </i>
      </p>
    </div>
  );
}
