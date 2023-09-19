import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";

const style = {
  post: 'flex flex-col space-y-1 cursor-pointer',
  wrapper: 'flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]',
  postTitle: "text-lg font-medium text-gray-50",
  postContent: "text-sm font-light text-gray-400",
};
const Post = ({id,title,author,content}) => {
  return (
    <div className={style.wrapper}>
      <Vote />
      <div  className={style.post}>
        <Info author={author}/>
        <h1 className={style.postTitle}>
         {title}
        </h1>
        <p className={style.postContent}>
        {content}
        </p>
        <Actions />
      </div>
    </div>
  );
};

export default Post;
