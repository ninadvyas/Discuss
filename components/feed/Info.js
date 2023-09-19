const style = {
  porfilePic: "h-4 w-4 rounded-full",
  wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
  profilePicContainer: "flex items-center space-x-1",
  tag: "cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline",
  postedBy: "flex items-center space-x-1",
};
const Info = ({author}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img
          className={style.porfilePic}
          src="https://avatars.githubusercontent.com/u/115214615?v=4"
        />
        
      </div>
      <div className={style.tag}>r/ninadvyas</div>
      <div>•</div>
      <div className={style.postedBy}>
        <span>Posted By {author}</span>
        <span>•</span>
        <span>May 12</span>
      </div>
    </div>
  );
};

export default Info;
