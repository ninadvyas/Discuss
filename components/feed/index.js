import Post from '../common/Post'
//this will come from database
const posts = [
    {id: 0, title: 'build reddit', author:'ninad'},
    {id: 1, title: 'build facebook', author:'kanj'},
    {id: 2, title: 'build instagaram', author:'vansh'},
]
const style ={
    wrapper: 'space-y-2.5',
}
const Feed = () => {
    return (
        <div className={style.wrapper}>
        {posts.map((post,id) => (
             <Post {...post} key={id}/>
        ))}
        </div>
        )
    
  }
 export default Feed

