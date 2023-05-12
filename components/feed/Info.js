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
          src="https://media.licdn.com/dms/image/D5603AQEUnnUZdBILTw/profile-displayphoto-shrink_800_800/0/1678530059186?e=1689206400&v=beta&t=Cdv-9tVAUVT9-f4BcsMfEqzDj3miXZOoq-ImMM-2FVA"
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
