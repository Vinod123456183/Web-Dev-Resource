const Button = ({ text, onClick, outLined }) => {
  return (
    <div
      className={
        outLined
          ? ' text-white px-5 p-1 text-center min-w-10  hover:shadow-lg shadow-cyan-600  rounded-full pointer bg-twitterColor'
          : 'text-white px-5 p-1  text-center min-w-10 hover:shadow-lg shadow-cyan-600  rounded-full pointer border-2   '
      }
      onClick={() => onClick()}
    >
      {text}
    </div>
  )
}

export default Button
