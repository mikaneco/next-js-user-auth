import { useRouter } from 'next/router';

interface ActiveButtonProps {
    children: React.ReactNode;
    href: string;
}


function ActiveButton({ children, href }: ActiveButtonProps) {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className='py-10'>
        <a href={href} onClick={handleClick} className="bg-sky-500 text-white rounded px-2 py-1">
        {children}
        </a>
    </div>
  );
}

export default ActiveButton;