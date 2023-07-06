import Image from 'next/image'
import reddit from './reddit.jpg'
const style = {
  wrapper: 'mt-14 flex flex-col',
  bannerImage: 'h-52 relative',
  bannerContentWrapper: 'mx-auto max-w-5xl px-6 py-2',
  profileInfoWrapper: 'flex items-start space-x-4 pb-5',
  profilePicWrapper: `-mt-6 h-20 w-20 relative`,
  profilePic:
    'h-full w-full rounded-full border-4 border-white bg-white bg-cover object-contain',
  titleWrapper: 'mt-1',
  title: 'text-2xl font-bold text-[#D7DADC]',
  tag: 'pt-1 text-sm text-gray-400',
  joinButtonContainer: 'mt-1 flex items-center',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold',
}

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.bannerImage}>
        <Image
          src={reddit}
          layout='fill'
          className='object-cover'
          alt='here'
        />
      </div>
      <div className='bg-[#1a1a1b]'>
        <div className={style.bannerContentWrapper}>
          <div className={style.profileInfoWrapper}>
            <div className={style.profilePicWrapper}>
              <Image
                className={style.profilePic}
                src='https://media.licdn.com/dms/image/D5603AQEUnnUZdBILTw/profile-displayphoto-shrink_800_800/0/1678530059186?e=1689206400&v=beta&t=Cdv-9tVAUVT9-f4BcsMfEqzDj3miXZOoq-ImMM-2FVA'
                layout='fill'
                alt=''
              />
            </div>

            <div className={style.titleWrapper}>
              <h1 className={style.title}>Ninad Vyas</h1>
              <h2 className={style.tag}>r/ninadvyas</h2>
            </div>

            <div className={style.joinButtonContainer}>
              <button className={style.joinedButton}>Joined</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
