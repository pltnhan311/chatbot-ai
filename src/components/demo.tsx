import Message from '~/components/message'

const DemoMessage = () => {
  return (
    <div className='overflow-auto'>
      <Message isSender={true} />
      <Message isSender={false} />
      <Message isSender={false} />
      <Message isSender={true} />
      <Message isSender={false} />
      <Message isSender={false} />
      <Message isSender={true} />
      <Message isSender={false} />
      <Message isSender={false} />
    </div>
  )
}

export default DemoMessage
