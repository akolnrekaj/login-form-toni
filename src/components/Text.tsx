interface TextProps {
  value?: string;
}

const Text = ({ value }: TextProps) => {
  return <div>{value}</div>;
};

export default Text;
