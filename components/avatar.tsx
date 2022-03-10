import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="mr-4 rounded-full"
        height="48"
        width="48"
        alt={name}
      />
      <div className="text-xl font-bold text-indigo-600">{name}</div>
    </div>
  )
}

export default Avatar
