import { Avatar } from '@mantine/core'

const Message = ({ isSender }: { isSender: boolean }) => {
  return (
    <div className={`flex items-start px-2 mb-2 ${isSender ? '' : 'flex-row-reverse'}`}>
      <div className='flex items-center space-x-2 space-y-4'>
        <Avatar
          className='w-8 h-8'
          src={'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'}
        />
        <div className='text-base font-thin'>
          <div
            className={`max-w-md rounded-lg bg-gradient-to-tr ${isSender ? 'bg-gray-100' : 'bg-blue-100'} p-3 shadow leading-relaxed`}
          >
            Resplit will apply the correct cursor based on the direction provided to the Root component.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
