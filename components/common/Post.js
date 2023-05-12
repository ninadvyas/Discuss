import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";

const style = {
  post: 'flex flex-col space-y-1 cursor-pointer',
  wrapper: 'flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]',
  postTitle: "text-lg font-medium text-gray-50",
  postContent: "text-sm font-light text-gray-400",
};
const Post = ({id,title,author}) => {
  return (
    <div className={style.wrapper}>
      <Vote />
      <div  className={style.post}>
        <Info author={author}/>
        <h1 className={style.postTitle}>
         {title}
        </h1>
        <p className={style.postContent}>
          To build a Reddit clone with Next.js, you would need to use
          server-side rendering to fetch and display data from a backend API.
          You could use a popular UI library like React or Material-UI to build
          the front-end interface. You would also need to set up authentication
          and user sessions, as well as implement features like upvoting and
          commenting.
        </p>
        <Actions />
      </div>
    </div>
  );
};

export default Post;
