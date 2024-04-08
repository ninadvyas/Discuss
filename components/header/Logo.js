import Link from 'next/link'
import Image from 'next/image'

const style = {
  wrapper: `inline-flex items-center space-x-2 cursor-pointer`,
}

const Logo = () => {
  return (
    <Link href='/'>
      <a className={style.wrapper}>
        {/* <Image src='' alt='logo' /> */}
      </a>
    </Link>
  )
}

export default Logo
