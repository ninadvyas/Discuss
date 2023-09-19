import Post from '../common/Post'
//this will come from database
const posts = [
    {id: 0, title: '5 A.M Club', author:'ninad',content:'This book promotes the idea that the early morning hours are ideal for personal growth and productivity, emphasizing the importance of starting the day at 5 am.The author suggests breaking the first hour of the day into three equal segments for exercise, reflection, and planning, aiming to enhance physical, mental, and emotional well-being.Robin Sharma introduces the concept of nurturing the mind, heart, health, and soul to achieve a balanced and fulfilling life.The book discusses the alternating cycles of productivity and recovery, highlighting the importance of rest to optimize performance and prevent burnout.'},
    {id: 1, title: 'React Routers', author:'ninad',content:'React Routes are a fundamental part of building single-page applications (SPAs) with React.They enable seamless navigation within a web application, allowing users to move between different pages or views without the need for a full page refresh.React Routes leverage the concept of declarative routing, meaning that you define the desired behavior of your routes in a straightforward and intuitive manner .'},
    {id: 2, title: 'Firebase ', author:'ninad',content:'Firebase, Inc.[1] is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++.'},
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

