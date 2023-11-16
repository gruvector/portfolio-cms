import { attributes } from '../../content/main';

type Props = {
  data: (typeof attributes)['footer'];
};

export default function Footer({ data }: Props) {
  const { text } = data;
  return (
    <div
      data-test-id="footer"
      className="w-screen bg-gray-100 px-32 py-16 text-center"
    >
      {text}
    </div>
  );
}
