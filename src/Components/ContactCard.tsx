interface ContactCardProps {
  url: string;
  logo: React.ReactNode;
}

const ContactCard = ({ url, logo }: ContactCardProps) => {
  return (
    <>
      <a
        href={url}
        className="flex justify-center items-center p-5 rounded-full text-[#eff5f5] dark:text-[#0a1010] bg-cyan-500 dark:bg-cyan-300 hover:bg-cyan-600 hover:dark:bg-cyan-600 "
      >
        {logo}
      </a>
    </>
  );
};

export default ContactCard;
