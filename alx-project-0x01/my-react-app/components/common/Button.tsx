const Button: React.FC<{ onClick: () => void; text: string }> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {text}
    </button>
  );
};

export default Button;